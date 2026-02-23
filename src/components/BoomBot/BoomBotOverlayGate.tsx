"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useBoomBot } from "./boombot-provider";
import type BoomBot3D from "./BoomBot3D";

const LazyBoomBot3D = dynamic(() => import("./BoomBot3D"), {
  ssr: false,
  loading: () => null,
});

type Props = React.ComponentProps<typeof BoomBot3D>;

export default function BoomBotOverlayGate(props: Props) {
  const { enabled, ready } = useBoomBot();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    // Preload the 3D module and model once enabled so first paint shows up promptly
    import("./BoomBot3D").then((mod) => {
      if (mod.preloadBoomBotModel) {
        mod.preloadBoomBotModel(props.modelPath);
      }
    });
  }, [enabled, props.modelPath]);

  if (!mounted || !ready || !enabled) return null;

  return <LazyBoomBot3D key="boombot-active" {...props} />;
}
