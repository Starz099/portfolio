"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useBoomBot } from "./boombot-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BoomBotToggleButton({
  className = "",
}: {
  className?: string;
}) {
  const { enabled, ready, toggle } = useBoomBot();
  const visualEnabled = ready ? enabled : false;
  const { theme, resolvedTheme } = useTheme();
  const [boomBotIconSrc, setBoomBotIconSrc] = useState<
    "/boombot_dark.png" | "/boombot.png"
  >("/boombot_dark.png");
  useEffect(() => {
    const fn = () => {
      if (resolvedTheme === "light") {
        setBoomBotIconSrc("/boombot_dark.png");
      } else if (resolvedTheme === "dark") {
        setBoomBotIconSrc("/boombot.png");
      } else {
        return;
      }
    };

    fn();
  }, [theme, resolvedTheme, setBoomBotIconSrc]);
  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-10 cursor-pointer items-center justify-center p-0 transition-all duration-300 active:scale-95",
        "border-border/60 hover:border-border rounded-2xl border-2 bg-transparent",
        "hover:scale-95 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={toggle}
      disabled={!ready}
      aria-label={
        visualEnabled ? "Disable BoomBot overlay" : "Enable BoomBot overlay"
      }
      title={visualEnabled ? "Disable BoomBot" : "Enable BoomBot"}
    >
      <span className="sr-only">Toggle BoomBot overlay</span>
      <Image
        src={boomBotIconSrc}
        alt="BoomBot"
        width={28}
        height={28}
        className={cn(
          "transition-opacity duration-300",
          visualEnabled ? "opacity-100" : "opacity-40",
        )}
      />
    </button>
  );
}
