import { useState, useEffect } from "react";

export default function Nav() {
    const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`flex
        flex-col mb-5
        w-fit gap-2 tracking-wider items-center text-sm font-sans text-BACKGROUND
        md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-base
        xl:text-lg
        `}>
 {/* <span className="hidden text-center py-4 md:flex text-BACKGROUND font-black text-lg">|</span> */}
 <span className="hover:text-BACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
   <a
     href="/"
     className={`${currentPath === "/" && "underline decoration-COLOR2 font-semibold"}`}
   >
     Inicio
   </a>
 </span>
 <span className="hover:text-BACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
   <a
     href="/nosotros"
     className={`${
       currentPath === "/nosotros" && "underline decoration-COLOR2 font-semibold"
     }`}
   >
     Nosotros
   </a>
 </span>
 <span className="hover:text-BACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
   <a
     href="/servicios"
     className={`${
       currentPath === "/servicios" && "underline decoration-COLOR2 font-semibold"
     }`}
   >
     Servicios
   </a>
 </span>
 <span className="hover:text-BACKGROUND hover:bg-COLOR2 text-center rounded-xl px-7 py-4 w-full transition-colors duration-150">
 <a
     href="/contacto"
     className={`${
       currentPath === "/contacto" && "underline decoration-COLOR2 font-semibold"
     }`}
   >
     Contacto
   </a>
 </span>
</nav>
  )
}