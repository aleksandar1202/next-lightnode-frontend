import { useMemo, ReactNode } from 'react'
import Link from 'next/link'

type RectSize = {
  width: number;
  height: number;
}

const NavItem = ({ href, title, icon, size, selected }: {
  href: string,
  title: string,
  icon: string,
  size: RectSize,
  selected: boolean
}) => {
  const containerStyles = useMemo(() => "p-4 rounded-2xl text-white" + (selected ? " bg-blue-light animated fadeIn" : ""), [selected])
  const svgStyles = useMemo(() => {
    return selected ? "" : "nav-item-selected"
  }, [selected])

  return (<li className={containerStyles}>
    <Link href={href}>
    <a className="flex items-center">
      <div className="flex justify-center w-8">
        <img src={icon} width={size.width} height={size.height} className={svgStyles}/>
      </div>
      <span className="ml-5">{title}</span>
    </a>
    </Link>
  </li>)
}

export default NavItem
