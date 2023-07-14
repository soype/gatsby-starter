/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/src/notes`
      }
    }
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "Web dev portfolio",
    copyright: "2023 - Pedro Henestroza"
  }
}
