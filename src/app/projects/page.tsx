import ProjectsCard from "@/components/Projects/projects-card";
import v1 from "../../../videos/Video_Project.mp4.json";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

const ProjectsPage = () => {
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

  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base sm:text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>
        <Separator />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsPage;
