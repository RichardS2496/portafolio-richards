import "../styles/header.css";

export function Burguer({ toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="btn-burguer flex self-end lg:hidden sticky h-auto top-2 z-20 bg-slate-700 mt-1 mr-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="#FFF"
      >
        <rect y="11" width="24" height="2" rx="1" />
        <rect y="4" width="24" height="2" rx="1" />
        <rect y="18" width="24" height="2" rx="1" />
      </svg>
    </button>
  );
}
