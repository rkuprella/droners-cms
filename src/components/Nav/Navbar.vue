<template>
  <div class="nav" :class="{shop : shop}">
    <nav class="topbar" v-if="topbar">
      <div class="nav-wrapper container center-v">
        <div class="openings">
          <span
            class="openings-drawer"
            @mouseover="showOpenings = true"
            @mouseleave="showOpenings = false"
          >
            <font-awesome :icon="['fa', 'clock']" size="md" class="openings-icon" />
            <span>FR: 15-22 Uhr</span>
            <font-awesome
              :icon="['fa', 'chevron-up']"
              size="md"
              class="openings-chevron"
              :class="{active : showOpenings}"
            />
          </span>
          <span class="open-now">Jetzt geöffnet</span>
        </div>
        <div class="openings-details" v-if="showOpenings">
          <ul>
            <li class="openings-details-item openings-details-title">Unsere Öffnungszeiten</li>
            <li class="openings-details-item">Mo-Mi: geschlossen</li>
            <li class="openings-details-item">Do: 16-22 Uhr</li>
            <li class="openings-details-item active">Fr: 15-22 Uhr</li>
            <li class="openings-details-item">Sa: 11-22 Uhr</li>
            <li class="openings-details-item">So &amp; Feiertags: 11-21 Uhr</li>
          </ul>
        </div>
        <div class="center-v">
          <a href="tel:+49019292938923" class="call-now">
            <font-awesome :icon="['fa', 'phone']" size="md" class="call-now-icon" />
            <div class="call-now-number">+49 (0123) 456789</div>
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
        <Logo :shop="shop" />
        <ul class="center-v">
          <li class="navbar-item" v-for="page in menu" :key="page.node.slug">
            <g-link class="navbar-link" :to="'/' + page.node.slug">{{ page.node.title }}</g-link>
            <font-awesome
              :icon="['fa', 'chevron-up']"
              size="md"
              class="openings-chevron submenu-chevron"
            />
            <ul class="submenu">
              <li
                class="submenu-item"
                v-for="subpage in subMenu(page.node.title)"
                :key="subpage.node.slug"
              >
                <g-link class="submenu-link" :to="'/' + subpage.node.slug">{{ subpage.node.title }}</g-link>
              </li>
            </ul>
          </li>

          <li class="navbar-item">
            <g-link class="navbar-link" to="/shop">Shop</g-link>
          </li>
          <li class="navbar-item navbar-booking-item">
            <g-link class="navbar-link btn-booking" to="/buchen">Buchen</g-link>
          </li>
          <li class="navbar-menu-item">
            <button @click="mobile = !mobile" class="btn-menu" :class="{ 'shop-mobile' : shop}">
              <font-awesome :icon="['fa', 'bars']" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <MobileNav v-if="mobile" @close="mobile = false" />
  </div>
</template>

