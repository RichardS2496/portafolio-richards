import "../styles/projectCard.css";

export function ProjectCard({ project }) {
  return (
    <div className="project-card flex flex-row gap-6 p-4 rounded-lg transition-all">
      <div className="w-1/3 rounded-lg">
        <img className="rounded-lg" src={project.image} />
      </div>
      <div className="w-2/3 flex flex-col gap-3 items-start">
        <h3 className="font-semibold text-2xl">{project.title}</h3>
        <p>{project.description}</p>
        {project.url && (
          <a target="_blank" href={project.url} className="standard-btn">
            Ver ahora
          </a>
        )}
      </div>
    </div>
  );
}
