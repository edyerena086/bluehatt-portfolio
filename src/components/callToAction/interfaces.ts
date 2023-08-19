// Import core libraries
import {ReactNode} from 'react'

type ctaType = 'primary' | 'secondary' | 'tertiary'

export interface CallToActionPropsInterface {
  type?: ctaType
  children: ReactNode
  to?: string
  onClick?: Function
}