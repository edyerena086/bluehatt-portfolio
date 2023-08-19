// Import core libraries
import React, {FC, Fragment} from 'react'

// Import components
import {Header, Footer} from '@components/index'

// Import interfaces
import {LayoutPropsInterface} from './interfaces'

const Layout: FC<LayoutPropsInterface> = ({children, header, footer}) => {
  return (
    <Fragment>
      <Header {...header} />
      {
        children
      }
      <Footer {...footer} />
    </Fragment>
  )
}

export default Layout
