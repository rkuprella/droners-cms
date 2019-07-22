<template>
  <footer class="footer">
    <div class="container footer-wrapper">
      <Logo size="sm" />
      <ul>
        <li class="footer-link" v-for="page in $static.allContentPage.edges" :key="page.node.slug">
          <g-link :to="'/' + page.node.slug">{{ page.node.title }}</g-link>
        </li>
        <li class="footer-link">
          <a href="https://droners.de/impressum">Impressum</a>
        </li>
      </ul>
    </div>
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

<script>
import Logo from "~/components/UI/Logo";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.footer {
  background: var(--color-bg-dark);
  padding: 60px 0;
  z-index: 3;
  position: relative;
}
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-link {
  list-style: none;
}
.footer-link a {
  color: var(--color-light);
  text-decoration: none;
}
</style>