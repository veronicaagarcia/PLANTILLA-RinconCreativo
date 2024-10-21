const Button = ({ text, url }) => {
	return (
		<>
			<button className="mx-auto my-4 md:my-8 xl:my-12 text-sm md:text-base xl:text-lg text-BACKGROUND hover:cursor-pointer bg-COLOR1 hover:text-COLOR1 hover:bg-COLOR2 w-[230px] md:w-[250px] xl:w-[280px] h-[45px] md:h-[55px] xl:h-[65px] text-center items-center rounded-xl">
               <a href={url} >
               {text}
               </a> 
            </button>
		</>
	);
};

export default Button;