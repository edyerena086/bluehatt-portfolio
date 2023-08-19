// Import core libraries
import React, {FC} from 'react'
import {Link} from 'gatsby'

// Import utils
import {classy} from '@utils/index'

// Import sub-components
import Navbar from './navbar'

// Import interfaces
import {HeaderPropsInterface} from './interfaces'

const Header: FC<HeaderPropsInterface> = ({navbar}) => {
  const styleClasses = {
    header: classy([
      'sticky top-0 z-[20] bg-white',
      'py-5 px-0 md:px-2 lg:px-0'
    ]),
    section: classy([
      'md:flex items-center justify-between mx-auto container'
    ]),
  }

  return (
    <header className={styleClasses.header}>
      <section className={styleClasses.section}>
        <Link to={'/'}>Logo</Link>
        <Navbar items={navbar} />
      </section>
    </header>
  )
}

export default Header
