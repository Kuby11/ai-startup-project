export default function Clients() {
	return (
		<section className="w-full flex flex-col items-center">
			<header className="flex flex-col items-center text-center gap-7 max-w-90">
				<h2 className="h2">Our clients</h2>
				<h4 className="sm:text-lg">Hear firsthand how our solutions have boosted online success for users like you.</h4>
			</header>
			<main className="relative w-full flex justify-center not-md:pb-40">
				<div className="relative w-fit">
					<picture>
						<source className="sm:w-full" srcSet={`${import.meta.env}/images/Testimonial-mobile.png`} width={317} media="(max-width: 768px)"/>
						<img 
							src={`${import.meta.env.BASE_URL}/images/Testimonial.png`} alt="testimonial"
							width={990} height={401}
							className=""
						/>
					</picture>
					<div className="z-50 absolute w-85 flex flex-col gap-1 md:top-1/2 top-90 -translate-y-1/2 lg:left-1/3 md:left-2/7 left-1/2 md:translate-x-1/2 -translate-x-1/2 not-md:text-center">
						<blockquote className="sm:text-xl text-lg not-sm:max-w-80 mb-4">”This product has completely transformed how I manage my projects and deadlines”</blockquote>
						<p>Talia Taylor</p>
						<span className="text-white/50 text-sm">Digital Marketing Director @ Quantum</span>
					</div>
					<div className="z-10 absolute w-70 h-70 blur-3xl bg-accent/50 rounded-full top-1/2 -translate-y-1/2 lg:left-1/3 left-1/2 -translate-x-1/2"></div>
				</div>
			</main>
		</section>
	)
}
