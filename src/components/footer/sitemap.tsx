// Import core libraries
import React, {FC} from 'react'
import {Link} from 'gatsby'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {SiteMapPropsInterface} from './interfaces'

const SiteMap: FC<SiteMapPropsInterface> = ({name, items}) => {
  const styleClasses = {
    nav: classy([
      'w-1/3'
    ]),
    ul: classy([
      'mt-5 grid grid-cols-1 gap-1'
    ]),
    link: classy([
      'text-blue hover:text-orange font-body'
    ]),
  }

  return (
    <nav className={styleClasses.nav}>
      <h3>
        {
          name
        }
      </h3>
      <ul className={styleClasses.ul}>
        {
          items.map((item, index) => (
            <li key={`sitemap-link-${index}`}>
              <Link className={styleClasses.link} to={item.to}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default SiteMap
