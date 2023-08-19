// Import core libraries
import React, {FC, Fragment} from 'react'

// Import interfaces
import {LayoutPropsInterface} from './interfaces'

const Layout: FC<LayoutPropsInterface> = ({children}) => {
  return (
    <Fragment>
      {
        children
      }
    </Fragment>
  )
}

export default Layout
