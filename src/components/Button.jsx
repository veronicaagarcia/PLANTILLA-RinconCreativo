const Button = ({ text, url, variant = 'primary', icon, loading = false, onClick }) => {
	const baseStyles = "group inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl relative overflow-hidden";
	
	const variants = {
		primary: "text-CBACKGROUND bg-gradient-to-r from-COLOR1 to-COLOR1 hover:from-COLOR2 hover:to-COLOR2 focus:ring-COLOR2-dark shadow-lg hover:shadow-xl hover:shadow-COLOR2/30",
		secondary: "text-COLOR1 bg-gradient-to-r from-COLOR3 to-COLOR3 hover:from-COLOR1 hover:to-COLOR1 hover:text-CBACKGROUND focus:ring-COLOR1 shadow-md hover:shadow-lg hover:shadow-COLOR3/30",
		outline: "text-COLOR1 border-2 border-COLOR1 hover:bg-COLOR1 hover:text-CBACKGROUND focus:ring-COLOR1 hover:shadow-lg",
		ghost: "text-COLOR2 hover:text-COLOR2-dark hover:bg-COLOR2/10 focus:ring-COLOR2-dark"
	};
	
	const sizes = "w-[230px] xs:w-[240px] md:w-[250px] xl:w-[280px] h-[45px] xs:h-[48px] md:h-[55px] xl:h-[65px] text-sm xs:text-base md:text-lg";

	const ButtonContent = () => (
		<button 
			className={`${baseStyles} ${variants[variant]} ${sizes} ${loading ? 'cursor-not-allowed opacity-80' : ''}`}
			type="button"
			aria-label={text}
			onClick={onClick}
			disabled={loading}
		>
			{/* Shine effect on hover */}
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
			
			{/* Button content */}
			<span className="relative z-10 flex items-center justify-center gap-2">
				{loading ? (
					<>
						<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
						<span>Cargando...</span>
					</>
				) : (
					<>
						{icon && (
							<span className="transition-transform duration-200 group-hover:scale-110">
								{icon}
							</span>
						)}
						<span className="transition-transform duration-200 group-hover:translate-x-1">
							{text}
						</span>
						{!icon && (
							<svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						)}
					</>
				)}
			</span>
		</button>
	);

	// If it's a button with onClick, don't wrap in anchor
	if (onClick || loading) {
		return <ButtonContent />;
	}

	// Otherwise, wrap in anchor for navigation
	return (
        <a href={url} className="inline-block">
			<ButtonContent />
        </a> 
	);
};

export default Button;