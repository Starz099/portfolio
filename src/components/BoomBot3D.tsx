// BoomBot3D.tsx
"use client"; // For Next.js App Router

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// ==================== TYPES ====================

interface BoomBot3DProps {
  /** Path to GLB/GLTF model file */
  modelPath: string;
  /** Camera distance from origin (controls zoom level) */
  depth?: number;
  /** Bot movement speed */
  speed?: number;
  /** Distance at which bot stops moving toward cursor */
  arriveThreshold?: number;
  /** Camera rotation sensitivity when dragging the bot */
  rotateSpeed?: number;
  /** CSS z-index for overlay positioning */
  zIndex?: number;
  /** Show ground plane and grid for visual reference */
  showFloor?: boolean;
  /** Scale of the 3D model */
  modelScale?: number;
}

interface BoomBotModelProps {
  modelPath: string;
  modelScale: number;
}

interface BoomBotControllerProps {
  modelPath: string;
  speed: number;
  arriveThreshold: number;
  onBotClick?: (e: PointerEvent) => void;
  modelScale: number;
}

interface CameraControllerProps {
  depth: number;
  rotateSpeed: number;
  isDraggingBot: React.MutableRefObject<boolean>;
}

// ==================== COMPONENTS ====================

/**
 * BoomBot Model Component
 */
const BoomBotModel = React.forwardRef<THREE.Group, BoomBotModelProps>(
  function BoomBotModel({ modelPath, modelScale }, ref) {
    const { scene } = useGLTF(modelPath);

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={modelScale}
        position={[0, 0, 0]}
      />
    );
  },
);

/**
 * BoomBot controller - handles cursor following, movement, and click detection
 */
function BoomBotController({
  modelPath,
  speed,
  arriveThreshold,
  onBotClick,
  modelScale,
}: BoomBotControllerProps) {
  const bot = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));

  // Track mouse/pointer anywhere on screen and convert to 3D world position
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      // Normalize mouse coordinates
      const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
      const yNorm = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.set(xNorm, yNorm);

      // Cast ray from camera through mouse position
      raycaster.current.setFromCamera(mouse.current, camera);

      // Intersect with ground plane (y = 0)
      const intersection = new THREE.Vector3();
      raycaster.current.ray.intersectPlane(plane.current, intersection);

      if (intersection) {
        targetRef.current.copy(intersection);
      }
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [camera]);

  // Check if pointer is over bot
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!bot.current) return;

      const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
      const yNorm = -(e.clientY / window.innerHeight) * 2 + 1;

      const tempRaycaster = new THREE.Raycaster();
      tempRaycaster.setFromCamera(new THREE.Vector2(xNorm, yNorm), camera);

      const intersects = tempRaycaster.intersectObject(bot.current, true);

      if (intersects.length > 0) {
        onBotClick?.(e);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [camera, onBotClick]);

  // Smooth movement towards target
  useFrame((_, dt) => {
    if (!bot.current) return;

    const target = targetRef.current;
    const pos = bot.current.position;

    // Calculate direction and distance to target
    const direction = new THREE.Vector3(target.x - pos.x, 0, target.z - pos.z);
    const distance = direction.length();

    // Only move if far enough from target
    if (distance > arriveThreshold) {
      direction.normalize();
      const moveAmount = Math.min(distance, speed * dt);
      pos.x += direction.x * moveAmount;
      pos.z += direction.z * moveAmount;

      // Rotate to face movement direction
      const targetAngle = Math.atan2(direction.x, direction.z);
      let currentAngle = bot.current.rotation.y;

      // Normalize angle difference to shortest path
      let angleDiff = targetAngle - currentAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      // Smooth rotation
      bot.current.rotation.y += angleDiff * dt * 6;
    }
  });

  return (
    <BoomBotModel modelPath={modelPath} ref={bot} modelScale={modelScale} />
  );
}

/**
 * Camera controller - handles drag-to-rotate when dragging the bot
 */
function CameraController({
  depth,
  rotateSpeed,
  isDraggingBot,
}: CameraControllerProps) {
  const { camera } = useThree();
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, depth * 0.3, depth);
    camera.lookAt(0, 0, 0);
  }, [camera, depth]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingBot.current) return;

      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      lastPosition.current = { x: e.clientX, y: e.clientY };

      // Rotate camera around the origin (bot center)
      const rotationAngle = deltaX * rotateSpeed * 0.01;
      const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
      const currentAngle = Math.atan2(camera.position.x, camera.position.z);
      const newAngle = currentAngle + rotationAngle;

      camera.position.x = radius * Math.sin(newAngle);
      camera.position.z = radius * Math.cos(newAngle);

      // Vertical rotation (constrain to avoid flipping)
      const verticalAngle = deltaY * rotateSpeed * 0.01;
      const currentHeight = camera.position.y;
      const newHeight = THREE.MathUtils.clamp(
        currentHeight + verticalAngle * depth * 0.1,
        depth * 0.1,
        depth * 0.8,
      );
      camera.position.y = newHeight;

      camera.lookAt(0, 0, 0);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (isDraggingBot.current) {
        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [camera, depth, rotateSpeed, isDraggingBot]);

  return null;
}

// ==================== MAIN COMPONENT ====================

/**
 * BoomBot3D - Plug-and-play 3D character overlay component
 * Similar to oneko.js but in 3D!
 *
 * @example
 * ```tsx
 * <BoomBot3D
 *   modelPath="/boombot.glb"
 *   depth={10}
 *   speed={5}
 *   showFloor={false}
 * />
 * ```
 */
export default function BoomBot3D({
  modelPath,
  depth = 10,
  speed = 5,
  arriveThreshold = 0.1,
  rotateSpeed = 1,
  zIndex = 9999,
  showFloor = false,
  modelScale = 1.3,
}: BoomBot3DProps) {
  const isDraggingBot = useRef(false);

  const handleBotClick = (e: PointerEvent) => {
    isDraggingBot.current = true;
    document.body.style.cursor = "grabbing";
  };

  useEffect(() => {
    const handlePointerUp = () => {
      isDraggingBot.current = false;
      document.body.style.cursor = "";
    };

    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      // Reset cursor on cleanup
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: zIndex,
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, depth * 0.3, depth], fov: 45 }}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        gl={{ alpha: true }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.4} />

        {/* Bot controller */}
        <BoomBotController
          modelPath={modelPath}
          speed={speed}
          arriveThreshold={arriveThreshold}
          onBotClick={handleBotClick}
          modelScale={modelScale}
        />

        {/* Camera drag controls */}
        <CameraController
          depth={depth}
          rotateSpeed={rotateSpeed}
          isDraggingBot={isDraggingBot}
        />

        {/* Optional ground plane and grid */}
        {showFloor && (
          <>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.01, 0]}
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial
                color="#1a1a2e"
                transparent
                opacity={0.3}
                roughness={0.8}
              />
            </mesh>

            <gridHelper
              args={[50, 50, "#4a5568", "#2d3748"]}
              position={[0, 0, 0]}
            />
          </>
        )}
      </Canvas>
    </div>
  );
}

// Preload the model
export function preloadBoomBotModel(modelPath: string) {
  useGLTF.preload(modelPath);
}
