import { cva } from "class-variance-authority"
import { useEffect, useState } from "react"
import { twMerge } from "tw-merge"

type SidebarProps = {
	isCollapsed: boolean,
	sidebarItems: string[]
}

export default function Sidebar({isCollapsed, sidebarItems}: SidebarProps) {
	const [variant, setVariant] = useState<'collapsed' | 'open'>('collapsed')

	useEffect(()=>{
		setVariant(
			isCollapsed 
			? 'collapsed'
			: 'open'
		)
	}, [isCollapsed])

	const sidebarStyle = cva(
		'absolute z-100 inset-0 transition ease-out duration-300 bg-black h-220 w-screen overflow-hidden sm:hidden',
		{
			variants: {
				variant: {
					collapsed: 
						'shadow-2xl shadow-accent overflow-hidden',
					open:
						'border-l border-accent/50 translate-x-full overflow-hidden'
				}
			}
		}
	)

	return (
		<aside className={twMerge(sidebarStyle({variant}))}>
			<ul className="flex flex-col backdrop-blur-md justify-center gap-2 items-center h-full pb-20">
				{ sidebarItems.map((item) => (
					<li key={item} className="py-2 px-4 rounded-xl text-2xl font-medium group">
						<a 
							href="#" 
							className="relative transition group-hover:text-accent group-hover:after:w-full after:transition-all 
								after:duration-400 after:block after:w-0 after:h-0.5 after:bg-accent after:absolute after:top-[120%] after:left-1/2 after:-translate-1/2"
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</aside>
	)
}
