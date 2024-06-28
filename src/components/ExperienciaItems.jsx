import { Chrono } from "react-chrono";
import "../styles/experiencia.css";

export function ExperienciaItems() {
  const items = [
    {
      position: "Front-end Developer",
      company: "Spazio Digital",
      date: "Feb 2024 - Actualmente",
      jobDescription:
        "Diseño y desarrollo de páginas web con CMS WordPress y otras tecnologías como JavaScript y React",
    },
    {
      position: "Front-end Developer",
      company: "Delta Digital",
      date: "Mar 2023 - Mar 2024",
      jobDescription:
        "Diseño y desarrollo de páginas web con CMS WordPress, HTML, CSS, JavaScript y React. Gestión de proyectos con metodologías ágiles, gestión de requerimientos y detalles de los clientes",
    },
    {
      position: "WordPress - Web Developer",
      company: "Run My Dev - Freelance",
      date: "Nov 2022 - Actualmente",
      jobDescription:
        "Diseño y desarrollo de páginas web con CMS WordPress, mantenimiento de páginas web, configuración de SEO básico e indexación de sitios web en Google.",
    },
  ];
  return (
    <>
      <div style={{ width: "100%", height: "auto" }}>
        <Chrono
          items={items.map((item) => ({
            title: item.position,
            cardTitle: item.company,
            cardSubtitle: item.date,
            cardDetailedText: item.jobDescription,
          }))}
          mode="VERTICAL_ALTERNATING"
          hideControls={true}
          disableToolbar
        />
      </div>
    </>
  );
}
