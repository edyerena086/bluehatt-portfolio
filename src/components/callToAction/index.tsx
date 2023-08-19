// Import core libraries
import React, {FC, Fragment} from 'react'
import {Link} from 'gatsby'
import {FaArrowRight} from 'react-icons/fa'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {CallToActionPropsInterface} from './interfaces'

const CallToAction: FC<CallToActionPropsInterface> = ({children, to = '', type = 'primary', onClick = () => {}}) => {
  const pattern = /https?:\/\//

  const styleClasses = {
    primary: classy([
      'bg-blue py-3 px-11 font-title text-white font-bold rounded-full',
      'hover:bg-orange hover:text-black'
    ]),
    secondary: classy([
      'font-title text-primary font-bold rounded-full border-2 border-orange py-3 px-11',
      'hover:bg-orange hover:text-black'
    ]),
    tertiary: classy([
      'text-primary font-title font-bold flex items-center',
      'hover:text-orange'
    ]),
    icon: classy([
      'text-orange ml-2',
    ]),
  }

  const selectedStyles = type === 'primary' ? styleClasses.primary :  type === 'secondary' ? styleClasses.secondary : styleClasses.tertiary

  return (
    <Fragment>
      {
       to === '' ? 
       (
        <button onClick={() => onClick()} className={selectedStyles}>
          {
            children
          }
          {
            type === 'tertiary' && <FaArrowRight className={styleClasses.icon} />
          }
        </button>
       ) 
       :
       pattern.test(to) ? 
       (
        <a href={to} className={selectedStyles} target={'__blank'}>
          {
            children
          }
          {
            type === 'tertiary' && <FaArrowRight className={styleClasses.icon} />
          }
        </a>
       ) 
       : 
       (
        <Link to={to} className={selectedStyles}>
          {
            children
          }
          {
            type === 'tertiary' && <FaArrowRight className={styleClasses.icon} />
          }
        </Link>
       )
      }
    </Fragment>
  )
}

export default CallToAction
