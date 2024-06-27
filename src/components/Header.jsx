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
        <a className="item">Tecnologías</a>
        <a className="item">Sobre Mi</a>
        <a className="item">Contacto</a>
      </nav>
    </>
  );
}
