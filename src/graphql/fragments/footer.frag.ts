// Import core  libraries
import {graphql} from 'gatsby'

export const footerFragment = graphql`
fragment footerFragment on ContentfulFooter {
  socialMedia {
    ...linkItemsFragment
  }
  siteMap {
    ...linkItemsFragment
  }
  copyright
  legalLink {
    ...ctaFragment
  } 
 }
`
