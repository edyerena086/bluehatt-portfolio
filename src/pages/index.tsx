// Import core libraries
import React, {FC} from 'react'
import {graphql} from 'gatsby'
import type {PageProps} from 'gatsby'

// Import components
import {Layout, Section, CallToAction, SectionTitle} from '@components/index'

const IndexPage: FC<PageProps> = ({data}) => {
  const {header, footer} = data?.contentfulHomePage

  return (
    <Layout footer={footer} header={header}>
      <Section>
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
    footer {
      ...footerFragment
    }
  }
}
`

export default IndexPage
