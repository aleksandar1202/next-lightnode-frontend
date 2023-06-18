import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavContainer } from 'components/navigation/container'
import { NavItem } from 'components/navigation/item'
import { navigations } from 'common/constants/navigation'

export const NavBar = () => {
  const router = useRouter()
  const isSelected = (href: string) => router.pathname.includes(href)

  return (<NavContainer>
    {navigations.map((n, i) => <NavItem
      key={i} href={n.href}
      title={n.title} icon={n.icon}
      size={n.size} selected={isSelected(n.href)}
    />)}
  </NavContainer>)
}
