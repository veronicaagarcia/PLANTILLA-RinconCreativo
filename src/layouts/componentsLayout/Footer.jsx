import { LogoComponent } from "../../components/LogoComponent"
import { FooterText } from "../../mock/footer";
import { homeText } from "../../mock/textViews/homeText";
import Nav from "./Nav";

export default function Footer() {
    
  return(
    <footer className="z-10 w-full bg-COLOR1">
      <section className={`w-full z-10 h-fit p-2 md:p-6 xl:p-8 shadow-lg bg-COLOR1 text-CBACKGROUND items-center md:h-18 md:justify-between flex flex-col justify-around gap-8`}>

        {/* LOGO Y TITULO*/}
        <div className={`w-full flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-5`}>
          <LogoComponent className="size-11 md:size-14 xl:size-20 rounded-full hover:scale-110" client:visible />
          <h2 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-COLOR2 to-COLOR3 justify-center items-center font-heading text-xl s:text-xl lg:text-3xl `}>
            {homeText.clientName}
          </h2> 
        </div>

        {/* barra de navegacion */}
        <Nav client:load/>
         
        {/* Contacto */}
        <div className="mx-auto text-CBACKGROUND bg-COLOR2 p-2 md:p-3 xl:p-4 text-center items-center rounded-xl">
          {FooterText.Text1}
        </div>
        <div className="flex flex-col mb-5 w-fit gap-2 md:gap-3 lg:gap-4 xl:gap-6 tracking-wider items-center text-sm font-sans text-BACKGROUND md:flex md:flex-row md:items-end md:h-full md:my-auto md:text-[15px] xl:text-base">
          <p>{FooterText.text2}</p>
          <p>{FooterText.text3}</p>
          <p>{FooterText.text4}</p>
        </div>

        {/* redes */}
        <div className="flex mb-5 w-fit gap-2 md:gap-3 lg:gap-4 xl:gap-6 items-center">
          <a href={FooterText.link1} target="_blank">
            <img className="" src={FooterText.imgLink1} alt={`Icono de red social`} />
          </a>
          <a href={FooterText.link2} target="_blank">
            <img className="" src={FooterText.imgLink2} alt={`Icono de red social`} />
          </a>
          <a href={FooterText.link3} target="_blank">
            <img className="" src={FooterText.imgLink3} alt={`Icono de red social`} />
          </a>  
        </div>

        <hr className="w-full text-sm text-CBACKGROUND"/>
        <p className="font-thin">{FooterText.text5}</p>

      </section>
    </footer>
  )
}