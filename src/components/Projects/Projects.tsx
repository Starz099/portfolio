import ProjectsCard from "./projects-card";
import Link from "next/link";
import v1 from "../../../videos/Video_Project.mp4.json";
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
    <div className="px-4 text-2xl">
      Projects
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
      {/* View More Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="border-accent text-accent-foreground hover:bg-primary/90 rounded-lg border px-4 py-2 text-sm shadow-md transition-colors duration-200 hover:scale-[1.02] hover:text-black hover:shadow-lg"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Projects;
