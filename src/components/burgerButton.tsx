import type React from "react"

type buttonProps = {
	onClick?: React.MouseEventHandler,
	isCollapsed: boolean,
}

export default function BurgerButton({onClick, isCollapsed}: buttonProps) {
	return (
		<button 
			onClick={onClick}
			className={
				isCollapsed 
				? "relative z-999 group cursor-pointer w-8 h-8 p-1 sm:hidden flex flex-col items-end justify-around"
				: "relative z-999 group cursor-pointer w-8 h-8 p-1.5 sm:hidden flex flex-col items-end justify-around"
			} 
		>
			<span className={
				isCollapsed 
				? "h-0.5 group-hover:bg-accent transition-all rounded-xl w-full bg-white rotate-45 translate-y-1.75"
				: "h-0.5 group-hover:bg-accent transition-all rounded-xl w-full bg-white"
			}></span>
			<span className={
				isCollapsed 
				? "h-0.5 group-hover:bg-accent transition-all rounded-xl w-full bg-white -rotate-45 -translate-y-0.25"
				: "h-0.5 group-hover:bg-accent transition-all rounded-xl w-full bg-white"
			}></span>
			<span className={
					isCollapsed 
					? 'h-0.5 group-hover:bg-accent transition-all rounded-xl w-0 bg-white'
					: "h-0.5 group-hover:bg-accent transition-all rounded-xl w-2/3 bg-white" 
			}></span>
		</button>
	)
}
