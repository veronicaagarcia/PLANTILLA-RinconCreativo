import Button from "./Button";

const Card = ({ name, text, img, url, bgColor, bgNameColor, textColor, arrowColor, bgArrow, textButton}) => {
	return (
		<section className={`rounded-xl p-6 md:p-8 xl:p-12 w-[290px] md:w-[310px] xl:w-[450px] h-fit  shadow-lg shadow-COLOR1 bg-${bgColor} hover:scale-105 transition-all duration-200 `}>
            <h3 className={`text-COLOR1 bg-${bgNameColor} text-base text-center animate-slideUp md:text-lg xl:text-xl w-fit mx-auto rounded-sm px-1 md:px-2 xl:px-3 mb-4 md:mb-6 xl:mb-8`}>{name}</h3>
            <p className={`text-COLOR1 text-${textColor} text-sm text-star animate-slideUp md:text-base xl:text-lg mb-4 md:mb-6 xl:mb-8`} >{text}</p>
            {img && 
            <div className="w-full flex justify-around">
                <a className={`text-${arrowColor} hover:text-${bgArrow} bg-${bgArrow} hover:bg-${arrowColor} items-center self-center text-center rounded-full text-sm md:text-base xl:text-lg px-2 py-1 md:px-4 md:py-2 xl:px-5 xl:py-3 mb-4 md:mb-6 xl:mb-8`} href={url}>➜</a>
                <figure className="mb-4 md:mb-6 xl:mb-8 h-fit"><img className="rounded-xl grayscale hover:grayscale-0 transition duration-300 ease-in-out size-32 md:size-48 xl:size-60" src={img} alt={`Imagen del servicio ${name}`} /></figure>
            </div>
            }
            {textButton && 
            <Button text={textButton} url={url} client:visible />}
            
			
		</section>
	);
};

export default Card;