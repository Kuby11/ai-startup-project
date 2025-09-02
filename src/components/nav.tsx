import { useState } from "react"
import BurgerButton from "./burgerButton"
import Button from "./button"
import Logo from "./logo"
import Sidebar from "./sidebar"

const navbarItems: string[] = ['Features','Development','Company','Blog','Changelog'] 

export default function Nav() {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	
	return (
		<nav className="fixed z-1000 bg-black/20 max-w-7xl px-4 w-full flex justify-around items-center md:py-3.5 py-2 max-h-19">
			<div className="-z-1 absolute w-screen bottom-0 h-full bg-black/15 backdrop-blur-xl border-b border-white/15"></div>
			<Logo />
			<ul className="lg:text-base md:text-sm text-xs list-none sm:flex hidden items-center md:gap-4 lg:px-10 px-5 md:h-12.5 h-10 text-white/60 border border-white/15 rounded-full ">
				{ navbarItems.map((item) => (
					<li 
						key={item}
						className="group cursor-pointer lg:px-4 px-3 md:py-2 p-1 hover:text-accent transition">
						<a 
							href="#" 
							className="
								relative transition group-hover:after:w-full after:transition-all after:duration-400 after:block after:w-0 
								after:h-0.25 after:bg-accent after:absolute after:top-[120%] after:left-1/2 after:-translate-1/2"
						>
							{item}
						</a>
					</li>
				)) }
			</ul>
			<Button variant="accent" className="not-sm:ml-auto not-sm:mr-5">Join waitlist</Button>
			<BurgerButton onClick={() => setIsCollapsed(!isCollapsed)} isCollapsed={isCollapsed}/>
			<Sidebar isCollapsed={isCollapsed} sidebarItems={navbarItems} />
		</nav>
	)
}
