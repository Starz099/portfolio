"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  slug: string;
}

const getStorageKey = (slug: string) => `blog-like:${slug}`;

const LikeButton = ({ slug }: LikeButtonProps) => {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setLiked(window.localStorage.getItem(getStorageKey(slug)) === "1");

    const controller = new AbortController();

    const loadLikes = async () => {
      try {
        const response = await fetch(
          `/api/blog-likes?slug=${encodeURIComponent(slug)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to load likes");
        }

        const data = (await response.json()) as { count?: number };
        setCount(typeof data.count === "number" ? data.count : 0);
      } catch {
        if (!controller.signal.aborted) {
          setCount(0);
        }
      }
    };

    void loadLikes();

    return () => controller.abort();
  }, [slug]);

  const toggleLike = async () => {
    if (isPending || liked) return;

    setIsPending(true);

    try {
      const response = await fetch("/api/blog-likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const data = (await response.json()) as { count?: number };
      setLiked(true);
      setCount(typeof data.count === "number" ? data.count : 0);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(getStorageKey(slug), "1");
      }
    } catch {
      // Keep the current state if the request fails.
    } finally {
      setIsPending(false);
    }
  };

  const displayCount = count ?? 0;

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggleLike}
      disabled={isPending || count === null || liked}
      aria-pressed={liked}
      aria-label={liked ? "Liked this blog post" : "Like this blog post"}
      className={cn(
        "border-border bg-background text-muted-foreground hover:text-foreground min-w-[104px] rounded-full",
        liked &&
          "border-rose-500/30 bg-rose-500/10 text-rose-500 hover:text-rose-500",
      )}
    >
      <Heart
        className={cn("size-4 transition-transform", liked && "fill-current")}
      />
      <span>{displayCount}</span>
      <span className="hidden sm:inline">{liked ? "Liked" : "Like"}</span>
    </Button>
  );
};

export default LikeButton;
