<template>
  <div class="nav">
    <nav class="topbar" v-if="topbar">
      <div class="nav-wrapper container center-v">
        <div>Open now</div>
        <ul class="center-v">
          <li class="topbar-item" v-for="page in $static.topMenu.edges" :key="page.node.slug">
            <g-link class="topbar-link" :to="'/' + page.node.slug">{{ page.node.title }}</g-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar">
      <div class="nav-wrapper container center-v">
        <g-link to="/">
          <g-image class="brand-logo" src="~/assets/img/logo.png" :alt="$static.metaData.siteName" />
        </g-link>
        <div class="center-v">
          <g-link
            class="navbar-link"
            v-for="page in $static.mainMenu.edges"
            :key="page.node.slug"
            :to="'/' + page.node.slug"
          >{{ page.node.title }}</g-link>

          <g-link class="navbar-link" to="/shop">Shop</g-link>
          <g-link class="navbar-link btn-booking" to="/booking">Buchen</g-link>
          <button @click="mobile = !mobile" class="btn-menu">
            <font-awesome :icon="['fa', 'bars']" size="lg" />
          </button>
        </div>
      </div>
    </nav>
    <MobileNav v-if="mobile" @close="mobile = false" />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  mainMenu: allContentPage(sortBy: "position", order: DESC, filter: { menu: { eq: "main" }}) {
    edges {
      node {
        title
        slug
        position
      }
    }
  }

  topMenu: allContentPage(sortBy: "position", order: DESC, filter: { menu: { eq: "top" }}) {
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
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
}
/* topbar */
.topbar {
  height: var(--size-xl);
  background: var(--color-blue);
}
.topbar-item {
  list-style: none;
  color: var(--color-bg);
  font-size: 0.9em;
  display: none;
}
.topbar-item:not(:last-of-type)::after {
  content: "|";
  margin: 0 var(--size-xs);
}
.topbar-link {
  padding: var(--size-xs) var(--size-sm);
  text-decoration: none;
  color: var(--color-bg);
}

/* navbar */
.navbar {
  height: 80px;
}
.nav-wrapper {
  justify-content: space-between;
}
.navbar-link {
  padding: var(--size-sm) var(--size-md);
  color: var(--color-light);
  text-decoration: none;
  display: none;
}
.navbar-link:not(:last-of-type) {
  margin-right: var(--size-sm);
}
.btn-booking {
  border: 2px solid var(--color-blue);
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.btn-booking:hover,
.btn-booking:focus,
.btn-booking:active {
  background: var(--color-blue);
  color: var(--color-bg);
}
.btn-menu {
  width: var(--size-xl);
  height: var(--size-xl);
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-blue);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}
.btn-menu:active {
  background: var(--color-bg-accent);
}

@media screen and (min-width: 990px) {
  .btn-menu {
    display: none;
  }
  .navbar-link {
    display: inline;
  }
  .topbar-item {
    display: inline;
  }
}
</style>
