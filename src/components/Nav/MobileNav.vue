<template>
  <div class="mobile-nav">
    <nav class="mobile-wrapper center-v">
      <g-link class="mobile-brand" to="/">
        <g-image class="brand-icon" src="~/assets/img/droners-icon.svg" alt="DRONERS Swoosh Icon" />
        <g-image
          class="brand-logo"
          src="~/assets/img/droners-text.svg"
          v-if="shop"
          alt="DRONERS Logo"
        />
        <g-image
          class="brand-logo"
          src="~/assets/img/droners-text-light.svg"
          width="185"
          alt="DRONERS Logo"
          color="white"
          v-else
        />
      </g-link>
      <g-link
        class="mobile-link"
        v-for="page in $static.mainMenu.edges"
        :key="page.node.slug"
        :to="'/' + page.node.slug"
      >{{ page.node.title }}</g-link>
      <g-link class="mobile-link" to="/shop">Shop</g-link>
      <g-link class="mobile-link btn-booking" to="/booking">Buchen</g-link>
      <ul class="social-wrapper">
        <li
          class="social-item mobile-social-item"
          v-for="social in $static.socialMedia.edges"
          :key="social.id"
        >
          <a class="social-link center" :href="social.node.link" :title="social.node.title">
            <font-awesome :icon="['fab', social.node.icon]" size="lg" />
          </a>
        </li>
      </ul>
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
  z-index: 10;
  flex-direction: column;
  height: 100%;
  width: 80%;
  max-width: 400px;
  min-width: 240px;
  background: var(--color-bg);
  opacity: 0.92;
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
.social-wrapper {
  margin-top: var(--size-xl);
  display: flex;
  flex-direction: row;
}
.mobile-social-item {
  margin: 0 var(--size-xs);
}

@media screen and (min-width: 990px) {
  .mobile-nav {
    display: none;
  }
}
</style>
