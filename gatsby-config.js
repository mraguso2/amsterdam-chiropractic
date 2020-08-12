const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Amsterdam Chiropractic`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
