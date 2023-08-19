// Import core  libraries
import {graphql} from 'gatsby'

export const linkItemsFragment = graphql`
fragment linkItemsFragment on ContentfulLinkItems {
  name
  items {
    ...ctaFragment
  }
}
`