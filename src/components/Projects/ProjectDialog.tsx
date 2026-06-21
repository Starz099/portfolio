"use client";

import * as React from "react";
import NextVideo from "next-video";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { projectVideos } from "@/data/project-videos";
import { Project } from "@/data/projects";

interface ProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  const videoAsset = projectVideos[project.id];
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] max-w-4xl overflow-y-auto p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        data-lenis-prevent
      >
        <div className="p-4 sm:p-5">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-left text-2xl font-bold sm:text-3xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-left text-base sm:text-lg">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <Separator className="my-4" />

          {/* Video Section - Lazy loaded */}
          <div className="border-border/50 bg-card relative mb-6 overflow-hidden rounded-xl border shadow-sm">
            <div className="relative aspect-video w-full overflow-hidden">
              {open && mounted && !!videoAsset && (
                <NextVideo
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  src={videoAsset as any}
                  controls={true}
                  loop
                  muted
                  className="h-full w-full"
                />
              )}
              {(!videoAsset || !open) && (
                <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center">
                  Loading video...
                </div>
              )}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-6 space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary/80 text-secondary-foreground border-border/30 rounded-lg border px-3 py-1.5 text-xs font-medium sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.github_link && (
                <Link
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Link>
              )}
              {project.demo_link && (
                <Link
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-card hover:bg-accent text-foreground inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </Link>
              )}
              {project.blog_link && (
                <Link
                  href={project.blog_link}
                  className="border-border bg-card hover:bg-accent text-foreground inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v12a2 2 0 01-2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h4m-4 4h8m-8 4h8"
                    />
                  </svg>
                  Blog
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
