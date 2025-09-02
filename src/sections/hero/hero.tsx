import Badge from "../../components/badge";
import Button from "../../components/button";

export default function Hero() {
	return (
		<section id="hero" className="relative mt-50 flex flex-col items-center gap-15">
			<header className="relative z-5 flex flex-col items-center gap-5 md:w-170 w-full">
				<Badge>Latest integration just arrived</Badge>
				<h1 className="flex flex-col lg:text-[5.15rem] sm:text-7xl text-6xl text-center font-medium">
					Boost your
					<span className="min-h-25 block bg-gradient-to-t from-accent to-white text-transparent bg-clip-text">
						rankings with AI.
					</span>
				</h1>
				<h3 className="md:text-xl text-lg text-center md:max-w-136 max-w-85">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</h3>
				<Button className="relative z-10 md:h-17 h-13">Start for free</Button>
			</header>
			<article className="p-2 shadow-xl shadow-accent bg-black/100 rounded-lg">
				<img 
					src="/images/App Wide.png" 
					alt="app image"
					width='1098'
					height='794'				
					className="relative z-5 md:w-274.5 sm:w-180 min-w-80" 
				/>
			</article>
			<img 
				src="/images/bg-ring.svg" 
				aria-hidden 
				className="z-4 absolute bottom-50"	
			/>
			<div className="z-4 bottom-50 absolute md:w-142 md:h-142 sm:100 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
			<div className="z-4 lg:bottom-70 bottom-40 absolute md:w-190 md:h-190 sm:w-120 sm:h-120 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
			<div className="z-5 -bottom-40 absolute bg-gradient-to-t from-black from-[60%] to-transparent to-[100%] w-screen h-70"></div>
		</section>
	)
}
