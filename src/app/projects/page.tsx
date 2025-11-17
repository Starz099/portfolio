import ProjectsCard from "@/components/Projects/projects-card";
import v1 from "../../../videos/Video_Project.mp4.json";
import Container from "@/components/ui/Container";

const ProjectsPage = () => {
  // All projects data - replace with your actual data
  const allProjects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with modern technologies. Features include real-time updates, user authentication, and responsive design.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-one",
      demo_link: "https://project-one-demo.vercel.app",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description:
        "An innovative solution for managing tasks and projects with team collaboration features.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-two",
      demo_link: "https://project-two-demo.vercel.app",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Project Three",
      description:
        "A full-stack web application built with modern technologies. Features include real-time updates, user authentication, and responsive design.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-three",
      demo_link: "https://project-three-demo.vercel.app",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Four",
      description:
        "An innovative solution for managing tasks and projects with team collaboration features.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-four",
      demo_link: "https://project-four-demo.vercel.app",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Project Five",
      description:
        "Real-time chat application with advanced features like file sharing, voice calls, and group messaging.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-five",
      demo_link: "https://project-five-demo.vercel.app",
      technologies: ["Socket.io", "React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project Six",
      description:
        "E-commerce platform with payment integration, inventory management, and analytics dashboard.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-six",
      demo_link: "https://project-six-demo.vercel.app",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    },
    {
      title: "Project Seven",
      description:
        "AI-powered content management system with natural language processing and automated tagging.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-seven",
      demo_link: "https://project-seven-demo.vercel.app",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    },
    {
      title: "Project Eight",
      description:
        "Mobile-first fitness tracking app with workout plans, nutrition logging, and progress analytics.",
      video_asset: v1,
      github_link: "https://github.com/yourusername/project-eight",
      demo_link: "https://project-eight-demo.vercel.app",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    },
  ];

  return (
    <Container>
      <div className="py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-accent-foreground mb-3">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive collection of my work and personal projects. Hover
            over each card to see the project demo and explore details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsPage;
