module.exports = {
  siteMetadata: {
    siteUrl: "https://codetechnology.netlify.com/",
    title: "Code and Technology",
    description:
      "Blog o tematyce Front-end, Back-end, DevOps, sieci komputerowe, systemy operacyjne, nowe technologie. Myślę, że każdy znajdzie tutaj coś dla siebie."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-robots-txt",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-150417633-1",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: true,
              // // Setting this parameter is optional
              // anonymize: true,
              // // Setting this parameter is also optional
              // respectDNT: true,
              // // Avoids sending pageview hits from custom paths
              // exclude: ["/preview/**", "/do-not-track/me/too/"],
              // // Delays sending pageview hits on route update (in milliseconds)
              // pageTransitionDelay: 0,
              // // Enables Google Optimize using your container Id
              // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // // Enables Google Optimize Experiment ID
              // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
              // // Set Variation ID. 0 for original 1,2,3....
              // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
              // // Any additional optional fields
              sampleRate: 5,
              siteSpeedSampleRate: 10
              // cookieDomain: "example.com",
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
