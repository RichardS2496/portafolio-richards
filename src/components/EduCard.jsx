import "../styles/education.css";

export function EduCard({ certificate }) {
  return (
    <a
      target="_blank"
      href={certificate.url}
      className="rounded-lg flex flex-col gap-4 p-4 transition-all hover:bg-neutral-500/50"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className="rounded-lg transition-all hover:scale-110 w-full"
          src={certificate.img}
          alt={certificate.img}
        />
      </div>
      <h2 className="eduCard-title font-semibold text-xl">
        {certificate.title}
      </h2>
      <h4>{certificate.company}</h4>
    </a>
  );
}
