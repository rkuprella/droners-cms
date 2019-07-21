<template>
  <div class="video hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Was euch im DRONERS erwartet" level="2" />
        <div class="hero-content center-v">
          <iframe
            class="video-youtube"
            src="https://www.youtube.com/embed/Reqo9h7RZDQ?rel=0?version=3&autoplay=0&controls=1&loop=1​"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p
          class="selection-outro center-h"
        >Drohnenfliegen, Virtual Reality und ein aussergewöhnliches Programm.</p>
      </section>
    </div>
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
.video-youtube {
  width: 100%;
  height: 40vw;
  max-height: 450px;
  border: 2px solid var(--color-red);
  margin-bottom: var(--size-lg);
}
</style>
