const Text = ({ text, textColor}) => {
	return (
        <div className="group relative mx-auto mt-4 md:mt-8 xl:mt-12 mb-4 md:mb-8 xl:mb-12 md:max-w-[70vw] cursor-pointer">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-COLOR2/5 via-COLOR3/5 to-COLOR2-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
            
            {/* Main text with enhanced effects */}
            <p className={`
                relative z-10 text-star animate-slideUp 
                text-${textColor} md:text-center
                text-base md:text-lg xl:text-xl leading-relaxed
                px-4 py-3 md:px-6 md:py-4 xl:px-8 xl:py-6
                transition-all duration-500 ease-out
                group-hover:text-shadow-sm group-hover:scale-[1.02]
                rounded-xl group-hover:bg-white/5 group-hover:backdrop-blur-sm
                border border-transparent group-hover:border-white/10
                first-letter:text-2xl first-letter:font-bold first-letter:text-COLOR2-dark first-letter:mr-1
                group-hover:first-letter:text-COLOR2-accent group-hover:first-letter:scale-110 group-hover:first-letter:drop-shadow-lg
            `}>
                {text}
            </p>
            
            {/* Subtle decorative elements */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-br from-COLOR2-accent to-COLOR3 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-gradient-to-br from-COLOR3 to-COLOR2 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{transitionDelay: '0.1s'}}></div>
        </div>
    )
}
export default Text;