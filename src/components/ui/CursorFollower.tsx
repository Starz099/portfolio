"use client";

import { useEffect, useState } from "react";

interface CursorFollowerProps {
  size?: number;
  color?: string;
}

export default function CursorFollower({
  size = 40,
  color = "rgba(236, 72, 153, 0.3)",
}: CursorFollowerProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
      style={{
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        backgroundColor: color,
        transform: "translate(-50%, -50%)",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}
