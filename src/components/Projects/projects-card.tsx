"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectsProps {
  title: string;
  description: string;
  video_path: string;
  github_link: string;
  demo_link: string;
  technologies: string[];
}

const ProjectsCard = (props: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border border-border
        transition-all duration-500 ease-out
        ${isHovered ? "scale-105 shadow-2xl z-10" : "scale-100 shadow-md"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background */}
      <div className="relative w-full aspect-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={props.video_path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with gradient */}
        <div
          className={`
            absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent
            transition-opacity duration-500
            ${isHovered ? "opacity-95" : "opacity-40"}
          `}
        />

        {/* Title - Always visible */}
        <div className="absolute top-0 left-0 right-0 p-4">
          <h2
            className={`
              text-2xl font-bold text-accent-foreground
              transition-all duration-500
              ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-90"
              }
            `}
          >
            {props.title}
          </h2>
        </div>

        {/* Details - Shown on hover */}
        <div
          className={`
            absolute inset-0 p-6 flex flex-col justify-end
            transition-all duration-500
            ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="space-y-4">
            {/* Description */}
            <p className="text-foreground text-sm leading-relaxed">
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
    </div>
  );
};

export default ProjectsCard;
