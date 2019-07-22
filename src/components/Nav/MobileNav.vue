<template>
  <div class="mobile-nav">
    <nav class="mobile-wrapper center-v">
      <Logo class="mobile-brand" />
      <g-link
        class="mobile-link"
        v-for="page in $static.mainMenu.edges"
        :key="page.node.slug"
        :to="'/' + page.node.slug"
      >{{ page.node.title }}</g-link>
      <g-link class="mobile-link" to="/shop">Shop</g-link>
      <g-link class="mobile-link btn-booking" to="/buchen">Buchen</g-link>
      <SocialMedia mobile />
    </nav>
    <div class="mobile-drawer" @click="$emit('close')"></div>
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
}
</static-query>

<script>
import Logo from "~/components/UI/Logo";
import SocialMedia from "~/components/Nav/SocialMedia";

export default {
  components: {
    Logo,
    SocialMedia
  }
};
</script>

<style>
.mobile-nav {
  height: 100%;
}
.mobile-drawer {
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mobile-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  flex-direction: column;
  height: 100%;
  width: 80%;
  max-width: 400px;
  min-width: 240px;
  background: var(--color-bg);
  opacity: 0.9;
}
.mobile-brand {
  margin: var(--size-xl) 0 var(--size-lg);
}
.mobile-link {
  padding: var(--size-md);
  color: var(--color-light);
  text-decoration: none;
  width: 200px;
}
.mobile-link:not(:last-of-type) {
  margin-bottom: var(--size-sm);
}
.mobile-link:active {
  background: var(--color-bg-accent);
}
.mobile-link.active {
  padding-left: calc(var(--size-md) - 2px);
  border-left: 2px solid var(--color-blue);
}
.btn-booking:active {
  background: var(--color-blue);
  color: var(--color-bg);
}

@media screen and (min-width: 990px) {
  .mobile-nav {
    display: none;
  }
}
</style>
