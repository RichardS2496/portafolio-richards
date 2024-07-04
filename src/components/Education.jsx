import certificates from "./Certificates";
import { EduCard } from "./EduCard";

export function Education() {
  return (
    <section id="educacion-y-formacion">
      <h2 className="text-4xl font-bold text-neutral-400 mt-6 mb-3">
        Educación y Formación
      </h2>
      <div className="certificates-container grid grid-cols-4 pt-16 pb-16 gap-2">
        {certificates
          .map((certificate) => (
            <EduCard key={certificate.id} certificate={certificate} />
          ))
          .reverse()}
      </div>
    </section>
  );
}
