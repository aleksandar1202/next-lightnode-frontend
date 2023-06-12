import { useMemo, MouseEvent } from 'react'
import { LNButtonArgs } from 'common/types/components'

export const LNButton = ({
  variant = 'primary', style = 'filled', size = 'medium', title, onClick = () => {}, className = ''
}: LNButtonArgs) => {
  const classNames = useMemo(() => {
    const variantClassName = `btn-${variant}`
    const styleClassName = `btn-${style}`
    const sizeClassName = size === 'large' ? 'py-5 px-16'
      : (size === 'small' ? '' : '')
    
    return `uppercase btn ${variantClassName} ${styleClassName} ${sizeClassName} ${className}`
  }, [className, size, style, variant])

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onClick()
  }

  return (<button className={classNames} onClick={onClickHandler}>{title}</button>)
}
