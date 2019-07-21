<template>
  <div class="page-header">
    <div class="container center">
      <h1 v-html="title" class="page-header-title" />
    </div>
    <div class="page-header-wrapper">
      <div class="container">
        <p v-html="content" class="page-header-content" />
      </div>
    </div>
    <div class="page-header-image-wrapper" v-if="image">
      <g-image class="page-header-image" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  }
};
</script>

<style>
.page-header {
  padding: 160px 0 calc(var(--size-gap) / 2);
  position: relative;
}
.page-header-title {
  font-family: "Quicksand", sans-serif;
  font-size: 2.3em;
  color: var(--color-green);
  font-weight: 700;
  margin-bottom: var(--size-md);
  text-transform: uppercase;
}
.page-header-wrapper {
  min-height: 50vw;
  position: relative;
  z-index: 3;
}
.page-header-image-wrapper {
  position: absolute;
  z-index: 1;
  top: 260px;
  left: 0;
  width: 100%;
  height: 50vw;
  max-height: 660px;
}
.page-header-image-wrapper::before,
.page-header-image-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vw;
  max-height: 240px;
  background: url("../../assets/img/gradient-top.png") 50% top repeat-x /
    contain;
  z-index: 2;
}
.page-header-image-wrapper::after {
  top: auto;
  bottom: 0;
  background: url("../../assets/img/gradient-bottom.png") 50% bottom repeat-x /
    contain;
}
.page-header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  z-index: 1;
  position: relative;
  opacity: 0.25;
}
.page-header-content {
  padding: var(--size-xl) 0;
}
.page-header-content h2,
.page-header-content h3,
.page-header-content h4 {
  color: var(--color-light);
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: var(--size-lg);
  text-transform: uppercase;
}
.page-header-content p {
}
.page-header-content img {
  max-width: 100%;
}
.page-header-content ul {
  list-style: none;
}

@media screen and (min-width: 990px) {
  .page-header {
    padding: 180px 0 var(--size-gap);
  }
  .page-header-title {
    font-size: 3.5em;
    margin-bottom: var(--size-xl);
  }
  .page-header-content {
    padding: var(--size-xl) 30%;
  }
}
</style>
