import "../styles/header.css";

export function Header() {
  return (
    <>
      <nav className="mx-auto flex flex-row justify-center sticky gap-8 text-center bg-slate-300/0 text-white rounded-lg h-auto top-2 z-20">
        <a href="#projectos" className="item">
          Proyectos
        </a>
        <a href="#experiencia" className="item">
          Experiencia
        </a>
        <a href="#educacion-y-formacion" className="item">
          Educación
        </a>
        <a href="#sobre-mi" className="item">
          Sobre Mi
        </a>
        <a href="#tecnologias" className="item">
          Tecnologías
        </a>
        <a href="#contacto" className="item">
          Contacto
        </a>
      </nav>
    </>
  );
}
