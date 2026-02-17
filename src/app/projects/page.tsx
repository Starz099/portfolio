import ProjectsCard from "@/components/Projects/projects-card";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
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
