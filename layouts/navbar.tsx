import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import NavContainer from 'components/navigation/container'
import NavItem from 'components/navigation/item'
import { navigations } from 'common/constants/navigation'

const NavBar = ({ router }: { router: any }) => {
  const [visible,setVisible] = useState<boolean>(false)

  const isSelected = (href: string) => router.pathname.includes(href)

  return (<NavContainer>
    {navigations.map((n, i) => <NavItem
      key={i} href={n.href}
      title={n.title} icon={n.icon}
      size={n.size} selected={isSelected(n.href)}
    />)}
  </NavContainer>)
}

export default withRouter(NavBar)
