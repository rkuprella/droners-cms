<template>
  <div class="page-gallery">
    <g-image v-for="(image, i) in images" :key="i"></g-image>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
