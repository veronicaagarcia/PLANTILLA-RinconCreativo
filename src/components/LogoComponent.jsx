import { homeText } from "../mock/textViews/homeText"

export function LogoComponent ({ className, style }) {
    return (
        <figure>
            <img src={homeText.urlLogo} className={ className } style={ style } alt={`Logo de ${homeText.clientName}`}/>
        </figure>
    )
}