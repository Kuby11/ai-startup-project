import Logo from "../../components/logo";
import Twitter from '/public/icons/twitter.svg?react'
import Instagram from '/public/icons/instagram.svg?react'
import Youtube from '/public/icons/youtube.svg?react'

const lists: {
	title: string,
	items: string[]
}[] = [
	{ 
		title: 'Product',
		items : ['Features','Integration','Updates','FAQ','Pricing']
	},
	{ 
		title: 'Company',
		items : ['About','Blog','Careers','Manifesto','Press','Contract']
	},
	{ 
		title: 'Resource',
		items : ['Examples','Community','Guides','Docs','Press']
	},
	{ 
		title: 'Legal',
		items : ['Privacy','Terms','Security']
	},
]

export default function Footer() {
	return (
		<footer className="relative w-full py-12 sm:h-140 h-fit flex not-sm:flex-col sm:items-center gap-10 justify-between">
			<div className="absolute w-screen h-0.25 bg-white/15 top-0 left-1/2 -translate-x-1/2"></div>
			<section className="sm:w-fit w-full h-full flex sm:flex-col justify-between">
				<div className="flex items-center gap-2">
					<Logo />
					<h3 className="font-medium sm:text-xl text-base">AI Startup Kit</h3>
				</div>
				<ul className="flex justify-between not-sm:items-center sm:w-full w-fit not-sm:gap-12.5">
					<li><a href="http://twitter.com"><Twitter className="**:transition-all hover:*:opacity-100 hover:**:fill-accent" /></a></li>
					<li><a href="http://instagram.com"><Instagram className="**:transition-all hover:*:opacity-100 hover:**:fill-accent" /></a></li>
					<li><a href="http://youtube.com"><Youtube className="**:transition-all hover:*:opacity-100 hover:**:fill-accent" /></a></li>
				</ul>
			</section>
			<section className="h-full grid sm:grid-cols-4 grid-cols-2 gap-y-15 sm:gap-x-15 gap-x-5 pb-10">
				{lists.map((item) => (
					<div className="flex flex-col sm:gap-10 gap-7" key={item.title}>
						<h2 >{item.title}</h2>
						<ul className="grid sm:gap-10 gap-7 group">
							{ item.items.map((name)=> (
								<li className="transition cursor-pointer text-white/50 hover:text-accent" key={name}>{name}</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</footer>
	)
}
