<template>
  <div class="imagination">
    <section class="hero-section hero-imagination">
      <div class="hero-content center-v">
        <div class="hero-wrapper center">
          <div class="imagination-wrapper"></div>
          <g-image class="imagination-image" src="~/assets/img/imagination-1.jpg" />
        </div>
        <div class="hero-wrapper center">
          <div class="imagination-wrapper imagination-wrapper-right"></div>
          <g-image class="imagination-image" src="~/assets/img/imagination-2.jpg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Title from "~/components/UI/Title";

export default {
  components: {
    Title
  }
};
</script>

<style>
.imagination-image {
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}
.imagination-wrapper {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  background: rgba(43, 34, 43, 0.6);
  width: 50%;
  height: 200px;
}
.imagination-wrapper-right {
  right: auto;
  left: 10%;
}

@media screen and (min-width: 990px) {
  .hero-imagination {
    margin: 0 88px;
    width: auto;
  }
  .imagination-image {
    min-height: 400px;
    max-height: 70vh;
  }
}
</style>
