import { MouseEvent } from 'react'

export type ResponsiveSize = 'large' | 'medium' | 'small'

export type LogoVariant = 'vertical' | 'horizontal' | 'solo'

export interface LNInputArgs {
	size: ResponsiveSize,
	value: string,
	placeHolder: string,
	onChange: Function
}

export type StylingVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
export type ButtonStyle = 'outlined' | 'filled'

export interface LNButtonArgs {
	variant?: StylingVariant,
	style?: ButtonStyle,
	size?: ResponsiveSize,
	title: string,
	onClick?: Function,
	className?: string
}
