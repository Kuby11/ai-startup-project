import { cva } from 'class-variance-authority'
import { memo, type ReactNode } from 'react'
import { twMerge } from 'tw-merge'

type propsType = {
	children: ReactNode,
	className?: string,
	variant?: 'default' | 'accent'
}

const buttonVariants = cva(
	'cursor-pointer h-full *:h-full *:flex *:items-center *:justify-center md:p-2 p-1 md:text-base text-sm border border-white/15 md:rounded-2xl rounded-xl font-medium *:transition-all *:py-1.25 *:px-3.75 *:md:rounded-xl *:rounded-[0.625rem] hover:*:shadow-md hover:*:inset-shadow-md *:shadow-white/60 hover:border-accent ',
	{
		variants: {
			variant: {
				default:  
					'*:bg-white text-black hover:text-white hover:shadow-md shadow-white/20 hover:*:bg-accent',
				accent:
					'*:bg-accent/40 *:border *:border-2 *:border-white/2.5 hover:shadow-md shadow-white/20 hover:*:bg-accent hover:*:inset-shadow-white'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

function Button({
	children,
	className,
	variant
}: propsType ) {
	return (
		<button 
			type='button'
			className={twMerge(buttonVariants({variant, className}))}
		> 
			<p className={variant === 'accent' ? 'inset-shadow-md inset-shadow-white/30 ': ''}>{children}</p>
		</button>
	)
}

export default memo(Button)
