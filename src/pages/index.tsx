// Import core libraries
import React, {FC} from 'react'

// Import components
import {Layout, Section, CallToAction} from '@components/index'

const IndexPage: FC = () => {
  return (
    <Layout>
      <Section isInverted>
       <CallToAction to={'https://google.com'} type='tertiary'>
        Contáctanos
       </CallToAction>
      </Section>
    </Layout>
  )
}

export default IndexPage
