import { twMerge } from "tw-merge";
import cls from './cta.module.css'
import React, { useRef } from "react";

export default function Cta() {
	const ctaRef = useRef<HTMLDivElement>(null)
	
	function handleMouseMove(event: React.MouseEvent){
		const rect = ctaRef.current!.getBoundingClientRect()

		const x = event.clientX - rect.left
		const y = event.clientY - rect.top

		ctaRef.current!.setAttribute('style',`--y: ${y}px; --x: ${x}px`)
	}

	return (
		<section 
			ref={ctaRef}
			onMouseMove={handleMouseMove}
			className={twMerge(`${cls.cta} overflow-hidden z-100 relative rounded-xl border border-white/15 w-full sm:h-149 h-fit flex flex-col gap-7 
				justify-center items-center not-sm:px-10 not-sm:py-30`)}
		>
			<header>
				<h2 className="h2 max-w-105">AI-driven SEO for everyone.</h2>
			</header>
			<fieldset className="relative z-10 sm:backdrop-blur-md sm:bg-black/20 transition group flex not-sm:flex-col gap-3 focus-within:border-accent sm:border border-white/15 
				sm:w-[clamp(25rem,_80%,_17rem)] w-full h-fit p-1 rounded-xl"
			>
				<input type="email" placeholder="Your email" 
					className="not-sm:backdrop-blur-md not-sm:bg-black/20 py-3 px-4 rounded-xl w-full transition outline-none group-focus-within:placeholder:text-accent not-sm:border border-white/15 not-sm:focus-within:border-accent"
				/>
				<button type="button" className="transition bg-white text-black hover:bg-accent hover:text-white hover:inset-shadow-md rounded-lg cursor-pointer
				 min-w-30 p-2 flex items-center justify-center">Join waitlist</button>
			</fieldset>
			<p className="sm:text-lg text-white/50">No credit card required·7-days free trial</p>
			<img 
				src={`${import.meta.env.BASE_URL}/images/pattern-large.png`} alt="" 
				className="pointer-events-none h-full absolute -z-20 inset-0" 
			/>
		</section>
	)
}
