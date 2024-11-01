import { useState} from "react";
import { LogoComponent } from "../../components/LogoComponent";
import { MenuClose } from "../../icons/navbarIcons/MenuClose";
import { MenuOpen  } from "../../icons/navbarIcons/MenuOpen";
import { homeText } from "../../mock/textViews/homeText";
import Nav from "./Nav";

export default function Navbar() {
  
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="z-10 w-full">
      <section className={`w-full z-10 h-fit p-2 md:p-6 xl:p-8 shadow-lg bg-COLOR1 text-CBACKGROUND flex justify-between items-center ${
        !menuToggle
        ? "h-16 justify-around"
        : "h-[70vh] flex-col"}`}>
    
        {/*LOGO CLIENT  */}
        <LogoComponent className="size-11 md:hidden" client:visible />

        {/* Nombre */}
        <h2 className={`font-bold text-CBACKGROUND justify-center items-center font-heading text-xl s:text-xl lg:text-3xl `}>
          {homeText.clientName}
        </h2>

        {/* barra de navegacion */}
        <nav className={`${menuToggle ? "flex" : "hidden"}
          flex-col mb-5 w-fit gap-2 tracking-wider items-center text-sm font-sans text-CBACKGROUND md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-base xl:text-lg`}>
          <Nav client:load/>
        </nav>
        
        {/* SECCION DE BOTON  */}
        <figure className="size-9 flex justify-center items-center bg-COLOR1 rounded-xl hover:cursor-pointer md:hidden shadow-sm shadow-COLOR2 hover:shadow-COLOR3" onClick={() => setMenuToggle(!menuToggle)}>
          {!menuToggle ? (
            <MenuClose className="text-CBACKGROUND" />
          ) : (
            <MenuOpen className="text-CBACKGROUND" />
          )}
        </figure> 
      </section>
    </header>
  );
}
