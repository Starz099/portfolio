"use client";
import { useTheme } from "next-themes";
import Snowfall from "react-snowfall";
const SnowfallOverlay = () => {
  const theme = useTheme();
  return (
    <div className="pointer-events-none fixed top-0 left-0 -z-50 h-screen w-screen">
      <Snowfall color={theme.theme === "dark" ? "white" : "pink"} />
    </div>
  );
};

export default SnowfallOverlay;
