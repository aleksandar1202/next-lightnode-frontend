import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { NavContainer } from 'components/navigation/container'
import NavItem from 'components/navigation/item'
import { navigations } from 'common/constants/navigation'

export const NavBar = () => {
  const [visible,setVisible] = useState<boolean>(false)
  return (<NavContainer>
    {navigations.map((n, i) => <NavItem key={i} href={n.href} title={n.title} icon={n.icon}/>)}
  </NavContainer>)
}
