import { ExperienciaItems } from "./ExperienciaItems";

export function Experiencia() {
  return (
    <section id="experiencia">
      <h2 className="text-4xl font-bold text-neutral-400 mt-6 mb-3">
        Experiencia
      </h2>
      {/*    <hr className="border-cyan-300/75  mb-4"></hr>
       */}
      <div className="pt-16 pb-16">
        <ExperienciaItems />
      </div>
    </section>
  );
}
