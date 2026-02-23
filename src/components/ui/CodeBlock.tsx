"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative">
      {/* Copy button */}
      <div className="absolute top-2 right-2">
        <Button
          size="icon"
          variant="ghost"
          className="size-8"
          onClick={handleCopy}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
      </div>

      {/* Code */}
      <pre className="bg-muted text-muted-foreground overflow-x-auto rounded-lg border p-4 pt-10 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
