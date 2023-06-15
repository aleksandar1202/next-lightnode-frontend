import { ReactNode } from 'react'

const NavContainer = ({ children }: {
  children: ReactNode
}) => {
  return (<ul>{children}</ul>)
}

export default NavContainer
