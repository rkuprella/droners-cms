<template>
  <nav class="mobile-nav">
    <div class="mobile-wrapper">
      <g-link class="navbar-item has-text-centered" to="/" style="margin-bottom:30px">
        <g-image class="brand-logo" src="~/assets/img/logo.png" :alt="$static.metaData.siteName"/>
      </g-link>
      <g-link
        class="navbar-item has-text-centered"
        :to="'/' + page.node.slug"
        v-for="page in $static.allContentPage.edges"
        :key="page.node.slug"
      >{{ page.node.title }}</g-link>
      <g-link class="navbar-item has-text-centered" to="/shop">Shop</g-link>
      <div class="navbar-item">
        <div class="buttons is-centered">
          <a class="button is-primary is-rounded is-outlined is-uppercase">
            <strong>Buchen</strong>
          </a>
        </div>
      </div>
      <div class="has-text-centered" style="margin-top:30px;">
        <a href="#">FAQ</a>
        <font-awesome :icon="['fa', 'circle']" style="width:6px; margin:0 10px"/>
        <a href="#">Merch</a>
      </div>
      <ul class="social-wrapper">
        <li v-for="social in $static.socialMedia.edges" :key="social.id" class="social-list-item">
          <a class="button is-info btn-icon" :href="social.node.link" :title="social.node.title">
            <font-awesome :icon="['fab', social.node.icon]" size="lg"/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<static-query>
query {
  metaData {
    siteName
  }

  allContentPage {
    edges {
      node {
        title
        slug
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
.mobile-nav {
  background: #241c24;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
.mobile-wrapper {
}
.social-wrapper {
  width: 200px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.social-list-item {
}
</style>
