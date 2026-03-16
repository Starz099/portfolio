"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for environments where clipboard API is blocked.
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={onShare}
      aria-label="Copy blog URL"
      className={cn(
        "border-border bg-background text-muted-foreground hover:text-foreground min-w-[92px] rounded-full",
        copied && "text-foreground",
      )}
    >
      {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      {copied ? "Copied" : "Share"}
    </Button>
  );
};

export default ShareButton;
