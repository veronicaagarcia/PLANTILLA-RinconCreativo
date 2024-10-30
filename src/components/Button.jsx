const Button = ({ text, url }) => {
	return (
		
        <a href={url} >
			<button className="mx-auto text-CBACKGROUND hover:cursor-pointer bg-COLOR1 hover:text-COLOR1 hover:bg-COLOR2 w-[230px] md:w-[250px] xl:w-[280px] h-[45px] md:h-[55px] xl:h-[65px] text-center items-center rounded-xl">
               {text}
            </button>
        </a> 
		
	);
};

export default Button;