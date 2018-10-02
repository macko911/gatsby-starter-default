module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "base/variables.scss";',
        includePaths: ['src/styles', 'node_modules/mfg/styles']
      }
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['mfg']
      }
    }
  ]
}
