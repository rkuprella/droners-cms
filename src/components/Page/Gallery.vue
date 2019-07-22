<template>
  <div class="page-gallery">
    <g-image v-for="(image, i) in images" :key="i" :src="image.imageUrl" class="page-gallery-image"></g-image>
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
.page-gallery {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40vh 40vh;
  width: 100%;
  background: var(--color-bg);
}
.page-gallery-image {
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  transition: opacity 0.3s ease-out;
}
.page-gallery-image:hover {
  opacity: 0.5;
}
</style>
