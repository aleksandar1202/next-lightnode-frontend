import { useMemo, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type RectSize = {
  width: number;
  height: number;
}

export const NavItem = ({ href, title, icon, size, selected }: {
  href: string,
  title: string,
  icon: string,
  size: RectSize,
  selected: boolean
}) => {
  const containerStyles = useMemo(() => "p-4 rounded text-white" + (selected ? " bg-blue-300 animated fadeIn" : ""), [selected])
  const svgStyles = useMemo(() => {
    return selected ? "" : "nav-item-selected"
  }, [selected])

  return (<li className={containerStyles}>
    <Link href={href}>
    <a className="flex items-center">
      <div className="flex justify-center w-8">
        <Image src={icon} width={size.width} height={size.height} className={svgStyles} alt="Nav Icon"/>
      </div>
      <span className="ml-5">{title}</span>
    </a>
    </Link>
  </li>)
}
