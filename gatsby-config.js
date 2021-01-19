require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        siteImage: './static/favicon-32x32.png',
        siteTitle: `⚙ I / O Briefs`,
        siteTitleAlt: `I / O Briefs`,
        siteHeadline: `⚙ I / O Briefs - Delivers guides for curious minds.`,
        // Will be used to generate absolute URLs for og:image etc.
        siteUrl: `https://minimal-blog.lekoarts.de`,
        // Used for SEO
        siteDescription: `Supporting developers at every stage. Deliver guides for curious minds.`,
        // Will be set on the <html /> tag
        siteLanguage: `en`,
        // Twitter Handle
        author: `@tamojitdas97`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                    {
                        title: `About Me`,
                        slug: `/aboutme`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/tamojitdas97`,
                    },
                    {
                        name: `LinkedIn`,
                        url: `https://www.linkedin.com/in/tamojit-das-365b19118/`,
                    },
                    {
                        name: `GitHub`,
                        url: `https://github.com/tamojit-123`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}
