import layoutText from "../../Mocks/TextsViews/layoutText"

export function LogoComponent ({ className }) {
    return (
        <figure>
            <img src={layoutText.urlLogo} className={ className } alt={`Logo de ${layoutText.clientName}`}/>
        </figure>
    )
}