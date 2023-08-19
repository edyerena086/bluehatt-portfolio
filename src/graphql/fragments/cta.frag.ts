// Import core  libraries
import {graphql} from 'gatsby'

export const ctaFragment = graphql`
fragment ctaFragment on ContentfulCallToAction {
  title
  name
  type
  to
  showOff
}
`
