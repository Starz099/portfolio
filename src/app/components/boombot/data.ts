export const LIGHTING_PRESETS: {
  key: string;
  label: string;
  description: string;
  color: string;
}[] = [
  {
    key: "default",
    label: "Default",
    description:
      "Balanced ambient, directional, and point light. Good all-rounder.",
    color: "#e2e8f0",
  },
  {
    key: "studio",
    label: "Studio",
    description:
      "Bright, even illumination from two directional lights. Great for showcases.",
    color: "#ffffff",
  },
  {
    key: "sunset",
    label: "Sunset",
    description:
      "Warm orange tones with low ambient. Creates a cozy golden-hour mood.",
    color: "#ff8c42",
  },
];

export const PROPS_REFERENCE: {
  name: string;
  type: string;
  defaultVal: string;
  description: string;
}[] = [
  {
    name: "modelPath",
    type: "string",
    defaultVal: "—",
    description: "Path to the GLB / GLTF model file.",
  },
  {
    name: "depth",
    type: "number",
    defaultVal: "10",
    description: "Camera distance from origin (controls zoom level).",
  },
  {
    name: "speed",
    type: "number",
    defaultVal: "5",
    description: "Bot movement speed toward the cursor.",
  },
  {
    name: "arriveThreshold",
    type: "number",
    defaultVal: "0.1",
    description: "Distance at which the bot stops moving toward the cursor.",
  },
  {
    name: "rotateSpeed",
    type: "number",
    defaultVal: "1",
    description: "Camera rotation sensitivity when dragging the bot.",
  },
  {
    name: "zIndex",
    type: "number",
    defaultVal: "9999",
    description: "CSS z-index for overlay positioning.",
  },
  {
    name: "showFloor",
    type: "boolean",
    defaultVal: "false",
    description: "Show a ground plane and grid beneath the bot.",
  },
  {
    name: "modelScale",
    type: "number",
    defaultVal: "1.3",
    description: "Scale multiplier for the 3D model.",
  },
  {
    name: "lightingPreset",
    type: "LightingPreset",
    defaultVal: '"default"',
    description:
      "Lighting environment preset (default | studio | sunset | neon | spotlight).",
  },
  {
    name: "floorSize",
    type: "number",
    defaultVal: "50",
    description: "Size of the ground plane and grid (when showFloor is true).",
  },
];

export const PREREQUISITES = [
  {
    name: "Core 3D Engine",
    description:
      "Install 'three', '@react-three/fiber', and '@react-three/drei' to handle 3D rendering.",
  },
  {
    name: "Tailwind CSS",
    description:
      "The components use Tailwind utility classes for layout and styling. Ensure it's configured in your project.",
  },
  {
    name: "Styling & Themes",
    description:
      "Uses 'tailwind-merge' and 'clsx' for utility functions. Toggle button requires 'next-themes'.",
  },
  {
    name: "WebGL Support",
    description:
      "Ensure the visitor's browser supports WebGL. All modern browsers are compatible.",
  },
];

export const INTEGRATION_STEPS = [
  {
    step: 1,
    title: "Download Component Source",
    code: `# Use the "Download Source" button above to get the ZIP package.\n# It contains all components, assets, and utility files.`,
  },
  {
    step: 2,
    title: "Install Dependencies",
    code: `npm install three @react-three/fiber @react-three/drei next-themes clsx tailwind-merge`,
  },
  {
    step: 3,
    title: "Setup Project Structure",
    code: `# 1. Extract the ZIP file into your project.\n# 2. Move 'public' files into your project's public folder.\n# 3. Place 'components/BoomBot' in your components directory.`,
  },
  {
    step: 4,
    title: "Wrap App with Provider",
    code: `// src/app/layout.tsx
import { BoomBotProvider } from "@/components/BoomBot";

export default function RootLayout({ children }) {
  return (
    <BoomBotProvider>
      {children}
    </BoomBotProvider>
  );
}`,
  },
  {
    step: 5,
    title: "Mount the Overlay",
    code: `// Add this to your root layout or a specific page
import { BoomBotOverlayGate } from "@/components/BoomBot";

<BoomBotOverlayGate modelPath="/boombot.glb" />`,
  },
  {
    step: 6,
    title: "Add the Toggle (Optional)",
    code: `import { BoomBotToggleButton } from "@/components/BoomBot";

// Place this in your Navbar or Settings menu
<BoomBotToggleButton />`,
  },
];
