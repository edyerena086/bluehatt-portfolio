// Import core libraries
import React, {FC} from 'react'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {SectionPropsInterface} from './interfaces'

const Section: FC<SectionPropsInterface> = ({children, isInverted = false, isFluid = false}) => {
  const styleClasses = {
    section: classy([
      isInverted ? 'bg-ligth' : ''
    ]),
    div: classy([
      'container mx-auto py-16'
    ]),
  }

  return (
    <section className={styleClasses.section}>
      {
        isFluid ? children : (<div className={styleClasses.div}>{children}</div>)
      }
    </section>
  )
}

export default Section
