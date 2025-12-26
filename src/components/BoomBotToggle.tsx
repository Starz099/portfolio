"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { useBoomBot } from "./boombot-provider";

export function BoomBotToggleButton({
  className = "",
}: {
  className?: string;
}) {
  const { enabled, toggle } = useBoomBot();

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
      aria-label={
        enabled ? "Disable BoomBot overlay" : "Enable BoomBot overlay"
      }
      title={enabled ? "Disable BoomBot" : "Enable BoomBot"}
    >
      <span className="sr-only">Toggle BoomBot overlay</span>
      <Image
        src="/boombot.png"
        alt="BoomBot"
        width={24}
        height={24}
        className={cn(
          "transition-opacity duration-300",
          enabled ? "opacity-100" : "opacity-40",
        )}
      />
    </Button>
  );
}
