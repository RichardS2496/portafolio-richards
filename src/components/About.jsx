import { useState } from "react";
import "../styles/about.css";

export function About() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayInfo2, setDisplayInfo2] = useState(false);
  const [displayInfo3, setDisplayInfo3] = useState(false);

  return (
    <section id="sobre-mi" className="mt-16 mb-16 ">
      <h2 className="text-4xl font-bold text-neutral-400 mt-6 mb-3">
        Sobre mi
      </h2>

      <div className="flex flex-row gap-16  pt-16 pb-16">
        <div className="about-text w-2/3 order-2">
          <p>
            ¡Hola!
            <span>
              {" "}
              Soy Richard Suárez, Ingeniero Industrial que ha encontrado una
              verdadera pasión en el desarrollo web y de software.{" "}
            </span>
            Me he dedicado a estudiar y perfeccionar mis habilidades en
            programación, comenzando con HTML, CSS y JavaScript, y expandiéndome
            a tecnologías como React, Astro y Node.js. Inicialmente, trabajé en
            el desarrollo de sitios web con WordPress, lo que me permitió
            comprender profundamente la estructura de las páginas web y mejorar
            mis habilidades de diseño.
          </p>
          <br />
          <p>
            En el transcurso de mi carrera, he tenido la oportunidad de liderar
            proyectos en roles como Project Manager, diseñador y desarrollador.
            Esta experiencia me ha dotado de una{" "}
            <span>
              visión integral del ciclo de vida de los proyectos, desde la
              planificación hasta la ejecución, asegurando una combinación
              óptima de funcionalidad y estética.
            </span>
          </p>
          <br />
          <p>
            Mi formación en Ingeniería Industrial me ha brindado valiosas
            habilidades en organización, factibilidad de proyectos, y gestión
            del tiempo y recursos, y mucho más.{" "}
            <span>
              Estas competencias me han ayudado a destacar en el desarrollo de
              software y en el trabajo en equipo
            </span>
            , y siempre estoy en busca de nuevos desafíos y oportunidades para
            seguir creciendo en este campo.
          </p>
        </div>
        <div className="w-1/3 relative">
          <img
            className="rounded-lg w-full"
            src="http://runmydev.com/wp-content/uploads/2024/07/profile-pic.jpg"
            alt="Richard Suarez - Frontend Developer"
          />

          <div className="badge-container">
            <a
              className="w-[38%] flex justify-end"
              target="_blank"
              href="https://www.credential.net/ccdbc620-a9e7-4262-98e4-e0ec636b4edd#gs.b7jsca"
            >
              <img
                className="w-full  transition-all hover:scale-110"
                src="http://runmydev.com/wp-content/uploads/2024/07/95e707b6-913a-4ea5-b53b-d0d7964777d5.png"
                alt="Badge from Meta about Front-end Certificate"
              />
            </a>
            <a
              className="w-[26%]"
              target="_blank"
              href="https://www.credly.com/badges/212dab1d-d356-438e-aad2-07b466ce0f38/public_url"
            >
              <img
                className="w-full transition-all hover:scale-110"
                src="http://runmydev.com/wp-content/uploads/2024/07/meta-front-end-developer-certificate.png"
                alt="Badge from Meta about Front-end Certificate"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="tecnologias" className="more-info-section flex flex-row gap-6">
        <div className="info-container">
          <div
            className="title-info-card"
            onClick={() => {
              setDisplayInfo(!displayInfo);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 0 24 24"
              width="32px"
              fill="#e8eaed"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
            <h3 className="title-text ">
              Versatilidad Técnica y Adaptabilidad
            </h3>
          </div>
          {displayInfo && (
            <p className="text-info">
              Mi capacidad para dominar rápidamente nuevas tecnologías y
              frameworks, como React y Node.js, me permite adaptarme fácilmente
              a diferentes proyectos y entornos de desarrollo, garantizando
              soluciones actualizadas y eficientes.
            </p>
          )}
        </div>
        <div className="info-container">
          <div
            className="title-info-card"
            onClick={() => {
              setDisplayInfo2(!displayInfo2);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 0 24 24"
              width="32px"
              fill="#e8eaed"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
            </svg>
            <h3 className="title-text ">
              Gestión de Proyectos Ágiles y Trabajo en Equipo
            </h3>
          </div>
          {displayInfo2 && (
            <p className="text-info">
              Mi experiencia liderando proyectos me ha dotado de habilidades
              sólidas en la gestión de equipos y la planificación de tareas, lo
              que garantiza una entrega puntual y efectiva de proyectos, y
              fomenta un entorno de colaboración productivo.
            </p>
          )}
        </div>
        <div className="info-container">
          <div
            className="title-info-card"
            onClick={() => {
              setDisplayInfo3(!displayInfo3);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#e8eaed"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
            </svg>
            <h3 className="title-text ">
              Enfoque Integral en Desarrollo Web y Experiencia de Usuario
            </h3>
          </div>

          {displayInfo3 && (
            <p className="text-info">
              Capacidad para integrar diseño y desarrollo web me permite crear
              interfaces de usuario intuitivas y eficientes, garantizando que
              los productos no solo funcionen correctamente sino que también
              proporcionen una experiencia de usuario excepcional, adaptada a
              las necesidades y expectativas de los usuarios finales.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
