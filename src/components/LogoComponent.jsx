import { homeText } from "../mock/textViews/homeText"

export function LogoComponent ({ className }) {
    return (
        <figure>
            <img src={homeText.urlLogo} className={ className } alt={`Logo de ${homeText.clientName}`}/>
        </figure>
    )
}