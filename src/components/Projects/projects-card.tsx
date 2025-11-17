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
      className={`
        overflow-hidden rounded-lg border border-border bg-card
        transition-all duration-500 ease-out
        ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-md"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Section */}
      <div className="relative w-full aspect-video overflow-hidden">
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
      <div className="p-4">
        {/* Title - Always visible */}
        <h2 className="text-xl font-bold text-accent-foreground mb-3">
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
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {props.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {props.github_link && (
              <Link
                href={props.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
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
                className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
