"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePackageManager } from "@/hooks/use-package-manager";

interface PackageTabsProps {
  npm?: string;
  pnpm?: string;
  yarn?: string;
  bun?: string;
  className?: string;
}

export function PackageTabs({
  npm,
  pnpm,
  yarn,
  bun,
  className,
}: PackageTabsProps) {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = usePackageManager();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const commands = {
    npm,
    pnpm,
    yarn,
    bun,
  };

  const currentCommand = commands[activeTab] || "";

  const copyToClipboard = React.useCallback(() => {
    if (!currentCommand) return;
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [currentCommand]);

  if (!isMounted) {
    return (
      <div
        className={cn(
          "bg-muted/40 relative h-[157px] w-full animate-pulse rounded-lg border",
          className,
        )}
      />
    );
  }

  return (
    <div className={cn("group relative", className)}>
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as any)}
        className="bg-muted/40 w-full overflow-hidden rounded-lg border"
      >
        <div className="bg-muted/50 flex h-11 items-center justify-between border-b px-4">
          <TabsList variant="line" className="h-full">
            {npm && <TabsTrigger value="npm">npm</TabsTrigger>}
            {pnpm && <TabsTrigger value="pnpm">pnpm</TabsTrigger>}
            {yarn && <TabsTrigger value="yarn">yarn</TabsTrigger>}
            {bun && <TabsTrigger value="bun">bun</TabsTrigger>}
          </TabsList>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="size-3.5 text-green-500" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </Button>
        </div>
        <div className="flex min-h-[50px] items-center overflow-x-auto p-4 font-mono text-sm whitespace-pre">
          {npm && (
            <TabsContent value="npm" className="mt-0 w-full">
              <code>{npm}</code>
            </TabsContent>
          )}
          {pnpm && (
            <TabsContent value="pnpm" className="mt-0 w-full">
              <code>{pnpm}</code>
            </TabsContent>
          )}
          {yarn && (
            <TabsContent value="yarn" className="mt-0 w-full">
              <code>{yarn}</code>
            </TabsContent>
          )}
          {bun && (
            <TabsContent value="bun" className="mt-0 w-full">
              <code>{bun}</code>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  );
}
