const gridData: {
	icon: string,
	title: string,
	text: string
}[] = [
	{
		icon: 'gauge',
		title: 'User-friendly dashboard',
		text: 'Perform complex SEO audits and optimizations with a single click.'
	},
	{
		icon: 'checks',
		title: 'Content evaluation',
		text: 'Simple corrections for immediate improvements.'
	},
	{
		icon: 'wand',
		title: 'Link Optimization Wizard',
		text: 'Guides you through the process of creating and managing links.'
	},
	{
		icon: 'chart',
		title: 'Visual reports',
		text: 'Visual insights into your site’s performance.'
	},
	{
		icon: 'target',
		title: 'SEO goal setting',
		text: 'Helps you set and achieve SEO goals with guided assistance.'
	},
	{
		icon: 'cursor-click',
		title: 'One-click optimization',
		text: 'Perform complex SEO audits and optimizations with a single click.'
	},
	{
		icon: 'sparkle',
		title: 'Smart Keyword Generator',
		text: 'Automatic suggestions and the best keywords to target.'
	},
	{
		icon: 'bell',
		title: 'Automated alerts',
		text: 'Automatic notifications about your SEO health, including quick fixes.'
	},
	{
		icon: 'files',
		title: 'Competitor reports',
		text: 'Provides insights into competitors’ keyword strategies and ranking.'
	},
]

export default function Features() {
	return (
		<section className="relative w-full h-fit flex flex-col gap-10 items-start py-19">
			<h2 className="h2 sm:max-w-90 w-full not-sm:text-center">Elevate your SEO efforts.</h2>
			<ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(320px,_auto))] gap-y-10 gap-x-15">
				{ gridData.map((item) => (	
					<li className="flex flex-col items-start gap-2.5" key={item.title}>
						<div className="flex items-center gap-1">
							<img src={`/icons/${item.icon}.svg`} className="w-4 h-4" alt="" aria-hidden />
							<h5 className="text-lg">{item.title}</h5>
						</div>
						<p className="text-white/50">{item.text}</p>
					</li>
				)) }
			</ul>
			<div className="-z-1 absolute top-0 left-1/2 -translate-x-1/2 border-y border-white/15 bg-linear-to-br from-secondary/50 to-transparent w-screen h-full"></div>
		</section>
	)
}
