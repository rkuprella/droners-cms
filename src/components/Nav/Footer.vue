<template>
  <footer>
    <a href="https://droners.de/impressum">Impressum</a>
    <g-link
      :to="'/' + page.node.slug"
      v-for="page in $static.allContentPage.edges"
      :key="page.node.slug"
    >{{ page.node.title }}</g-link>
  </footer>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  allContentPage(sortBy: "position", order: DESC, filter: { menu: { eq: "footer" }}) {
    edges {
      node {
        title
        slug
        position
      }
    }
  }

}
</static-query>