import { LogoComponent } from "../../components/shared/LogoComponent"
import layoutText from "../../Mocks/TextsViews/layoutText";
import Nav from "./Nav";

export default function Footer() {
    
    return(
    <footer className="z-10 w-full bg-COLOR1">
        <section className={`w-full z-10 h-fit p-2 md:p-6 xl:p-8 shadow-lg bg-COLOR1 text-BACKGROUND items-center 
          md:h-18 md:justify-between flex flex-col justify-around gap-8`}>
          {/* LOGO Y TITULO*/}
          <div className={`w-full flex justify-center items-center`}>
            {/*LOGO CLIENT  */}
            <LogoComponent className="size-14 md:hidden" client:visible />
  
            <h2 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-COLOR2 to-COLOR3 justify-center items-center font-heading text-xl s:text-xl lg:text-3xl `}>
                {layoutText.clientName}
            </h2>
            
            
          </div>
          {/* barra de navegacion */}
          <Nav client:load/>
         
         
        </section>
    </footer>
    )
}