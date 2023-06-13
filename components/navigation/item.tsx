import { useMemo, ReactNode } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const NavItem = ({ href, title, icon, router }: {
  href: string, title: string, icon: string, router: any
}) => {
  const selected = useMemo(() => router.pathname.includes(href), [router])
  const styles = useMemo(() => "p-4 rounded-2xl text-white" + (selected ? " bg-blue-light" : ""), [selected])

  return (<li className={styles}>
    <Link href={href}>{title}</Link>
  </li>)
}

export default withRouter(NavItem)
