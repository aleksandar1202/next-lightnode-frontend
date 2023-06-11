import { ReactNode } from 'react'
import { AnonymousHeader } from 'layouts/headers'
import { AnonymousFooter } from 'layouts/footers'

export const AnonymousLayout = ({ children }: {
  children: ReactNode
}) => {
  return (<div className="bg-blue-dark">
    <AnonymousHeader />
    {children}
    <AnonymousFooter />
  </div>)
}
