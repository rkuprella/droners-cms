<template>
  <div class="navigation">
    <MobileNav v-if="mobile" />
    <nav
      class="navbar is-spaced is-dark is-transparent"
      :class="{ gap : gap }"
      role="navigation"
      aria-label="main navigation"
      style="position:absolute; top:0; left:0; width:100%"
    >
      <div class="container">
        <div class="navbar-brand">
          <g-link class="navbar-item" to="/">
            <g-image
              class="brand-logo"
              src="~/assets/img/logo.png"
              :alt="$static.metaData.siteName"
            />
          </g-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="mobile = !mobile"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <g-link
              class="navbar-item"
              :to="'/' + page.node.slug"
              v-for="page in $static.allContentPage.edges"
              :key="page.node.slug"
            >{{ page.node.title }} {{ page.node.position }}</g-link>
            <g-link class="navbar-item" to="/shop">Shop</g-link>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary is-rounded is-outlined is-uppercase">
                  <strong>Buchen</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  allContentPage(filter: { footer: { eq: false }}) {
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
    gap: {
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
.gap {
  margin-top: 44px;
}
</style>
