type Props = {
	image: string,
	title: string,
	description: string
}

export default function BentoItemSmall({image,description,title}: Props) {
	return (
		<article className="w-full h-fit group hover:border-secondary duration-150 relative flex flex-col not-sm:aspect-square border border-white/15 rounded-xl lg:p-10 sm:p-7 p-5 gap-4">
			<img src={image} alt="" aria-hidden className="not-sm:w-full p-5" />
			<h5 className="z-10">{title}</h5>
			<p className="z-10 text-white/50 text-sm ">{description}</p>
			<div className="absolute rounded-xl z-5 transition pointer-events-none opacity-0 duration-150 group-hover:opacity-100
			 bg-gradient-to-t from-secondary/70 to-transparent w-full h-full inset-0"></div>
		</article>
	)
}
