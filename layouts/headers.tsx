import { useState, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReddit,
  faTelegram,
  faDiscord,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

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
  return (<div>
    Client Header Here
  </div>)
}
