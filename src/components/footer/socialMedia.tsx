// Import core libraries
import React, {FC} from 'react'

// Import components
import {FaIcon} from '@components/index'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {SocialMediaPropsInterface} from './interfaces'

const SocialMedia: FC<SocialMediaPropsInterface> = ({items, name}) => {
  const styleClasses = {
    ul: classy([
      'flex mt-5'
    ]),
    li: classy([
      'mr-8'
    ]),
    link: classy([
      'text-blue hover:text-orange'
    ]),
    icon: classy([
      'text-3xl'
    ]),
  }

  return (
    <nav>
      <h3>{name}</h3>
      <ul className={styleClasses.ul}>
        {
          items.map((item, index) => (
            <li key={`social-media-item-${index}`} className={styleClasses.li}>
              <a href={item.to} className={styleClasses.link}>{<FaIcon styles={styleClasses.icon} name={item.name} />}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default SocialMedia
