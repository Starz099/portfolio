import ProjectsCard from "./projects-card";
import Link from "next/link";
import v1 from "../../../videos/Video_Project.mp4.json";
import TextReveal from "../ui/TextReveal";
const projects = [
  {
    title: "Writso",
    description:
      "A writing practice web app that helps users improve their writing skills through daily prompts, AI reviews, progress tracking, and community feedback.",
    video_asset: v1,
    github_link: "https://github.com/Starz099/writso",
    demo_link: "https://writso.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Hand and Brain Chess",
    description:
      "An online platform for playing Hand and Brain Chess, allowing users to team up and enjoy this unique chess variant with real-time gameplay.",
    video_asset: v1, // Replace with actual video asset
    github_link: "https://github.com/Starz099/chess",
    demo_link: "https://chess-nu-seven.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
    ],
  },
  {
    title: "Token-Launchpad",
    description:
      "A decentralized platform that enables users to create custom Solana tokens.",
    video_asset: v1,
    github_link: "https://github.com/yourusername/project-one",
    demo_link: "https://project-one-demo.vercel.app",
    technologies: ["React", "JavaScript", "Solana_web3.js", "Tailwind CSS"],
  },
  {
    title: "Second Brain",
    description:
      "Personal knowledge management tool for saving, organising, and sharing notes/links.",
    video_asset: v1, // Replace with actual video asset
    github_link: "https://github.com/Starz099/second-brain",
    demo_link: "https://second-brain-sage.vercel.app/",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
  },
];

const Projects = () => {
  return (
    <div className="px-4">
      <TextReveal
        className="mb-8 text-3xl font-semibold tracking-tight"
        delay={100}
      >
        Projects
      </TextReveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
      {/* View More Button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="group border-border bg-card text-foreground hover:border-foreground/20 relative inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
        >
          Show all projects
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
