import "../styles/header.css";
import { Burguer } from "./Burguer";

export function Header() {
  return (
    <div className="header-container w-full mx-auto sticky  flex flex-row items-center lg:justify-center h-auto top-2 z-20 lg:rounded-lg">
      <nav className="main-header w-full lg:flex flex-row justify-center gap-8 text-center bg-slate-300/0 text-white lg:rounded-lg">
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
      <nav className="mobile-header w-full flex lg:flex-row justify-center lg:gap-8 lg:text-center text-white lg:hidden md:hidden xl:hidden">
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