<static-query>
query {

  mainMenu: allContentPage(sortBy: "position", order: DESC, filter: { menu: { eq: "main" }}) {
    edges {
      node {
        title
        slug
        position
        subpage
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
import Logo from "~/components/UI/Logo";

export default {
  components: {
    MobileNav,
    Logo
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
      mobile: false,
      showOpenings: false
    };
  },
  computed: {
    menu() {
      let newMenu = this.$static.mainMenu.edges.filter(function(page) {
        return !page.node.subpage;
      });
      return newMenu;
    }
  },
  methods: {
    subMenu(title) {
      let subMenu = this.$static.mainMenu.edges.filter(function(page) {
        return page.node.subpage == title;
      });
      return subMenu;
    },
    hasSubMenu(title) {
      let findMenu = this.$static.mainMenu.edges.filter(function(page) {
        return page.node.subpage == title;
      });
      if (findMenu.length > 0) {
        return true;
      } else {
        return false;
      }
    }
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
  color: var(--color-blue-dark);
}
.topbar-link {
  padding: var(--size-xs) var(--size-sm);
  text-decoration: none;
  color: var(--color-blue-dark);
}
.call-now {
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  color: var(--color-blue-dark);
  border-radius: 30px;
  padding: var(--size-sm) var(--size-md);
}
.call-now:active {
  background: rgba(0, 0, 0, 0.1);
}
.call-now-number {
  margin-left: var(--size-sm);
  display: none;
}
.call-now-icon {
  font-size: 1.2rem;
}
.openings {
  font-weight: 700;
  color: var(--color-blue-dark);
}
.openings-drawer {
  cursor: pointer;
  padding: var(--size-md) 0;
}
.open-now {
  padding: var(--size-sm) var(--size-md);
  font-size: 0.75em;
  background: var(--color-bg);
  margin-left: var(--size-md);
  border-radius: 30px;
  color: var(--color-green);
  display: none;
}
.openings-icon {
  margin-right: var(--size-sm);
  font-size: 1.2rem;
}
.openings-chevron {
  margin-left: var(--size-md);
  transform: rotate(180deg);
  transition: transform 0.3s ease-out;
  font-size: 1.2rem;
}
.openings-chevron.active {
  transform: rotate(360deg);
}
.openings-details {
  padding: var(--size-lg);
  background: var(--color-bg-dark);
  border: 2px solid var(--color-blue);
  border-top: none;
  color: var(--color-blue);
  position: absolute;
  top: var(--size-xl);
  left: 0;
  z-index: 9;
}
.openings-details-item {
  list-style: none;
  padding: 0 var(--size-sm);
}
.openings-details-item.active {
  font-weight: 700;
  background: var(--color-blue);
  color: var(--color-bg);
}
.openings-details-title {
  font-weight: 700;
  font-size: 1.2em;
  color: var(--color-light);
  margin-bottom: var(--size-md);
  padding: 0;
}

/* navbar */
.navbar {
  height: 80px;
}
.nav-wrapper {
  justify-content: space-between;
}
.navbar-item {
  padding: 10px 0;
  display: none;
  position: relative;
}
.navbar-item:not(.navbar-booking-item) {
  margin-right: var(--size-md);
}
.submenu-chevron {
  font-size: 0.65em;
  margin-bottom: 1px;
  margin-left: var(--size-sm);
  color: var(--color-blue);
}
.nav.shop .navbar-link {
  color: var(--color-bg);
}
.navbar-link:not(.btn-booking).active {
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-blue);
}
.navbar-link {
  color: var(--color-light);
  text-decoration: none;
}
.navbar-menu-item {
  list-style: none;
}
.submenu {
  z-index: 9;
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  padding: var(--size-md) var(--size-lg);
  background: var(--color-bg-dark);
  border: 2px solid var(--color-blue);
}
.navbar-item:hover .submenu {
  display: block;
}
.submenu-item {
  list-style: none;
  margin: var(--size-sm) 0;
}
.submenu-link {
  color: var(--color-blue);
  text-decoration: none;
}
.submenu-link:hover,
.submenu-link:focus {
  text-decoration: underline;
}
.btn-booking {
  border: 2px solid var(--color-blue);
  padding: var(--size-sm) var(--size-md);
  border-radius: 30px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-right: 0;
}
.btn-booking:hover,
.btn-booking:focus,
.btn-booking:active,
.btn-booking.active {
  background: var(--color-blue);
  color: var(--color-bg);
}
.btn-menu {
  width: var(--size-xl);
  height: var(--size-xl);
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-light);
  cursor: pointer;
  z-index: 11;
  border-radius: 50%;
}
.nav.shop .btn-menu {
  color: var(--color-bg);
}
.btn-menu:active {
  background: rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 370px) {
  .open-now {
    display: inline;
  }
}

@media screen and (min-width: 990px) {
  .navbar-menu-item {
    display: none;
  }
  .navbar {
    height: 120px;
  }
  .navbar-item {
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
