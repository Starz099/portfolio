"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useBoomBot } from "./boombot-provider";

export function BoomBotToggleButton({
  className = "",
}: {
  className?: string;
}) {
  const { enabled, ready, toggle } = useBoomBot();
  const visualEnabled = ready ? enabled : false;
  const { resolvedTheme } = useTheme();
  const BoombotIconSrc =
    resolvedTheme === "light" ? "/boombot_dark.png" : "/boombot.png";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "size-10 cursor-pointer p-0 transition-all duration-300 active:scale-95",
        "border-border/60 hover:border-border rounded-2xl border-2",
        "hover:scale-95 hover:shadow-sm",
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
        src={BoombotIconSrc}
        alt="BoomBot"
        width={28}
        height={28}
        className={cn(
          "transition-opacity duration-300",
          visualEnabled ? "opacity-100" : "opacity-40",
        )}
      />
    </Button>
  );
}
