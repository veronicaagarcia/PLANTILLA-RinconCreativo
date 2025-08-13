const WsapBtn = ({ children, newMessage }) => {
	
	const handleWhatsAppClick = () => {
		const phoneNumber = "1234";
		const message = newMessage
			? newMessage
			: "¡Hola! 👋 Estoy interesado en los servicios de diseño que ofreces. Me gustaría recibir más información y asesoramiento para que puedas guiarme en lo que necesito. Me encuentro ahora mismo navegando en la website de Hermes. ¿Podríamos conversar al respecto?";
		// Formatear el número de teléfono para que sea válido en WhatsApp
		const formattedPhoneNumber = phoneNumber
			.replace(/\s/g, "")
			.replace(/\+/g, "");

		// Crear el enlace para abrir WhatsApp con el número y el mensaje
		const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
			message
		)}`;

		// Abrir WhatsApp en una nueva ventana
		window.open(whatsappUrl, "_blank");
	};

	return (
		<>
			{children == undefined ? (
				<div
					className="group relative cursor-pointer transition-all duration-300 hover:scale-110"
					onClick={handleWhatsAppClick}
				>
					{/* Background glow */}
					<div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
					
					{/* Phone number display */}
					<span className="relative z-10 text-sm font-medium text-COLOR1 group-hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-full bg-white/10 group-hover:bg-green-50 border border-transparent group-hover:border-green-200">
						📞 1234
					</span>
				</div>
			) : (
				<div className="group relative w-fit h-fit self-center items-center m-auto cursor-pointer" onClick={handleWhatsAppClick}>
					{/* Floating WhatsApp particles */}
					<div className="absolute -top-3 -right-3 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
					<div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" style={{transitionDelay: '0.1s'}}></div>
					
					{/* Success feedback ring */}
					<div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
					
					{children}
				</div>
			)}
		</>
	);
};

export default WsapBtn;