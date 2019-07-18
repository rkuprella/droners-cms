<template>
  <g-link to="/" class="brand-link" :class="'size-' + size">
    <g-image class="brand-icon" src="~/assets/img/droners-icon.svg" alt="DRONERS Swoosh Icon" />
    <g-image class="brand-logo" src="~/assets/img/droners-text.svg" alt="DRONERS Logo" v-if="shop" />
    <g-image
      class="brand-logo"
      src="~/assets/img/droners-text-light.svg"
      width="185"
      alt="DRONERS Logo"
      color="white"
      v-else
    />
  </g-link>
</template>

<script>
export default {
  props: {
    shop: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    }
  },
  data() {
    return {
      showDownload: false
    };
  }
};
</script>

<style>
.brand-logo {
  margin-left: 10px;
  width: 132px;
}
.brand-icon {
  width: 40px;
}
.brand-link.size-sm {
  transform: scale(0.7);
  transform-origin: left;
}

@media screen and (min-width: 990px) {
  .brand-logo {
    margin-left: 15px;
    width: 180px;
  }
  .brand-icon {
    width: 52px;
  }
}
</style>
