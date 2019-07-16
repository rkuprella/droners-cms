<template>
  <g-link to="/">
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
    }
  }
};
</script>

<style>
</style>
