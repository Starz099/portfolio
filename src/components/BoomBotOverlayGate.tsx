"use client";

import BoomBot3D from "./BoomBot3D";
import { useBoomBot } from "./boombot-provider";

type Props = React.ComponentProps<typeof BoomBot3D>;

export default function BoomBotOverlayGate(props: Props) {
  const { enabled } = useBoomBot();
  if (!enabled) return null;
  return <BoomBot3D {...props} />;
}
