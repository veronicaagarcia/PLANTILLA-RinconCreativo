const Subtitle = ({ name, bgColor, textColor}) => {
	return (
        <h2 className={`relative inline-block text-center w-fit mx-auto font-heading font-medium text-${textColor} bg-${bgColor} text-base md:text-lg xl:text-xl px-1 md:px-2 xl:px-3 mt-4 md:mt-8 xl:mt-12 rounded-md transform -rotate-2`}>{name}</h2>
    )
}
export default Subtitle;