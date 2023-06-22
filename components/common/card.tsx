import { ReactNode, useMemo } from 'react'
import { StylingVariant } from 'common/types/components'
import { ThemeVariantToColor } from 'common/constants/ui-theme'

export const LNCard = ({
  title = '', variant = null, children
}: {
  title?: String,
  variant?: StylingVariant | null,
  children: ReactNode
}) => {
  const titleStyle = useMemo(() => {
    const defaultStyle = 'text-lg text-right'
    const textColor = !variant ? '' : `text-${ThemeVariantToColor[variant]}`
    return variant ? `${defaultStyle} ${textColor}` : defaultStyle
  }, [variant])
  return (<div className="relative bg-black-opacity-20 rounded-xl p-5 text-white border border-transparent hover:border-slate-800">
    <span className="hidden text-green text-purple-dark">Colors</span>
    <p className={titleStyle}>{title}</p>
    {children}
  </div>)
}
