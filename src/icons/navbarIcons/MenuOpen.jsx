export function MenuOpen({ className }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='22'
			height='22'
			viewBox='0 0 24 24'
			fill='#2E384D'
			stroke='currentColor'
			strokeWidth='8'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`icon icon-tabler icons-tabler-outline icon-tabler-menu-2' ${className}`}
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			{/* <path d='M4 18h10' /> */}
			<path d='M6 12h13' />
			{/* <path d='M4 6h16' /> */}
		</svg>
	);
}
