import type { PropsWithChildren } from "react";

export default function Badge({children}: PropsWithChildren) {


	return (
		<article 
			className="relative overflow-hidden bg-black text-accent flex gap-1 items-center w-fit sm:h-11.5 
				h-10.5 py-2 px-3 border border-white/15 rounded-full transition hover:-translate-y-1 hover:shadow-xs shadow-accent
				after:w-2 after:h-20 after:rotate-30 after:blur-xs after:transition-all after:absolute after:animate-shine"
			>
			<span className="uppercase self-start flex justify-center items-center text-black bg-accent px-2 h-full rounded-full sm:text-xs text-[0.625rem] font-bold">new</span>
			<p className="sm:px-1">{children}</p>
		</article>
	)
}
