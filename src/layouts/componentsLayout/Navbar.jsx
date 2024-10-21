import { useState, useEffect } from "react";
import { LogoComponent } from "../../components/shared/LogoComponent";
//iconos
import { MenuClose } from "../../icons/navbarIcons/MenuClose";
import { MenuOpen  } from "../../icons/navbarIcons/MenuOpen";
import layoutText from "../../Mocks/TextsViews/layoutText";
import Nav from "./Nav";


export default function Navbar() {
  
  const [menuToggle, setMenuToggle] = useState(false);

  // const [currentPath, setCurrentPath] = useState("");

  // useEffect(() => {
  //   setCurrentPath(window.location.pathname);
  // }, []);
 
  return (
    <header className="z-10 w-full">
      <section className={`w-full z-10 h-fit p-2 md:p-6 xl:p-8 shadow-lg bg-COLOR1 text-BACKGROUND items-center 
        md:h-18 md:justify-between ${
          !menuToggle
            ? "h-16 flex"
            : "h-[70vh] flex flex-col items-center justify-around gap-8"}`}>
        {/* LOGO Y TITULO*/}
        <div className={` ${ !menuToggle
              ? "w-11/12 flex justify-between items-center"
              : "w-full flex justify-between items-center"}`}>
          {/*LOGO CLIENT  */}
          <LogoComponent className="size-14 md:hidden" client:visible />

          {/* Title subrayado animado */}
          <div className="w-[70%] md:w-full relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-11/12 after:scale-x-0 after:bg-COLOR1 after:transition-transform after:duration-300 hover:after:scale-x-100">

            <h2 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-COLOR2 to-COLOR3 justify-center items-center font-heading text-xl s:text-xl lg:text-3xl `}>
                {layoutText.clientName}
            </h2>
          </div>
          
        </div>
        {/* barra de navegacion */}
        <nav className={`${menuToggle ? "flex" : "hidden"}
                 flex-col mb-5
                 w-fit gap-2 tracking-wider items-center text-sm font-sans text-BACKGROUND
                 md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-base
				 xl:text-lg
				 `}>
          <Nav client:load/>
          {/* <span className="hidden text-center py-4 md:flex text-BACKGROUND font-black text-lg">|</span>
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
          </span> */}
        </nav>
        {/* SECCION DE BOTON  */}
        <figure
            className="size-9 flex justify-center items-center bg-COLOR1 rounded-xl hover:cursor-pointer md:hidden shadow-sm shadow-COLOR2 hover:shadow-COLOR3"
            onClick={() => setMenuToggle(!menuToggle)}>
            {!menuToggle ? (
              <MenuClose className="text-COLOR2 hover:text-COLOR3" />
            ) : (
              <MenuOpen className="text-COLOR3 hover:text-COLOR2" />
            )}
        </figure> 
      </section>
    </header>
  );
}
