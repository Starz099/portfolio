import ProjectsCard from "./projects-card";
import v1 from "../../../videos/Video_Project.mp4.json";

const Projects = () => {
  // Sample project data - replace with your actual data
  const projects = [
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
      video_asset: v1, // Replace with actual video asset
      github_link: "https://github.com/yourusername/project-two",
      demo_link: "https://project-two-demo.vercel.app",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
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
      video_asset: v1, // Replace with actual video asset
      github_link: "https://github.com/yourusername/project-two",
      demo_link: "https://project-two-demo.vercel.app",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
  ];

  return (
    <div className="px-4 text-2xl">
      Projects
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
