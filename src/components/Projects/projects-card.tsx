"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ProjectDialog } from "./ProjectDialog";

interface ProjectsProps {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
    aspectRatio: string;
  };
  github_link: string;
  demo_link: string;
  blog_link?: string;
  technologies: string[];
}

const ProjectsCard = (props: ProjectsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="group border-border/50 bg-card hover:border-border relative flex cursor-pointer flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail Section */}
        <div className="px-4 pt-4">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: props.thumbnail.aspectRatio }}
          >
            <div className="from-muted/60 via-muted/30 to-muted/10 group-hover:from-muted/70 group-hover:via-muted/40 absolute inset-0 bg-linear-to-br transition-colors duration-300" />
            <Image
              src={props.thumbnail.src}
              alt={props.thumbnail.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Info Section - Always visible */}
        <div className="grow space-y-4 p-4">
          {/* Title - Always visible */}
          <h2 className="text-foreground text-xl font-semibold tracking-tight">
            {props.title}
          </h2>

          {/* Details - Always visible */}
          <div className="space-y-4">
            {/* Description */}
            <p
              className="text-muted-foreground text-sm leading-relaxed"
              data-nosnippet
            >
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
        <div className="relative z-20 mt-auto flex flex-wrap gap-3 p-4 pt-0">
          {props.github_link && (
            <Link
              href={props.github_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
            >
              GitHub
            </Link>
          )}
          {props.demo_link && (
            <Link
              href={props.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border-border bg-card hover:bg-accent text-foreground rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
            >
              Live Demo
            </Link>
          )}
          {props.blog_link && (
            <Link
              href={props.blog_link}
              onClick={(e) => e.stopPropagation()}
              className="border-border bg-card hover:bg-accent text-foreground rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
            >
              Blog
            </Link>
          )}
        </div>
      </div>

      <ProjectDialog
        project={{
          id: props.id,
          title: props.title,
          description: props.description,
          thumbnail: props.thumbnail,
          github_link: props.github_link,
          demo_link: props.demo_link,
          blog_link: props.blog_link,
          technologies: props.technologies,
        }}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
};

export default ProjectsCard;
