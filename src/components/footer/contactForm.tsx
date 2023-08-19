// Import core libraries
import React, {FC} from 'react'

// Import components
import {SectionTitle} from '@components/index'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {ContactFormPropsInterface} from './interfaces'

const ContactForm: FC<ContactFormPropsInterface> = ({title}) => {
  return (
    <form>
      <SectionTitle>{title}</SectionTitle>
      <h5>Los campos marcados con (*) son obligatorios</h5>
    </form>
  )
}

export default ContactForm
