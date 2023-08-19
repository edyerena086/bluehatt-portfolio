// Import core libraries
import {ReactNode} from 'react'

// Import extra interfaces
import {HeaderPropsInterface} from '@components/header/interfaces'
import {FooterPropsInterface} from '@components/footer/interfaces'

export interface LayoutPropsInterface {
  children: ReactNode
  header: HeaderPropsInterface
  footer: FooterPropsInterface
}
