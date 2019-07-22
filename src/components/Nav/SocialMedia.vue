<template>
  <nav class="social-media" :class="{mobile:mobile}">
    <ul>
      <li class="social-item" v-for="social in socialMedia" :key="social.id">
        <a class="social-link center" :href="social.link" :title="social.title">
          <font-awesome :icon="['fab', social.icon]" size="lg" class="social-icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<static-query>
query {
  socialMedia: settings (id:"socialMedia") {
   	facebook
    twitter
    youtube
    instagram
  }
}
</static-query>

<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      socialMedia: []
    };
  },
  created() {
    this.socialMedia.push(
      {
        id: 1,
        title: "Facebook",
        link: this.$static.socialMedia.facebook,
        icon: "facebook-f"
      },
      {
        id: 2,
        title: "Instagram",
        link: this.$static.socialMedia.instagram,
        icon: "instagram"
      },
      {
        id: 3,
        title: "Twitter",
        link: this.$static.socialMedia.twitter,
        icon: "twitter"
      },
      {
        id: 4,
        title: "Youtube",
        link: this.$static.socialMedia.youtube,
        icon: "youtube"
      }
    );
  }
};
</script>


<style>
.social-media {
  display: none;
  position: fixed;
  right: var(--size-lg);
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
}
.social-media.mobile {
  margin-top: var(--size-lg);
  position: static;
  transform: none;
  display: block;
}
.social-media.mobile ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.social-item {
  list-style: none;
}
.social-media.mobile .social-item {
  margin: 0 var(--size-xs);
}
.social-media:not(.mobile) .social-item:not(:last-of-type) {
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
.social-icon {
  font-size: 1.2rem;
}
@media screen and (min-width: 990px) {
  .social-media:not(.mobile) {
    display: block;
  }
}
</style>
