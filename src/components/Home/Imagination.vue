<template>
  <div class="imagination">
    <section class="hero-section hero-imagination">
      <div class="hero-content imagination-hero" :class="{active:slide}">
        <div class="hero-wrapper imagination-hero-wrapper">
          <div class="imagination-wrapper">
            <h4 class="imagination-title">VR Simulatoren</h4>
            <p
              class="imagination-content"
            >Non at, iure laboriosam quibusdam inventore sint impedit, non?</p>
          </div>
          <g-image class="imagination-image" src="~/assets/img/imagination-1.jpg" />
        </div>
        <div class="hero-wrapper imagination-hero-wrapper">
          <div class="imagination-wrapper imagination-wrapper-right">
            <h4 class="imagination-title">Virtual Reality 2.0</h4>
            <p class="imagination-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <g-image class="imagination-image" src="~/assets/img/imagination-2.jpg" />
        </div>
      </div>
    </section>

    <div class="imagination-swiper" @click="slide = false" :class="{active:!slide}">
      <span class="imagination-swiper-info">VR Simulatoren</span>
      <font-awesome :icon="['fa', 'chevron-up']" size="lg" class="imagination-chevron" />
    </div>
    <div
      class="imagination-swiper imagination-swiper-right"
      @click="slide = true"
      :class="{active:slide}"
    >
      <font-awesome
        :icon="['fa', 'chevron-up']"
        size="lg"
        class="imagination-chevron imagination-chevron-right"
      />
      <span class="imagination-swiper-info imagination-swiper-info-right">Virtual Reality 2.0</span>
    </div>
  </div>
</template>

<script>
import Title from "~/components/UI/Title";

export default {
  components: {
    Title
  },
  data() {
    return {
      slide: false
    };
  }
};
</script>

<style>
.imagination {
  overflow: hidden;
  position: relative;
  padding: calc(var(--size-gap) / 2) 0;
}
.imagination-swiper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(var(--size-xl) + var(--size-lg));
  background: var(--color-bg);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-red);
  transition: transform 0.3s ease-in-out;
}
.imagination-swiper-right {
  right: 0;
  left: auto;
  color: var(--color-green);
}
.imagination-swiper.active {
  transform: translateX(-100%);
}
.imagination-swiper-right.active {
  transform: translateX(100%);
}
.imagination-swiper-info {
  transform: translateX(-10px) rotate(-90deg);
  white-space: nowrap;
  position: absolute;
  font-size: 1.6em;
  font-weight: 300;
  text-transform: uppercase;
}
.imagination-swiper-info-right {
  transform: translateX(10px) rotate(90deg);
}
.imagination-chevron {
  transform: translateX(20px) rotate(90deg);
}
.imagination-chevron-right {
  transform: translateX(-20px) rotate(-90deg);
}
.imagination-hero {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 200%;
  transition: transform 0.3s ease-in-out;
}
.imagination-hero.active {
  transform: translateX(-50%);
}
.imagination-hero-wrapper {
  width: 100%;
}
.imagination-image {
  width: 100%;
  height: 100%;
  max-height: 340px;
  object-fit: cover;
  vertical-align: middle;
}
.imagination-wrapper {
  position: absolute;
  bottom: var(--size-lg);
  right: calc(var(--size-xl) * 2);
  left: var(--size-lg);
  background: var(--color-bg);
  min-height: 160px;
  max-height: calc(100% - var(--size-xl));
  padding: var(--size-lg);
  color: var(--color-red);
}
.imagination-wrapper-right {
  color: var(--color-green);
  left: calc(var(--size-xl) * 2);
  right: var(--size-lg);
}
.imagination-title {
  font-size: 1.6em;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  margin-bottom: var(--size-md);
}
.imagination-content {
  font-style: italic;
}

@media screen and (min-width: 990px) {
  .imagination {
    padding: var(--size-gap) 0;
  }
  .hero-imagination {
    margin: 0 88px;
    width: auto;
  }
  .imagination-image {
    min-height: 400px;
    max-height: 60vh;
  }
  .imagination-swiper {
    display: none;
  }
  .imagination-hero {
    width: 100%;
    transition: none;
  }
  .imagination-hero.active {
    transform: none;
  }
  .imagination-wrapper {
    left: var(--size-xl);
    right: var(--size-xl);
    bottom: var(--size-xl);
  }
  .imagination-title {
    font-size: 2.3em;
  }
}
</style>
