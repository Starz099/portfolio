// src/components/CodedTodayBadge.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CodedTodayBadge() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/wakatime");
        setText(res.data.text);
      } catch (e) {
        console.error(e);
        setText("0 mins");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center gap-3 mt-4 text-muted-foreground">
      {text ? (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent text-sm">
          <span>{text} coded today</span>
        </div>
      ) : (
        <div className="px-3 py-1.5 rounded-full bg-zinc-700 animate-pulse text-sm">
          Loading…
        </div>
      )}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent text-sm">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Open to work</span>
      </div>
    </div>
  );
}
