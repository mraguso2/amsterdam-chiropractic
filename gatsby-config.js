const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Amsterdam Chiropractic`,
    description: `A chiropractic and massage clinic that specializes in the treatment and diagnosis of neuromuscular disorders. Our goal is to improve function, relieve and prevent pain.`,
    author: `mikeraguso`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amsterdam-Chiropractic`,
        short_name: `Amsterdam-Chiro`,
        start_url: `/`,
        background_color: `#00533e`,
        theme_color: `#00533e`,
        display: `minimal-ui`,
        icon: `src/images/ac-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
