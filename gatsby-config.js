module.exports = {
  siteMetadata: {
    title: "My Test Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "RwBqGg8tfORgim3elWb_cAtOjbzC6V8sQKgjgqQ6tM8",
        spaceId: "rggoqfmhzyrv",
      },
    },
  ],
};
