import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { LNLogo } from 'components/common/logo'
import { NavBar } from './navbar'

export const ClientDrawer = ({ children }: {
  children: ReactNode
}) => {
  const [visible,setVisible] = useState<boolean>(false)
  return (<div className="relative flex overflow-hidden">
    <div className="w-64 flex-none p-8">
      <Link href="/">
        <a><LNLogo size="medium" variant="horizontal"/></a>
      </Link>
      <div className="h-32"></div>
      <NavBar />
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>)
}
