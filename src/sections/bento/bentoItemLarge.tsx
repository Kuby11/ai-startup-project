type Props = {
	image: string,
	title: string,
	description: string
}

export default function BentoItemLarge({image,description,title}: Props) {
	return (
		<article 
			className="relative group overflow-hidden w-full not-sm:aspect-square h-full sm:col-span-2 transition ease-out duration-150 
				border hover:border-accent/50 border-transparent rounded-xl lg:p-10 sm:p-7 p-5 flex flex-col gap-4 justify-end"
		>
			<img 
				src={image} 
				alt="" aria-hidden
				className="absolute w-full lg:top-10 lg:left-10 sm:top-7 sm:left-7 left-5 bottom-5" 
			/>
			<h5 className="z-10">{title}</h5>
			<p className="z-10 text-white/50 text-sm ">{description}</p>
			<div className="absolute rounded-xl z-5 transition pointer-events-none
			 bg-gradient-to-t from-secondary to-transparent w-full h-full inset-0 group-hover:opacity-0"></div>
			<div className="absolute rounded-xl z-5 transition pointer-events-none
			 bg-gradient-to-t from-accent/70 to-transparent w-full h-full inset-0 opacity-0 group-hover:opacity-100"></div>
		</article>
	)
}
