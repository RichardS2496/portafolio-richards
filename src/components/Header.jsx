import { useState, useEffect } from "react";

import "../styles/header.css";
import { Burguer } from "./Burguer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function closeNav() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

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
      <nav
        className={`mobile-header w-full flex lg:flex-row lg:justify-center lg:gap-8 lg:text-center text-white lg:hidden md:hidden xl:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a onClick={closeNav} href="#projectos" className="item">
          Proyectos
        </a>
        <a onClick={closeNav} href="#experiencia" className="item">
          Experiencia
        </a>
        <a onClick={closeNav} href="#educacion-y-formacion" className="item">
          Educación
        </a>
        <a onClick={closeNav} href="#sobre-mi" className="item">
          Sobre Mi
        </a>
        <a onClick={closeNav} href="#tecnologias" className="item">
          Tecnologías
        </a>
        <a onClick={closeNav} href="#contacto" className="item">
          Contacto
        </a>
      </nav>
      <Burguer toggleMenu={toggleMenu} />
    </div>
  );
}
