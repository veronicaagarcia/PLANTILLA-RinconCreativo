import { useState, useEffect } from "react";

export default function Nav() {
    const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`flex flex-col mb-5 w-fit gap-2 tracking-wider items-center text-sm font-sans text-BACKGROUND md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-[15px] xl:text-base`}>

      {/* <span className="hidden text-center py-4 md:flex text-CBACKGROUND font-black text-lg">|</span> */}
        <a
          href="/"
          className={`${currentPath === "/" && "underline decoration-COLOR2 font-semibold"}`}
        >
      <span className="hover:text-CBACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
          Inicio
      </span>
        </a>
        <a
          href="/nosotros"
          className={`${
            currentPath === "/nosotros" && "underline decoration-COLOR2 font-semibold"
          }`}
        >
      <span className="hover:text-CBACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
          Nosotros
      </span>
        </a>
        <a
          href="/servicios"
          className={`${
            currentPath === "/servicios" && "underline decoration-COLOR2 font-semibold"
          }`}
        >
      <span className="hover:text-CBACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
          Servicios
      </span>
        </a>
      <a
          href="/contacto"
          className={`${
            currentPath === "/contacto" && "underline decoration-COLOR2 font-semibold"
          }`}
        >
      <span className="hover:text-CBACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
          Contacto
      </span>
        </a>
    </nav>
  )
}