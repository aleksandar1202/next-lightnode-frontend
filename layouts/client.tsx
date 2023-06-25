import { ReactNode } from 'react'
import { ClientHeader } from 'layouts/headers'
import { ClientFooter } from 'layouts/footers'
import { ClientDrawer } from 'layouts/drawers'

export const ClientLayout = ({ children }: {
  children: ReactNode
}) => {
  return (<div className="relative bg-blue-800">
    <ClientDrawer>
      <ClientHeader/>
      {children}
      <ClientFooter />
    </ClientDrawer>
  </div>)
}
