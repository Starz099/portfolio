"use client";

import { useState } from "react";
import Link from "next/link";
import NextVideo from "next-video";

interface ProjectsProps {
  title: string;
  description: string;
  video_asset: any; // NextVideo asset from imported JSON
  github_link: string;
  demo_link: string;
  technologies: string[];
}

const ProjectsCard = (props: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group border-border/50 bg-card relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 ease-out ${isHovered ? "border-border scale-[1.02] shadow-lg" : "shadow-sm"} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Section */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="bg-muted/30 absolute inset-0 transition-colors duration-300 group-hover:bg-transparent" />
        <NextVideo
          src={props.video_asset}
          controls={false}
          loop
          muted
          autoPlay={isHovered}
          key={isHovered ? "playing" : "paused"}
        />
      </div>

      {/* Info Section - Always visible */}
      <div className="grow space-y-4 p-6">
        {/* Title - Always visible */}
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          {props.title}
        </h2>

        {/* Details - Always visible */}
        <div className="space-y-4">
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {props.description}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {props.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary/80 text-secondary-foreground border-border/30 rounded-md border px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links - Fixed at bottom */}
      <div className="mt-auto flex gap-3 p-6 pt-0">
        {props.github_link && (
          <Link
            href={props.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </Link>
        )}
        {props.demo_link && (
          <Link
            href={props.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-card hover:bg-accent text-foreground rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
