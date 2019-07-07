// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    // Social Media
    const socialMedia = store.addContentType({
      typeName: 'SocialMedia'
    })
    socialMedia.addNode({
      id: 1,
      title: 'Facebook',
      fields: { link: 'https://www.facebook.com/DRONERSde/', icon: 'facebook-f' }
    })
    socialMedia.addNode({
      id: 2,
      title: 'Instagram',
      fields: { link: 'https://www.instagram.com/DRONERSde/', icon: 'instagram' }
    })
    socialMedia.addNode({
      id: 3,
      title: 'Twitter',
      fields: { link: 'https://www.twitter.com/DRONERSde/', icon: 'twitter' }
    })
    socialMedia.addNode({
      id: 4,
      title: 'Youtube',
      fields: { link: 'https://www.youtube.com/DRONERSde/', icon: 'youtube' }
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
