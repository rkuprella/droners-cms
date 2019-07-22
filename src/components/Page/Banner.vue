<template>
  <div class="banner">
    <div class="container banner-wrapper">
      <span class="banner-title" v-html="title" />
      <Btn title="Hello" to="/" dark />
    </div>
  </div>
</template>

<script>
import Btn from "~/components/UI/Btn";

export default {
  components: {
    Btn
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.banner {
  width: 100%;
  padding: var(--size-xl) 0;
  background: var(--color-light);
  position: relative;
  z-index: 3;
}
.banner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-title {
  color: var(--color-bg);
  font-size: 1.25em;
  margin-right: var(--size-md);
}
</style>
