<template>
  <nav class="social-media">
    <ul>
      <li class="social-item" v-for="social in $static.socialMedia.edges" :key="social.id">
        <a class="social-link center" :href="social.node.link" :title="social.node.title">
          <font-awesome :icon="['fab', social.node.icon]" size="lg" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<static-query>
query SocialMedia {
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

<script>
export default {};
</script>


<style>
.social-media {
  display: none;
  position: fixed;
  right: var(--size-lg);
  top: 50%;
  transform: translateY(-50%);
}
.social-item {
  list-style: none;
}
.social-item:not(:last-of-type) {
  margin-bottom: var(--size-md);
}
.social-link {
  color: var(--color-bg);
  width: 40px;
  height: 40px;
  background: var(--color-light);
  border-radius: 50%;
}
.social-link:hover,
.social-link:focus,
.social-link:active {
  color: var(--color-blue);
  background: transparent;
  border: 2px solid var(--color-blue);
}

@media screen and (min-width: 990px) {
  .social-media {
    display: block;
  }
}
</style>
