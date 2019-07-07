<template>
  <nav class="social-media">
    <ul>
      <li v-for="social in $static.socialMedia.edges" :key="social.id">
        <a :href="social.node.link" :title="social.node.title">
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
</style>
