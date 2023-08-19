// Import core libraries
import React, {FC, Fragment} from 'react'

// Import components
import {Header} from '@components/index'

// Import interfaces
import {LayoutPropsInterface} from './interfaces'

const Layout: FC<LayoutPropsInterface> = ({children, header}) => {
  return (
    <Fragment>
      <Header {...header} />
      {
        children
      }
    </Fragment>
  )
}

export default Layout
