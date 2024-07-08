import "../styles/header.css";
import { Burguer } from "./Burguer";

export function Header() {
  return (
    <div className="header-container w-full mx-auto sticky  flex flex-row items-center lg:justify-center h-auto top-2 z-20">
      <nav className="w-full lg:flex flex-row justify-center gap-8 text-center bg-slate-300/0 text-white rounded-lg  ">
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
      <Burguer />
    </div>
  );
}
