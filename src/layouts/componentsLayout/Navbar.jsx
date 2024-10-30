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
      <section className={`w-full z-10 h-fit p-2 md:p-6 xl:p-8 shadow-lg bg-COLOR1 text-CBACKGROUND items-center 
        md:h-18 md:justify-between ${
          !menuToggle
            ? "h-16 flex"
            : "h-[70vh] flex flex-col items-center justify-around"}`}>

        {/* LOGO Y TITULO*/}
        <div className={` ${ !menuToggle
              ? "w-full flex justify-start items-center gap-11 s:gap-32 md:gap-0"
              : "w-full flex justify-center gap-6 items-center"}`}>
          {/*LOGO CLIENT  */}
          <LogoComponent className="size-11 md:hidden" client:visible />

          {/* Title animado */}
          <div className="w-fit relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-11/12 after:scale-x-0 after:bg-COLOR1 after:transition-transform after:duration-300 hover:after:scale-x-100">

            <h2 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-COLOR2 to-COLOR3 justify-center items-center font-heading text-xl s:text-xl lg:text-3xl `}>
                {homeText.clientName}
            </h2>
          </div>
          
        </div>

        {/* barra de navegacion */}
        <nav className={`${menuToggle ? "flex" : "hidden"}
          flex-col mb-5 w-fit gap-2 tracking-wider items-center text-sm font-sans text-CBACKGROUND md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-base xl:text-lg
				 `}>
          <Nav client:load/>
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
