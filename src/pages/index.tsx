// Import core libraries
import React, {FC} from 'react'
import {graphql} from 'gatsby'
import type {PageProps} from 'gatsby'

// Import components
import {Layout, Section, CallToAction, SectionTitle} from '@components/index'

const IndexPage: FC<PageProps> = ({data}) => {
  const {header} = data?.contentfulHomePage

  return (
    <Layout header={header}>
      <Section isInverted>
        <SectionTitle isCentered subTitle={'Este es un subtitulo del section title'}>
          Nuestros servicios
        </SectionTitle>
        <CallToAction to={'https://google.com'} type='tertiary'>
          Contáctanos
        </CallToAction>
      </Section>
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  contentfulHomePage {
    header {
      navbar {
        to
        name
        showOff
      }
    }
  }
}
`

export default IndexPage
