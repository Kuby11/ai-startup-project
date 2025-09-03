import { useState } from 'react'
import Check from '/public/icons/check.svg?react'  
import { twMerge } from 'tw-merge'

const cardsData: {
	title: string,
	pricing: string,
	benefits: string[]
}[] = [
	{
		title: 'Pricing',
		pricing: '$29/mo',
		benefits: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports']
	},
	{
		title: 'Pro',
		pricing: '$79/mo',
		benefits: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports','Content suggestions','Link optimization']
	},
	{
		title: 'Business',
		pricing: '$149/mo',
		benefits: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports','Content suggestions','Link optimization','Multi-user access','API integration']
	},
]

export default function Pricing() {
	const [activeCard, setActiveCard] = useState<number | null>(null)

	const isActive = (cardIndex: number) => cardsData[cardIndex] === cardsData[activeCard!]

	return (
		<section className="w-full flex flex-col items-center gap-10">
			<header className="relative z-100 flex flex-col items-center gap-10 max-w-90 text-center">
				<h2 className="h2">Pricing</h2>
				<h4 className="sm:text-lg">Choose the right plan to meet your SEO needs and start optimizing today.</h4>
			</header>
			<main className='w-full grid sm:grid-cols-[repeat(auto-fit,_minmax(307px,_auto))] items-center justify-center gap-5	'>
				{ cardsData.map((cardData, index) => (
					<article 
						className={twMerge(`${isActive(index) 
							? ('scale-105 shadow-[0_0_300px_50px_var(--color-secondary),_0_0_50px_0px_var(--color-secondary)]') 
							: 'shadow-[0_0_0_0_transparent] hover:shadow-md shadow-accent'} 
							flex flex-col transition ease-out overflow-hidden z-10 relative gap-4 border border-white/15 rounded-xl w-75 h-125 p-4
						`)}
						key={cardData.title}
						onClick={() => setActiveCard(index)}
					>
						<div className={twMerge(`${isActive(index) 
							? 'opacity-100'
							: ''}
							transition absolute opacity-0 w-full h-full inset-0 -z-10`)}
						>
							<img className='h-full opacity-50' src={`${import.meta.env.BASE_URL}/images/pattern.png`} alt="" aria-hidden />
							<div className="z-5 absolute inset-0 w-full h-full bg-linear-to-b from-black to-accent/30"></div>
						</div>
						<header className="border-b border-white/15 pb-4">
							<h3 className="text-2xl pb-4">{cardData.title}</h3>
							<span className="text-white/50">{cardData.pricing}</span>
						</header>
						<main className="w-full h-full flex flex-col justify-between">
							<ul className="w-full h-fit flex flex-col gap-3">
								{ cardData.benefits.map((benefit) => (
									<li className='flex items-center gap-1 md:text-base sm:text-sm text-base' key={benefit}><Check />{benefit}</li>
								)) }
							</ul>
							<button 
								type="button"
								className={twMerge(`${isActive(index) 
									? 'bg-secondary inset-shadow-sm' 
									: 'bg-white/10 inset-shadow-gray'}
									transition cursor-pointer w-full justify-self-end border border-white/15 py-2 rounded-2xl`)}
							>
								Join waitlist
							</button>
						</main>
					</article>
				)) }
			</main>
		</section>
	)
}
