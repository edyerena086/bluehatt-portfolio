// Import core libraries
import React, {FC, useState} from 'react'
import {Link} from 'gatsby'
import { TfiMenu, TfiClose } from "react-icons/tfi"

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {NavbarPropsInterface} from './interfaces'

const Navbar: FC<NavbarPropsInterface> = ({items}) => {
  const [openMenu, setOpenMenu] = useState(false)

  const styleClasses = {
    button: classy([
      'absolute text-3xl right-8 top-6 cursor-pointer md:hidden'
    ]),
    nav: classy([
      'md:flex items-center md:static',
      'md:pb-0 pb-12',
      'absolute md:static',
      'bg-white md:z-auto z-[-1] letf-0 w-full md:w-auto md:pl-0 pl-9',
      'shadow-lg md:shadow-none',
      'transition-all duration-500 ease-in'
    ]),
    li: classy([
      'md:ml-8',
      'md:my-0 my-6',
      'font-title font-bold'
    ]),
    link: classy([
      'hover:text-orange text-xs lg:text-base'
    ]),
    linkShowOff: classy([
      'hover:bg-orange hover:text-black md:bg-blue md:text-white md:py-2 md:px-5 rounded-full text-xs lg:text-base'
    ]),
    openMenu: classy([
      'top-auto opacity-100',
    ]),
    closeMenu: classy([
      'top-[-490px] md:opacity-100 opacity-0',
    ]),
  }

  return (
    <nav>
      <button className={styleClasses.button} onClick={() => setOpenMenu(!openMenu)}>
        { !openMenu ? <TfiMenu /> : <TfiClose /> }
      </button>
      <ul className={`${styleClasses.nav} ${openMenu ? styleClasses.openMenu : styleClasses.closeMenu}`}>
        {
          items.map((item, index) => (
            <li key={`navbar-item-${index}`} className={styleClasses.li}>
              <Link to={item.to} className={item.showOff ? styleClasses.linkShowOff : styleClasses.link}>
                {
                  item.name
                }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
