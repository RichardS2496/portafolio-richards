import "../styles/header.css";

export function Burguer({ toggleMenu, isMenuOpen }) {
  return (
    <button
      onClick={toggleMenu}
      className="btn-burguer flex self-end lg:hidden sticky h-auto top-2 z-20 bg-slate-700 mt-1 mr-1"
    >
      {isMenuOpen ? (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="FFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#FFF"
          />
        </svg>
      ) : (
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
      )}
    </button>
  );
}
