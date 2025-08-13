import { useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner, { InlineLoader } from "./LoadingSpinner";

export function FormContacto() {
	const [nombre, setNombre] = useState("");
	const [empresa, setEmpresa] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("¡Hola! \nMe gustaría recibir más información sobre: ");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Funcion para validar el formato del correo electronico
	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	// Funcion de onClick en enviar formulario (DEMO ONLY)
	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		// Validar el correo electronico
		if (!validateEmail(email)) {
			setEmailError("Por favor ingrese un correo electrónico válido");
			setIsSubmitting(false);
			return;
		} else {
			setEmailError("");
		}

		if (message.trim() === "" || message.trim() === "¡Hola! \nMe gustaría recibir más información sobre:") {
			setMessageError("Por favor ingrese su mensaje");
			setIsSubmitting(false);
			return;
		} else {
			setMessageError("");
		}

		// FORMULARIO DEMO - NO ENVÍA DATOS REALES
		try {
			// Simular delay de envío
			await new Promise(resolve => setTimeout(resolve, 1500));
			
			// Mostrar mensaje de éxito DEMO
			Swal.fire({
				position: "center",
				icon: "info",
				iconColor: "#00C9A7",
				title: "📋 Formulario de Demostración",
				html: `
					<div style="text-align: left; max-width: 400px; margin: 0 auto; font-family: 'Source Sans Pro', sans-serif;">
						<p style="margin-bottom: 20px; font-size: 16px; color: #1A1E2E;">
							<strong>¡Gracias por probar nuestro formulario!</strong> 🎉
						</p>
						<p style="margin-bottom: 15px; color: #1A1E2E;">
							Este es un formulario de <em>demostración</em> que muestra cómo funcionaría en un sitio real.
						</p>
						<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00C9A7;">
							<p style="margin: 0 0 10px 0; color: #1A1E2E;"><strong>En un sitio web real:</strong></p>
							<ul style="margin: 0; padding-left: 20px; color: #1A1E2E; line-height: 1.6;">
								<li>✉️ Tu consulta se enviaría a <strong>admin@hermes.website</strong></li>
								<li>🔔 Recibirías una confirmación inmediata por email</li>
								<li>👥 Nuestro equipo se contactaría contigo en menos de 24 horas</li>
							</ul>
						</div>
						<p style="margin-top: 15px; font-size: 14px; color: #666; font-style: italic;">
							Datos simulados: <strong>${nombre || 'Anónimo'}</strong> - ${email || 'email@ejemplo.com'}
						</p>
					</div>
				`,
				confirmButtonText: "¡Perfecto! 🚀",
				customClass: {
					popup: 'swal2-popup-custom',
					confirmButton: 'swal2-confirm-custom'
				},
				buttonsStyling: false,
			});
			
			// Borrar campos completados
			setNombre("");
			setEmpresa("");
			setTelefono("");
			setEmail("");
			setMessage("¡Hola! \nMe gustaría recibir más información sobre: ");
			
		} catch (error) {
			// Mostrar mensaje de error DEMO
			Swal.fire({
				icon: "info",
				iconColor: "#FF3366",
				title: "🔧 Formulario de Demostración",
				html: `
					<div style="font-family: 'Source Sans Pro', sans-serif;">
						<p style="color: #1A1E2E; font-size: 16px; margin-bottom: 15px;">
							Este es un <strong>formulario de prueba</strong> para mostrar el diseño y funcionalidad.
						</p>
						<p style="color: #666; margin-top: 15px; font-style: italic;">
							En un sitio web real, tu consulta se enviaría correctamente al equipo de Hermes.
						</p>
					</div>
				`,
				confirmButtonText: "¡Entendido!",
				customClass: {
					confirmButton: 'swal2-confirm-custom'
				},
				buttonsStyling: false,
			});
		}
		
		setIsSubmitting(false);
	};

	return (
		<>
			{/* Custom SweetAlert Styles */}
			<style jsx global>{`
				.swal2-popup-custom {
					border-radius: 16px !important;
					box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
				}
				.swal2-confirm-custom {
					background: linear-gradient(135deg, #FF3366, #FF3366) !important;
					color: #F4F5F7 !important;
					border: none !important;
					border-radius: 12px !important;
					padding: 12px 24px !important;
					font-size: 16px !important;
					font-weight: 600 !important;
					transition: all 0.3s ease !important;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
				}
				.swal2-confirm-custom:hover {
					background: linear-gradient(135deg, #00C9A7, #00C9A7) !important;
					transform: translateY(-2px) !important;
					box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15) !important;
				}
			`}</style>

			<section className='w-full max-w-4xl mx-auto shadow-xl shadow-COLOR1/20 hover:shadow-2xl hover:shadow-COLOR1/30 h-fit p-8 md:p-10 xl:p-12 rounded-2xl bg-gradient-to-br from-CBACKGROUND/95 to-white/90 backdrop-blur-md border border-COLOR1/10 transition-all duration-500 transform hover:scale-[1.02]'>
				
				{/* Header del formulario */}
				<div className="text-center mb-8 md:mb-10">
					<h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-COLOR1 mb-4 font-heading">
						¡Hablemos de tu proyecto! 💬
					</h2>
					<p className="text-COLOR1/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
						Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. Este es un formulario de demostración.
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-COLOR2 to-COLOR3 mx-auto mt-4 rounded-full"></div>
				</div>

				<form onSubmit={handleSubmit} className='space-y-6 md:space-y-8'>
					
					{/* Primera fila: Nombre y Empresa */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<div className='space-y-2 group'>
							<label htmlFor='nombre' className='block text-COLOR1 font-semibold text-sm md:text-base transition-colors duration-300 group-focus-within:text-COLOR2-dark'>
								Nombre completo <span className="text-COLOR2-dark">*</span>
							</label>
							<input
								id='nombre'
								type='text'
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
								className='w-full h-12 md:h-14 px-4 md:px-5 border-2 border-COLOR1/20 rounded-xl focus:border-COLOR2 focus:ring-4 focus:ring-COLOR2/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white text-COLOR1 placeholder-COLOR1/50 font-medium'
								placeholder='Tu nombre y apellido'
								required
							/>
						</div>

						<div className='space-y-2 group'>
							<label htmlFor='empresa' className='block text-COLOR1 font-semibold text-sm md:text-base transition-colors duration-300 group-focus-within:text-COLOR2-dark'>
								Empresa / Organización
							</label>
							<input
								id='empresa'
								type='text'
								value={empresa}
								onChange={(e) => setEmpresa(e.target.value)}
								className='w-full h-12 md:h-14 px-4 md:px-5 border-2 border-COLOR1/20 rounded-xl focus:border-COLOR2 focus:ring-4 focus:ring-COLOR2/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white text-COLOR1 placeholder-COLOR1/50 font-medium'
								placeholder='Nombre de tu empresa (opcional)'
							/>
						</div>
					</div>

					{/* Segunda fila: Email y Teléfono */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<div className='space-y-2 group'>
							<label htmlFor='email' className='block text-COLOR1 font-semibold text-sm md:text-base transition-colors duration-300 group-focus-within:text-COLOR2-dark'>
								Email <span className="text-COLOR2-dark">*</span>
							</label>
							<input
								id='email'
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={`w-full h-12 md:h-14 px-4 md:px-5 border-2 rounded-xl focus:ring-4 transition-all duration-300 outline-none bg-white/90 hover:bg-white text-COLOR1 placeholder-COLOR1/50 font-medium ${
									emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-COLOR1/20 focus:border-COLOR2 focus:ring-COLOR2/20'
								}`}
								placeholder='tu@email.com'
								required
							/>
							{emailError && (
								<p className='text-red-600 text-sm mt-2 bg-red-50 px-3 py-2 rounded-lg border border-red-200'>
									⚠️ {emailError}
								</p>
							)}
						</div>

						<div className='space-y-2 group'>
							<label htmlFor='telefono' className='block text-COLOR1 font-semibold text-sm md:text-base transition-colors duration-300 group-focus-within:text-COLOR2-dark'>
								Teléfono
							</label>
							<input
								id='telefono'
								type='tel'
								value={telefono}
								onChange={(e) => setTelefono(e.target.value)}
								className='w-full h-12 md:h-14 px-4 md:px-5 border-2 border-COLOR1/20 rounded-xl focus:border-COLOR2 focus:ring-4 focus:ring-COLOR2/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white text-COLOR1 placeholder-COLOR1/50 font-medium'
								placeholder='+1 234 567 890'
							/>
						</div>
					</div>

					{/* Mensaje */}
					<div className='space-y-2 group'>
						<label htmlFor='message' className='block text-COLOR1 font-semibold text-sm md:text-base transition-colors duration-300 group-focus-within:text-COLOR2-dark'>
							Cuéntanos sobre tu proyecto <span className="text-COLOR2-dark">*</span>
						</label>
						<textarea
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							rows={6}
							className={`w-full px-4 md:px-5 py-4 border-2 rounded-xl focus:ring-4 transition-all duration-300 outline-none bg-white/90 hover:bg-white text-COLOR1 placeholder-COLOR1/50 font-medium resize-none ${
								messageError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-COLOR1/20 focus:border-COLOR2 focus:ring-COLOR2/20'
							}`}
							placeholder='Describe tu proyecto, qué servicios necesitas, presupuesto estimado, fechas importantes, etc.'
							required
						/>
						{messageError && (
							<p className='text-red-600 text-sm mt-2 bg-red-50 px-3 py-2 rounded-lg border border-red-200'>
								⚠️ {messageError}
							</p>
						)}
					</div>

					{/* Botón de envío */}
					<div className="pt-4 md:pt-6">
						<button
							type='submit'
							disabled={isSubmitting}
							className={`group w-full md:w-auto mx-auto flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-COLOR2 to-COLOR2 hover:from-COLOR3 hover:to-COLOR3 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-COLOR2/30 focus:outline-none focus:ring-4 focus:ring-COLOR2/20 disabled:opacity-90 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none ${
								isSubmitting ? 'bg-gradient-to-r from-COLOR1 to-COLOR1 animate-pulse' : ''
							}`}
						>
							{isSubmitting ? (
								<>
									<InlineLoader size="md" variant="light" />
									<span className="ml-3 animate-pulse">Enviando consulta...</span>
								</>
							) : (
								<>
									<svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
									</svg>
									<span className="transition-transform duration-200 group-hover:translate-x-1">Enviar consulta</span>
								</>
							)}
						</button>
						
						<p className="text-center text-COLOR1/60 text-sm mt-4 italic">
							🔒 Este es un formulario de demostración - Tus datos no se enviarán realmente
						</p>
					</div>

				</form>
			</section>
		</>
	);
}