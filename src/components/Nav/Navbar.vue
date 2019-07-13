<template>
  <div class="nav" :class="{shop : shop}">
    <nav class="topbar" v-if="topbar">
      <div class="nav-wrapper container center-v">
        <div>Open now</div>
        <div class="center-v">
          <a href="tel:+49019292938923" class="call-now">
            <font-awesome :icon="['fa', 'phone']" size="md" class="call-now-icon" />
            <div class="call-now-number">0123 456789</div>
          </a>
          <ul class="topbar-item-wrapper">
            <li class="topbar-item" v-for="page in $static.topMenu.edges" :key="page.node.slug">
              <g-link class="topbar-link" :to="'/' + page.node.slug">{{ page.node.title }}</g-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar">
      <div class="nav-wrapper container center-v">
        <g-link to="/">
          <g-image class="brand-logo" src="~/assets/img/logo-dark.png" v-if="shop" />
          <g-image class="brand-logo" src="~/assets/img/logo.png" v-else />
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
          <button @click="mobile = !mobile" class="btn-menu" :class="{ 'shop-mobile' : shop}">
            <font-awesome :icon="['fa', 'bars']" size="lg" />
          </button>
        </div>
      </div>
    </nav>
    <MobileNav v-if="mobile" @close="mobile = false" />
  </div>
</template>

<static-query>
query  {

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
    },
    shop: {
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
  font-size: 0.8em;
}
.topbar-item-wrapper {
  display: none;
  align-items: center;
  margin-left: var(--size-sm);
}
.topbar-item {
  list-style: none;
  color: var(--color-bg);
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
.call-now {
  text-decoration: none;
  color: var(--color-blue);
  background: var(--color-bg);
  border-radius: 30px;
  padding: var(--size-sm) var(--size-md);
}
.call-now-icon {
  transform: rotate(100deg);
}
.call-now-number {
  margin-left: var(--size-sm);
  display: none;
}

/* navbar */
.navbar {
  height: 80px;
}
.nav-wrapper {
  justify-content: space-between;
}
.navbar-link {
  padding: 10px 0;
  margin: 0 var(--size-md);
  color: var(--color-light);
  text-decoration: none;
  display: none;
}
.navbar-link:not(:last-of-type) {
  margin-right: var(--size-sm);
}
.nav.shop .navbar-link {
  color: var(--color-bg);
}
.navbar-link.active {
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-blue);
}
.btn-booking {
  border: 2px solid var(--color-blue);
  padding: var(--size-sm) var(--size-md);
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-right: 0;
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
.nav.shop .btn-menu:active {
  background: var(--color-white-accent);
}
.nav.shop .btn-menu {
  margin-right: var(--size-xl);
}

@media screen and (min-width: 990px) {
  .btn-menu {
    display: none;
  }
  .navbar-link {
    display: inline;
  }
  .topbar-item-wrapper {
    display: flex;
  }
  .call-now-number {
    display: inline;
  }
}
</style>
