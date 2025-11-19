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
      className={`border-border bg-card flex flex-col overflow-hidden rounded-lg border transition-all duration-500 ease-out ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-md"} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Section */}
      <div className="relative aspect-video w-full overflow-hidden p-4">
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
      <div className="grow p-4">
        {/* Title - Always visible */}
        <h2 className="text-accent-foreground mb-3 text-xl font-bold">
          {props.title}
        </h2>

        {/* Details - Always visible */}
        <div className="space-y-3">
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {props.description}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {props.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links - Fixed at bottom */}
      <div className="mt-auto flex gap-3 p-4 pt-0">
        {props.github_link && (
          <Link
            href={props.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
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
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
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
