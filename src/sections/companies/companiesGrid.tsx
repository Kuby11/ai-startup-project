import cls from './companies.module.css'

const imagePaths = [
	{
		path: '/images/acme.svg',
		name: 'acme'
	},
	{
		path: '/images/echo-valley.svg',
		name: 'echo valley'
	},
	{
		path: '/images/quantum.svg',
		name: 'quantum'
	},
	{
		path: '/images/pulse.svg',
		name: 'pulse'
	},
	{
		path: '/images/outside.svg',
		name: 'outside'
	},
	{
		path: '/images/apex.svg',
		name: 'apex'
	},
	{
		path: '/images/celestial.svg',
		name: 'celestial'
	},
	{
		path: '/images/2twice.svg',
		name: '2twice'
	},
	
]

export default function CompaniesGrid() {
	return (
		<main className='h-fit w-full rounded-xl'>
			<div className={`${cls.grid} ease-out transition relative bg-black lg:px-30 grid w-full sm:grid-cols-[repeat(auto-fit,_minmax(200px,_auto))] grid-cols-2 sm:gap-2 gap-3`}>
				{imagePaths.map((item) => (
					<article key={item.name} className={`${cls.card} ease-out not-sm:px-4 overflow-hidden relative z-5 bg-black/50 cursor-pointer h-24.5 w-full transition flex items-center justify-center hover:border-accent border border-white/15 rounded-xl`}>
						<a href=''>
							<img className='w-full relative z-10 pointer-events-none' src={item.path} alt={item.name} />
						</a>
					</article>
				))}
			</div>
		</main>
	)
}
