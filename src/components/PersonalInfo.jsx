import "../styles/personalInfo.css";

export function PersonalInfo() {
  return (
    <>
      <section className="flex flex-row gap-8 mt-12">
        <div>
          <img
            className="img-profile"
            src="http://runmydev.com/wp-content/uploads/2024/07/profile-pic.jpg"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-5xl font-bold">Richard Suarez</h2>
          <h3 className="text-2xl font-bold text-cyan-300">
            Desarrollador Front-end
          </h3>
          <p className="text-xl">
            <span className="text-cyan-300 font-semibold">
              +2 años de experiencia
            </span>{" "}
            en el diseño y desarrollo de aplicaciones y páginas web trabajando
            para agencias de marketing y proyectos freelance.
          </p>
          <div className="flex flex-row gap-4">
            <a
              className="standard-btn"
              target="_blank"
              href="http://runmydev.com/wp-content/uploads/2024/07/Richard-Suarez-CV-Developer.pdf"
            >
              Descargar CV
            </a>
            <a href="https://www.linkedin.com/in/richards24/" target="_blank">
              <img
                className="svg-details"
                src="/assets/linkedin.svg"
                alt="linkedin logo"
              />
            </a>
            <a href="https://github.com/RichardS2496" target="_blank">
              <img
                className="svg-details"
                src="/assets/github.svg"
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
