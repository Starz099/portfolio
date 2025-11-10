import ProjectsCard from "./projects-card";

const Projects = () => {
  return (
    <div className="px-4 text-2xl">
      Projects
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ProjectsCard
          title="Project 1"
          description="Description 1"
          video_path="video1.mp4"
          github_link="https://github.com/user/project1"
          demo_link="https://user.github.io/project1"
          technologies={["React", "TypeScript"]}
        />
        <ProjectsCard
          title="Project 2"
          description="Description 2"
          video_path="video1.mp4"
          github_link="https://github.com/user/project2"
          demo_link="https://user.github.io/project2"
          technologies={["JavaScript", "CSS"]}
        />
        <ProjectsCard
          title="Project 3"
          description="Description 3"
          video_path="video1.mp4"
          github_link="https://github.com/user/project3"
          demo_link="https://user.github.io/project3"
          technologies={["Python", "Django"]}
        />
        <ProjectsCard
          title="Project 4"
          description="Description 4"
          video_path="video1.mp4"
          github_link="https://github.com/user/project4"
          demo_link="https://user.github.io/project4"
          technologies={["Go", "Gin"]}
        />
      </div>
    </div>
  );
};

export default Projects;
