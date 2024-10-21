const WsapBtn = ({ children, newMessage }) => {
	
	const handleWhatsAppClick = () => {
		const phoneNumber = "+59896033191";
		const message = newMessage
			? newMessage
			: "¡Hola! 👋 Estoy interesado en las plantillas personalizables que ofreces. Me gustaría recibir más información y asesoramiento para que puedas guiarme en lo que necesito. Me encuentro ahora mismo navegando en la website de Rincón Creativo. ¿Podríamos conversar al respecto?";
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
					className='hover:cursor-pointer"'
					onClick={handleWhatsAppClick}
				>
					<span class='text-sm font-medium'>+59 8960 33191</span>
				</div>
			) : (
				<div className='w-fit h-fit self-center items-center m-auto' onClick={handleWhatsAppClick}>
					{children}
				</div>
			)}
		</>
	);
};

export default WsapBtn;