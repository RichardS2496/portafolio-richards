export function Footer() {
  return (
    <>
      <hr className="border-cyan-300/75  mb-4"></hr>
      <div className="flex flex-row items-center gap-2 mb-2">
        <a href="https://www.linkedin.com/in/richards24/" target="_blank">
          <img className="svg-details w-6" src="src\assets\linkedin.svg" />
        </a>
        <a href="https://github.com/RichardS2496" target="_blank">
          <img className="svg-details w-6" src="src\assets\github.svg" />
        </a>
        <p className=" text-center ml-4">
          Desarrollado por{" "}
          <a target="_blank" href="https://www.linkedin.com/in/richards24/">
            Richard Suarez
          </a>
        </p>
      </div>
    </>
  );
}
