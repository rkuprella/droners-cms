<template>
  <div class="outro hero">
    <div class="container center-v outro-wrapper">
      <section class="hero-section">
        <Title headline="Presse und Partner" level="2" />
        <div class="hero-content center">
          <div class="lasermaxx-wrapper">
            <a href="https://www.lasermaxx.info/" class="lasermaxx">
              <span class="lasermaxx-title">Erlebt Lasertag am Standort</span>
              <g-image src="~/assets/img/lasermaxx_unna_logo.png" class="lasermaxx-logo" />
              <font-awesome
                :icon="['fa', 'external-link-square-alt']"
                size="2x"
                class="lasermaxx-icon"
              />
            </a>
            <div class="laser-beam"></div>
            <div class="laser-beam laser-red"></div>
            <div class="laser-beam laser-blue"></div>
            <div class="laser-beam laser-green"></div>
          </div>
          <g-image src="~/assets/img/press.png" class="press-image" />
        </div>
      </section>
    </div>
    <div class="outro-video-wrapper">
      <video class="outro-video" autoplay playsinline muted loop preload>
        <source src="../../assets/video/Grid.mp4" />
      </video>
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
.lasermaxx-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.lasermaxx {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--color-blue);
  padding: var(--size-md);
  color: var(--color-blue);
  text-decoration: none;
}
.lasermaxx-title {
  margin-left: var(--size-md);
}
.lasermaxx-logo {
  width: 30vw;
  max-width: 200px;
  margin: 0 var(--size-md);
}
.lasermaxx-icon {
  transition: transform 0.15s ease-out;
  margin-right: var(--size-md);
}
.lasermaxx:hover .lasermaxx-icon {
  transform: scale(1.15);
}

/* laser */
.laser-beam {
  position: absolute;
  left: 50%;
  bottom: -20px;
  width: 2px;
  height: 1000%;
  background: var(--color-blue);
  box-shadow: 0px 0px 12px 0px var(--color-blue);
  transform-origin: 0 100%;
  animation: laser 7s infinite;
  opacity: 0;
  transition: opacity 0.4s 0.2s ease-in-out;
}
.lasermaxx-wrapper:hover .laser-beam {
  opacity: 1;
}
.laser-beam.laser-red {
  animation: laser 6.5s infinite;
  background: var(--color-red-accent);
  box-shadow: 0px 0px 15px 0px var(--color-red-accent);
}
.laser-beam.laser-blue {
  animation: laser 7.3s infinite;
  background: var(--color-blue-accent);
  box-shadow: 0px 0px 15px 0px var(--color-blue-accent);
  left: 80%;
}
.laser-beam.laser-green {
  animation: laser 7.7s infinite;
  background: var(--color-green-accent);
  box-shadow: 0px 0px 15px 0px var(--color-green-accent);
  left: 30%;
}

.outro-video-wrapper {
  display: none;
}
.press-image {
  margin-top: var(--size-xl);
  max-width: 100%;
}

@keyframes laser {
  0% {
    transform: rotate(-75deg);
  }
  50% {
    transform: rotate(75deg);
  }
  100% {
    transform: rotate(-75deg);
  }
}

@media screen and (min-width: 990px) {
  .outro {
    position: relative;
    z-index: 2;
    padding-bottom: 0;
  }
  .outro-wrapper {
    position: absolute;
    left: 50%;
    height: auto;
    top: 0;
    transform: translateX(-50%);
    z-index: 9;
  }
  .outro-video-wrapper {
    width: calc(100% - 176px);
    margin: 0 88px;
    z-index: 2;
    display: block;
  }
  .outro-video {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    height: 30vw;
    max-height: 450px;
    vertical-align: middle;
  }
}
</style>
