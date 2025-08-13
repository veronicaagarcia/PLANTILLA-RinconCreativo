import { useState} from "react";
import { LogoComponent } from "../../components/LogoComponent";
import { MenuClose } from "../../icons/navbarIcons/MenuClose";
import { MenuOpen  } from "../../icons/navbarIcons/MenuOpen";
import { homeText } from "../../mock/textViews/homeText";
import Nav from "./Nav";

export default function Navbar() {
  
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-COLOR1/95 border-b border-COLOR1/10 shadow-lg">
      <section className={`
        w-full max-w-7xl mx-auto px-4 md:px-6 xl:px-8 py-3 md:py-4
        flex justify-between items-center
        transition-all duration-500 ease-in-out
        ${!menuToggle ? "h-16 md:h-20" : "h-screen md:h-20 flex-col md:flex-row"}
      `}>
    
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3 md:gap-4">
          <LogoComponent className="size-10 md:size-12 animate-float" />
          <a 
            href="/" 
            className="group flex items-center"
            aria-label={`Ir a inicio - ${homeText.clientName}`}
          >
            <h1 className={`
              font-bold text-CBACKGROUND font-heading 
              text-lg s:text-xl md:text-2xl lg:text-3xl xl:text-4xl
              group-hover:text-COLOR3-dark transition-colors duration-300
              tracking-wide
            `}>
              {homeText.clientName}
            </h1>
          </a>
        </div>
        
        {/* Navegación */}
        <nav 
          className={`
            ${menuToggle ? "flex animate-fadeInLeft" : "hidden md:flex"}
            flex-col md:flex-row gap-6 md:gap-8 lg:gap-10
            items-center text-center
            text-sm md:text-base lg:text-lg
            font-medium tracking-wide
            ${menuToggle ? "mt-16 md:mt-0" : ""}
          `}
          role="navigation"
          aria-label="Navegación principal"
        >
          <Nav />
        </nav>
        
        {/* Botón de menú móvil */}
        <button 
          className={`
            w-10 h-10 md:hidden flex justify-center items-center 
            bg-COLOR2 hover:bg-COLOR3 rounded-lg
            transition-all duration-300 transform hover:scale-110
            shadow-md hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-COLOR3-dark focus:ring-offset-2
          `}
          onClick={() => setMenuToggle(!menuToggle)}
          aria-label={menuToggle ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuToggle}
        >
          <span className="sr-only">{menuToggle ? "Cerrar menú" : "Abrir menú"}</span>
          {!menuToggle ? (
            <MenuOpen className="text-CBACKGROUND w-5 h-5 transition-transform duration-300" />
          ) : (
            <MenuClose className="text-CBACKGROUND w-5 h-5 transition-transform duration-300" />
          )}
        </button> 
      </section>
    </header>
  );
}
