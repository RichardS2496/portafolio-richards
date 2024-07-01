import { ProjectCard } from "./ProjectCard";
import projects from "./ProjectsItemsArr";

export function Proyectos() {
  return (
    <section id="projectos" className="mt-16 mb-16">
      <h2 className="text-4xl font-bold text-neutral-400 mt-6 mb-3">
        Proyectos
      </h2>
      {/*<hr className="border-cyan-300/75  mb-4"></hr>
       */}{" "}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 pt-16 pb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
