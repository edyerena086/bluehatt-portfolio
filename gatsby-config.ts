require("dotenv").config({
  path: `.env`,
})

import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `bluehatt`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    // Google fonts
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Inter',
          'Noto Sans'
        ],
      }
    },
    // Contentful connection
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        useNameForId: false,
      },
    },
    // Path aliases
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@utils': 'src/utils',
          '@common': 'src/common',
        },
        extensions: [
          'js',
          'ts',
          'jsx',
          'tsx',
        ]
      },
    },
  ],
}

export default config
