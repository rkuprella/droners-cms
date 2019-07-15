<template>
  <div class="map hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Kontakt &amp; Anfahrt" level="2" />
        <div class="hero-content center-v">
          <GMap />
        </div>
        <div class="hero-content center-v map-content">
          <div class="hero-wrapper">
            <div class="map-title">Hochstr. 10, 59425 Unna</div>
            <div class="map-links">
              <a href="tel:+490123456789">
                <font-awesome :icon="['fa', 'phone']" size="sm" class="map-icon" />+49 (0123) 456789
              </a>
              <span class="map-divider">|</span>
              <a href="mailto:mail@droners.de">
                <font-awesome :icon="['fa', 'envelope']" size="sm" class="map-icon" />mail@droners.de
              </a>
            </div>
            <div class="map-booking">
              <Btn title="Jetzt buchen" to="/" inverted color="blue" />
            </div>
          </div>
          <div class="hero-wrapper">
            <ul class="map-tile center-v">
              <li
                class="map-tile-item"
                @click="currentTile = 1"
                :class="{ active : currentTile == 1}"
              >
                <font-awesome :icon="['fa', 'car']" size="3x" class="map-tile-icon" />
                <span class="map-tile-text" v-if="currentTile == 1">Mit dem Auto</span>
              </li>
              <li
                class="map-tile-item"
                @click="currentTile = 2"
                :class="{ active : currentTile == 2}"
              >
                <font-awesome :icon="['fa', 'subway']" size="3x" class="map-tile-icon" />
                <span class="map-tile-text" v-if="currentTile == 2">Mit öffentlichen Verkehrsmitteln</span>
              </li>
            </ul>
            <div class="map-tile-content" v-if="currentTile == 1">
              <p>Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt optio, asperiores delectus voluptatem nisi id temporibus quod amet perferendis.</p>
            </div>
            <div class="map-tile-content" v-if="currentTile == 2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt quisquam totam qui optio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Title from "~/components/UI/Title";
import Btn from "~/components/UI/Btn";
import GMap from "~/components/UI/GMap";

export default {
  components: {
    Title,
    Btn,
    GMap
  },
  data() {
    return {
      currentTile: 1
    };
  }
};
</script>

<style>
.map {
  background: var(--color-bg-dark);
}
.map-content {
  padding: var(--size-xl) 0;
}
.map-title {
  color: var(--color-light);
  font-size: 2rem;
  text-align: center;
}
.map-links {
  color: var(--color-light);
  display: flex;
  justify-content: center;
  margin-top: var(--size-sm);
}
.map-links a {
  color: var(--color-light);
  text-decoration: none;
}
.map-icon {
  margin-right: var(--size-sm);
}
.map-divider {
  margin: 0 var(--size-sm);
}
.map-booking {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: var(--size-md);
}
.map-tile {
  margin-top: var(--size-xl);
  list-style: none;
  color: var(--color-light);
}
.map-tile-item {
  cursor: pointer;
  border-bottom: 2px solid var(--color-light);
  padding: var(--size-sm) var(--size-md) 0;
  display: flex;
  align-items: center;
}
.map-tile-item.active {
  border: 2px solid var(--color-light);
  border-bottom: none;
}
.map-tile-icon {
  opacity: 0.4;
}
.map-tile-item.active .map-tile-icon {
  opacity: 1;
}
.map-tile-text {
  margin-left: var(--size-md);
  font-size: 700;
  font-style: italic;
}
.map-tile-content {
  margin-top: var(--size-lg);
  color: var(--color-light);
}

@media screen and (min-width: 990px) {
  .map-tile {
    margin: 0;
  }
}
</style>