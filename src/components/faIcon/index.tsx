// Import core libraries
import React, {FC} from 'react'
import * as Icon from 'react-icons/fa'

// Import interfaces
import {FaIconPropsInterface} from './interfaces'

const FaIcon: FC<FaIconPropsInterface> = ({name, styles = ''}) => {
  const IconToRender = Icon[name]

  return <IconToRender className={styles} />
}

export default FaIcon
