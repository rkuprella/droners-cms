// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  sitename: 'Droners',
  titleTemplate: '%s - Drone Arena',
  transformers: {
    remark: {
      // global remark options
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdown/contentPage/**/*.md',
        route: '/:slug',
        typeName: 'ContentPage',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdown/product/**/*.md',
        route: '/:slug',
        typeName: 'Product',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdown/profile/**/*.md',
        route: '/:slug',
        typeName: 'Profile',
        remark: {
          // remark options
        }
      }
    }
  ]
}
