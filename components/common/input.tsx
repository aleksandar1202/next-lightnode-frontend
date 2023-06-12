import { useMemo } from 'react'
import { LNInputArgs } from 'common/types/components'

export const LNInput = ({
  size, value, placeHolder, onChange
}: LNInputArgs) => {
  const responsiveClasses = useMemo(() => {
    switch(size) {
      case 'large':
        return ' py-3 px-6 text-2xl'
      case 'small':
        return ' py-1 px-2 text-base'
      default:
        return ' py-1.5 px-3.5 text-xl'
    }
  }, [size])

  return (<input className={"bg-transparent border rounded border-gray text-gray-light font-light focus:outline-0" + responsiveClasses}
    placeholder={placeHolder} value={value} onChange={event => onChange(event.target.value)} />)
}
