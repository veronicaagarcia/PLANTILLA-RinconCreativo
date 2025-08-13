import Button from "./Button";

const Card = ({ 
    name, 
    text, 
    img, 
    id, 
    url, 
    bgColor, 
    bgNameColor, 
    textColor, 
    textButton, 
    description, 
    fullWidth = false,
    animate = true 
}) => {

    // Check if this is a testimonial (uses CBACKGROUND) vs service card (uses colored backgrounds)
    const isTestimonial = bgColor === 'CBACKGROUND';
    
    const cardWidth = fullWidth 
        ? 'w-full max-w-4xl mx-auto' 
        : isTestimonial 
            ? 'w-[320px] xs:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px] min-h-[280px] md:min-h-[300px] flex flex-col'
            : 'w-[320px] xs:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px] min-h-[420px] flex flex-col';

    const animationClass = animate ? 'animate-scaleIn' : '';
    
    const backgroundClasses = isTestimonial 
        ? `backdrop-blur-lg bg-gradient-to-br from-${bgColor}/90 via-${bgColor}/80 to-${bgColor}/90`
        : `bg-${bgColor} opacity-75 hover:opacity-85 transition-opacity duration-300`;

    return (
        <article 
            className={`
                group relative overflow-hidden
                rounded-2xl p-6 md:p-8 xl:p-10 ${cardWidth} h-fit 
                ${backgroundClasses}
                shadow-2xl shadow-COLOR1/10 hover:shadow-COLOR2/20
                border border-white/20 hover:border-COLOR2-accent/40
                hover:scale-[1.05] hover:-translate-y-4 hover:rotate-1
                transition-all duration-700 ease-out transform-gpu
                ${animationClass}
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500
                after:absolute after:inset-0 after:bg-gradient-to-t after:from-COLOR2/5 after:via-transparent after:to-COLOR3/5 after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-500
            `}
            role="article"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && url && (window.location.href = url)}
        >
            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-COLOR2-accent/30 to-COLOR3/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-COLOR3/30 to-COLOR2-accent/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{animationDelay: '0.2s'}}></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
            <header className="relative z-10 mb-6 md:mb-8">
                <h3 className={`
                    text-${textColor} bg-gradient-to-r from-${bgNameColor}/90 to-${bgNameColor} 
                    text-lg md:text-xl xl:text-2xl font-bold font-heading
                    text-center w-fit mx-auto rounded-2xl 
                    px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4
                    shadow-lg hover:shadow-2xl hover:shadow-COLOR2/30
                    border border-white/30 backdrop-blur-sm
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-500 ease-out
                    group-hover:border-COLOR2-accent/50
                    relative overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transform before:-translate-x-full before:hover:translate-x-full before:transition-all before:duration-700
                `}>
                    <span className="relative z-10">{name}</span>
                </h3>
            </header>

            <div className="relative z-10 space-y-6 md:space-y-8 flex-grow">
                <p className={`
                    text-${textColor} leading-relaxed font-medium 
                    text-base md:text-lg xl:text-xl
                    ${bgColor !== 'COLOR2' ? 'first-letter:text-2xl first-letter:font-bold first-letter:text-COLOR2-dark first-letter:mr-1' : 'first-letter:text-2xl first-letter:font-bold first-letter:text-COLOR2-accent first-letter:mr-1'}
                    text-shadow-sm group-hover:text-shadow-md transition-all duration-300
                `}>
                    {text}
                </p>

                {description && (
                    <div className="space-y-2">
                        <ul className={`
                            text-${textColor} list-disc font-light list-inside 
                            text-xs md:text-sm xl:text-base leading-relaxed
                            space-y-2
                            ${bgColor === 'COLOR2' ? 'text-CBACKGROUND' : ''}
                        `}>
                            {description.map((item, index) => (
                                <li key={index} className={`
                                    transition-colors duration-300
                                    ${bgColor === 'COLOR2' 
                                        ? 'hover:text-COLOR2-accent text-CBACKGROUND' 
                                        : 'hover:text-COLOR2-dark'
                                    }
                                `}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
           
            {img && (
                <figure className="relative z-10 mt-6 md:mt-8 group/image">
                    {!fullWidth && (
                        <a 
                            className="
                                text-CBACKGROUND hover:text-CBACKGROUND
                                bg-gradient-to-br from-COLOR3 to-COLOR3-dark hover:from-COLOR2 hover:to-COLOR2-dark
                                absolute bottom-3 left-3 z-50
                                flex items-center justify-center
                                w-16 h-16 md:w-18 md:h-18
                                rounded-full shadow-2xl hover:shadow-COLOR2/60
                                backdrop-blur-md border-2 border-white/50 hover:border-white/70
                                transform hover:scale-125 hover:-translate-y-2 hover:rotate-12
                                transition-all duration-500 ease-out
                                opacity-95 hover:opacity-100
                                group-hover/image:scale-110 group-hover/image:-translate-y-1
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:rounded-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300
                            " 
                            href={`${url}#${id}`}
                            aria-label={`Ver más detalles de ${name}`}
                        >
                            <svg className="relative z-10 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover/image:scale-110" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                    
                    <div className="relative overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl group-hover:rounded-3xl transition-all duration-700 shadow-xl shadow-COLOR1/20 group-hover:shadow-2xl group-hover:shadow-COLOR2/20">
                        {/* Image overlay gradients - reducidos para mejor visibilidad */}
                        <div className="absolute inset-0 bg-gradient-to-t from-COLOR1/10 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-COLOR2/5 via-transparent to-COLOR3/5 opacity-0 group-hover:opacity-80 transition-opacity duration-700 z-10"></div>
                        
                        <img 
                            className="
                                grayscale-[0.2] hover:grayscale-0 
                                transition-all duration-700 ease-out 
                                object-cover w-full h-full 
                                group-hover:scale-110 group-hover:rotate-1
                                filter brightness-100 group-hover:brightness-110 group-hover:contrast-110
                                transform-gpu
                            " 
                            src={img} 
                            alt={`${description && description.length > 0 
                                ? `${name}: ${description[0].substring(0, 80)}${description[0].length > 80 ? '...' : ''}` 
                                : `Imagen representativa del servicio ${name} ofrecido por Rincón Creativo`}`}
                            loading="lazy"
                        />
                        
                        {/* Shimmer effect on image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out z-20"></div>
                    </div>
                </figure>
            )}

            {textButton && (
                <footer className="relative z-10 mt-8 md:mt-10 text-center">
                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                        <Button text={textButton} url={url} />
                    </div>
                </footer>
            )}
        </article>
    );
};

export default Card;