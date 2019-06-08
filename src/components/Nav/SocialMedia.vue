<template>
  <nav class="social-media">
    <ul>
      <li v-for="social in $static.socialMedia.edges" :key="social.id" class="social-list-item">
        <a class="button is-info btn-icon" :href="social.node.link" :title="social.node.title">
          <font-awesome :icon="['fab', social.node.icon]" size="lg"/>
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
export default {
  data() {
    return {
      socialLinks: [
        { link: "https://www.youtube.com/DRONERSde/", icon: "youtube" },
        { link: "https://www.twitter.com/DRONERSde/", icon: "twitter" },
        { link: "https://www.instagram.com/DRONERSde/", icon: "instagram" },
        { link: "https://www.facebook.com/DRONERSde/", icon: "facebook-f" }
      ]
    };
  }
};
</script>


<style>
.social-media {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.social-list-item {
  margin-bottom: 0.5em;
}
.btn-icon {
  height: 44px !important;
  width: 44px !important;
  border-radius: 50% !important;
}
.social-list-item:last-child {
  margin-bottom: 0;
}
</style>
