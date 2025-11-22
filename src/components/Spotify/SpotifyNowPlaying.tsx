"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  trackId?: string;
  previewUrl?: string;
  playedAt?: string;
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Container className="px-4">
        <div className="border-border bg-card w-full rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="bg-muted h-12 w-12 animate-pulse rounded-md" />
            <div className="flex-1 space-y-2">
              <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
              <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (!data || !data.title) {
    return null;
  }

  return (
    <Container className="px-4">
      <div className="border-border bg-card/50 hover:border-primary/50 w-full rounded-lg border p-3 backdrop-blur-sm transition-all hover:shadow-lg">
        <div className="flex items-center gap-3">
          {/* Album Art */}
          {data.albumImageUrl && (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
              <Image
                src={data.albumImageUrl}
                alt={data.album || "Album cover"}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Track Info */}
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#1DB954]"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="text-muted-foreground text-xs font-medium">
                Last played
              </span>
            </div>
            <h3 className="text-foreground truncate font-semibold">
              {data.title}
            </h3>
            <p className="text-muted-foreground truncate text-sm">
              by {data.artist}
            </p>
          </div>

          {/* Play Button */}
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-background hover:border-foreground shrink-0 rounded-full border p-2 transition-all hover:scale-105"
          >
            <svg
              className="text-foreground h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
}
