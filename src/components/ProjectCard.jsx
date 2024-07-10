import "../styles/projectCard.css";

export function ProjectCard({ project }) {
  return (
    <>
      <div className="project-card flex lg:flex-row gap-6 p-4 rounded-lg transition-all">
        <div className="lg:w-1/3 md:w-1/3 rounded-lg ">
          <img className="lg:w-auto rounded-lg sm:w-full" src={project.image} />
        </div>
        <div className="project-content md:w-2/3 lg:w-2/3 flex flex-col gap-3 items-start">
          <h3 className="font-semibold text-2xl">{project.title}</h3>
          <p className="w-full text-start">{project.description}</p>
          {project.url && (
            <a target="_blank" href={project.url} className="standard-btn">
              Ver ahora
            </a>
          )}
        </div>
      </div>
    </>
  );
}
