<template>
  <div>
    <nav class="topbar" v-if="topbar">
      <div class="container">
        <ul>
          <li>Auto</li>
        </ul>
      </div>
    </nav>
    <nav class="navbar">
      <div class="navbar-wrapper container center-v">
        <g-link to="/">
          <g-image class="brand-logo" src="~/assets/img/logo.png" :alt="$static.metaData.siteName" />
        </g-link>
        <div class="center-v">
          <g-link
            class="navbar-link"
            v-for="page in $static.allContentPage.edges"
            :key="page.node.slug"
            :to="'/' + page.node.slug"
          >{{ page.node.title }}</g-link>

          <g-link class="navbar-link" to="/shop">Shop</g-link>
          <g-link class="navbar-link navbar-button" to="/booking">Buchen</g-link>
          <button @click="mobile = !mobile"></button>
        </div>

        <MobileNav v-if="mobile" />
      </div>
    </nav>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  allContentPage(sortBy: "position", order: DESC, filter: { menu: { eq: "main" }}) {
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
import MobileNav from "~/components/Nav/MobileNav";

export default {
  components: {
    MobileNav
  },
  props: {
    topbar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mobile: false
    };
  }
};
</script>

<style>
.topbar {
  height: 44px;
  background: var(--color-blue);
}
.navbar {
  height: 80px;
}
.navbar-wrapper {
  justify-content: space-between;
}
.navbar-link {
  padding: 6px 12px;
  color: var(--color-light);
  text-decoration: none;
}
.navbar-link:not(:last-of-type) {
  margin-right: 6px;
}
.navbar-button {
  border: 2px solid var(--color-blue);
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 700;
}
</style>
