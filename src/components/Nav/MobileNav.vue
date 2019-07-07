<template>
  <v-navigation-drawer app>
    <g-link
      :to="'/' + page.node.slug"
      v-for="page in $static.allContentPage.edges"
      :key="page.node.slug"
    >{{ page.node.title }}</g-link>
    <g-link to="/shop">Shop</g-link>
  </v-navigation-drawer>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  allContentPage(sortBy: "position", order: DESC, filter: { footer: { eq: false }}) {
    edges {
      node {
        title
        slug
        position
      }
    }
  }

  socialMedia: allSocialMedia (sortBy: "id" order: ASC) {
    edges {
      node {
        id
        title
        link
        icon
      }
    }
  }
}
</static-query>

<style scoped>
</style>
