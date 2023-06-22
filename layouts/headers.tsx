import { useState, Fragment, useMemo } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReddit,
  faTelegram,
  faDiscord,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faTimes, faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { navigations } from 'common/constants/navigation'
import { LNBadge } from 'components/common/badge'
import { LNButton } from 'components/common/button'
import { NavigationObjectType } from 'common/types/common'

export const AnonymousHeader = () => {
  const [open, setOpen] = useState<boolean>(false)

  const NavItems = () => <Fragment>
    <a href="#about" className="header-link" onClick={() => setOpen(false)}>About</a>
    <a href="#services" className="header-link" onClick={() => setOpen(false)}>Services</a>
    <a href="#validators" className="header-link" onClick={() => setOpen(false)}>Validators</a>
    <a href="#contact" className="header-link" onClick={() => setOpen(false)}>Contact</a>
  </Fragment>

  const NavSocialItems = () => <Fragment>
    <FontAwesomeIcon className="header-social-icon" icon={faReddit} onClick={() => setOpen(false)} />
    <FontAwesomeIcon className="header-social-icon" icon={faTelegram} onClick={() => setOpen(false)} />
    <FontAwesomeIcon className="header-social-icon" icon={faDiscord} onClick={() => setOpen(false)} />
    <FontAwesomeIcon className="header-social-icon" icon={faGithub} onClick={() => setOpen(false)} />
    <FontAwesomeIcon className="header-social-icon" icon={faClipboard} onClick={() => setOpen(false)} />
    <FontAwesomeIcon className="header-social-icon" icon={faTwitter} onClick={() => setOpen(false)} />
  </Fragment>

  return (<div className="sticky top-0 z-20 bg-blue-dark grid grid-cols-1 lg:grid-cols-2 py-5 md:py-10 px-10 md:px-20">
    <div className="header-navigation">
      <NavItems />
    </div>
    <div className="header-social flex justify-end">
      <NavSocialItems />
      <FontAwesomeIcon className="header-open-drawer" icon={faBars} onClick={() => setOpen(true)} />
    </div>
    <div className={`${open ? "fixed top-0 left-0 right-0 bottom-0" : 'hidden'} flex flex-col justify-center items-center bg-blue-dark`}>
      <FontAwesomeIcon className="header-close-drawer ml-52 mb-12" icon={faTimes} onClick={() => setOpen(false)} />
      <div className="header-navigation mobile text-center">
        <NavItems />
      </div>
      <div className="header-social mobile mt-12">
        <NavSocialItems />
      </div>
    </div>
  </div>)
}

export const ClientHeader = () => {
  const router = useRouter()
  const navigation = useMemo((): NavigationObjectType => {
    const n = navigations.find(n => router.pathname.includes(n.href))
    return n || { href: '', title: '', icon: '', size: { width: 0, height: 0} }
  }, [router])

  return (<div className="py-10 flex justify-between flex-col-reverse md:flex-row">
    <div className="text-white flex items-center">
      <img src={navigation.icon} width={navigation.size.width * 1.5}
        height={navigation.size.height * 1.5 || 0} className="mr-4"/>
      <span className="text-4xl">{navigation.title}</span>
    </div>
    <div className="flex items-center justify-between md:justify-end pr-4 mb-6 md:mb-0">
      <LNButton style="outlined" title="Connect Wallet" className="mr-6 uppercase"/>
      <LNBadge text="2">
        <FontAwesomeIcon className="text-white text-2xl hover:text-yellow hover:cursor-pointer duration-300" icon={faBell} />
      </LNBadge>
    </div>
    
  </div>)
}
