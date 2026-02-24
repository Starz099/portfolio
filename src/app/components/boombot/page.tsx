import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PROPS_REFERENCE } from "./data";
import { PackageTabs } from "@/components/ui/PackageTabs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import NextVideo from "next-video";
import boombot_demo from "../../../../videos/boombot_demo.mp4.json";
export default function BoomBotPage() {
  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl space-y-16">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              BoomBot Overlay
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
              A plug-and-play Boombot that follows your cursor like{" "}
              <span className="text-foreground font-medium">oneko.js</span>, but
              in 3D.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 shadow-md"
            >
              <a href="/api/boombot/download">
                <Download className="mr-2 size-4" />
                Download Source
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            Move your cursor around, you can already see it running on this
            site!
          </p>
        </section>

        <Separator />
        <div className="border-border/50 bg-card relative mb-8 overflow-hidden rounded-xl border shadow-sm">
          <div className="relative aspect-video w-full overflow-hidden">
            <NextVideo
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              src={boombot_demo as any}
              controls={true}
              loop
              muted
            />
          </div>
        </div>
        <Separator />

        {/* ── Integration Steps ───────────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight">
              Setup with a new Next.js project
            </h2>
            <p className="text-muted-foreground text-base">
              Add BoomBot to your project in just a few minutes.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 0: Create App (Requested by user) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  1
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Create a new Next.js project
                </h3>
              </div>
              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Run the following command to bootstrap your Next.js application
              </p>
              <div className="pl-11">
                <PackageTabs
                  npm="npx create-next-app@latest my-next-app"
                  pnpm="pnpm create next-app my-next-app"
                  yarn="yarn create next-app my-next-app"
                  bun="bun create next-app my-next-app"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  2
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Configure shadcn
                </h3>
              </div>
              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Run this command to setup shadcn/ui
              </p>
              <div className="pl-11">
                <PackageTabs
                  npm="npx shadcn@latest init"
                  pnpm="pnpm dlx shadcn@latest init"
                  yarn="yarn shadcn@latest init"
                  bun="bunx --bun shadcn@latest init"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  3
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Add Button Component
                </h3>
              </div>
              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Run this command to add button component
              </p>
              <div className="pl-11">
                <PackageTabs
                  npm="npx shadcn@latest add button"
                  pnpm="pnpm dlx shadcn@latest add button"
                  yarn="yarn shadcn@latest add button"
                  bun="bunx --bun shadcn@latest add button"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  4
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Install required dependencies
                </h3>
              </div>
              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Run this command to install required dependencies
              </p>
              <div className="pl-11">
                <PackageTabs
                  npm="npm install next-themes three @react-three/fiber @react-three/drei"
                  pnpm="pnpm add next-themes three @react-three/fiber @react-three/drei"
                  yarn="yarn add next-themes three @react-three/fiber @react-three/drei"
                  bun="bun install next-themes three @react-three/fiber @react-three/drei "
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  4
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Now download the zip file from this page and extract it
                </h3>
              </div>
              <div className="space-y-2 pl-11">
                <ul className="text-muted-foreground list-disc pl-6 text-sm leading-relaxed">
                  <li>
                    Copy the{" "}
                    <span className="text-foreground font-mono">boombot</span>{" "}
                    folder to your{" "}
                    <span className="text-foreground font-mono">
                      /components
                    </span>{" "}
                    directory.
                  </li>
                  <li>
                    Move the files from{" "}
                    <span className="text-foreground font-mono">public</span> in
                    the extracted folder to your project&apos;s{" "}
                    <span className="text-foreground font-mono">/public</span>{" "}
                    folder.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  5
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Add BoomBot to your root layout
                </h3>
              </div>

              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Wrap your app with the provider and mount the BoomBot overlay
                inside
                <span className="text-foreground font-mono"> layout.tsx</span>.
              </p>

              <div className="pl-11">
                <CodeBlock
                  code={`import "./globals.css";
import { BoomBotOverlayGate, BoomBotProvider } from "@/components/BoomBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BoomBotProvider>
          <BoomBotOverlayGate
            lightingPreset="studio"
            modelPath="/boombot.glb"
            depth={80}
            speed={20}
            showFloor={false}
          />
          {children}
        </BoomBotProvider>
      </body>
    </html>
  );
}`}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-bold">
                  6
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Use the BoomBot toggle button
                </h3>
              </div>

              <p className="text-muted-foreground pl-11 text-sm leading-relaxed">
                Import the toggle button and place it anywhere in your UI to let
                users open or close BoomBot.
              </p>

              <div className="pl-11">
                <CodeBlock
                  code={`import { BoomBotToggleButton } from "@/components/BoomBot";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <BoomBotToggleButton />
    </div>
  );
}`}
                />
              </div>
            </div>
            <div className="pl-11">
              <div className="bg-muted/30 rounded-lg border px-5 py-4">
                <p className="text-sm font-medium">BoomBot is now ready</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Start your development server and use the toggle button to
                  launch it in your app.
                </p>
              </div>
            </div>{" "}
          </div>
        </section>

        <Separator />

        {/* ── Props Reference ───────────────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Props</h2>
            <p className="text-muted-foreground text-base">
              Customize BoomBot&apos;s behavior and appearance.
            </p>
          </div>

          <div className="space-y-8">
            {PROPS_REFERENCE.map((prop) => (
              <div key={prop.name} className="flex items-start gap-4">
                <div className="text-primary mt-1 flex size-5 shrink-0 items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-primary font-mono text-lg font-bold">
                      {prop.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-secondary text-secondary-foreground rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                        {prop.type}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        default:{" "}
                        <code className="text-foreground/80">
                          {prop.defaultVal}
                        </code>
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section className="bg-primary/5 border-primary/20 rounded-3xl border border-dashed p-8 text-center sm:p-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to integrate?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-md text-base sm:text-lg">
              Download the complete component package and start using BoomBot in
              your project today.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-12 shadow-lg"
            >
              <a href="/api/boombot/download">
                <Download className="mr-2 size-4" />
                Download (ZIP)
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
