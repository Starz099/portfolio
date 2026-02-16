"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

type CountResponse = {
  count: number;
};

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCount = async () => {
      const response = await fetch("/api/visit?mode=count", {
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as CountResponse;
      setCount(data.count);
    };

    const registerVisit = async () => {
      const response = await fetch("/api/visit", {
        method: "POST",
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as CountResponse;
      setCount(data.count);
    };

    fetchCount().catch(() => {
      // Ignore network errors; we'll retry on the next visit.
    });

    registerVisit().catch(() => {
      // Ignore network errors; we'll retry on the next visit.
    });

    return () => controller.abort();
  }, []);

  return (
    <div className="bg-accent text-muted-foreground inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm">
      <Eye className="h-4 w-4" />
      <span>Unique visitors</span>
      <span>{count === null ? "--" : count.toLocaleString()}</span>
    </div>
  );
}
