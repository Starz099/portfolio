import archiver from "archiver";
import fs from "fs";
import path from "path";
import { PassThrough } from "stream";

export async function GET() {
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  const passthrough = new PassThrough();
  archive.pipe(passthrough);

  const componentFiles = [
    "boombot-provider.tsx",
    "BoomBot3D.tsx",
    "BoomBotOverlayGate.tsx",
    "BoomBotToggle.tsx",
    "index.ts",
  ];

  const publicFiles = ["boombot.glb", "boombot.png", "boombot_dark.png"];

  const rootDir = process.cwd();

  componentFiles.forEach((file) => {
    const filePath = path.join(rootDir, "src/components/BoomBot", file);
    if (fs.existsSync(filePath)) {
      archive.file(filePath, { name: `BoomBot/${file}` });
    }
  });

  publicFiles.forEach((file) => {
    const filePath = path.join(rootDir, "public", file);
    if (fs.existsSync(filePath)) {
      archive.file(filePath, { name: `public/${file}` });
    }
  });

  archive.finalize();

  return new Response(passthrough as any, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="boombot-overlay.zip"',
    },
  });
}
