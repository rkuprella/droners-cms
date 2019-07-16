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
            <Tabs :tabs="tabs" />
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
import Tabs from "~/components/UI/Tabs";

export default {
  components: {
    Title,
    Btn,
    GMap,
    Tabs
  },
  data() {
    return {
      tabs: [
        {
          title: "Mit dem Auto",
          icon: "car",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt quisquam totam qui optio."
        },
        {
          title: "Mit der Bahn",
          icon: "subway",
          content:
            "Dolor sit amet consectetur adipisicing elit. Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt quisquam totam qui optio."
        },
        {
          title: "Mit dem Volocopter",
          icon: "helicopter",
          content:
            "Ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt quisquam totam qui optio. Quasi, quisquam totam qui ipsa in necessitatibus minus deserunt quisquam totam qui optio."
        }
      ]
    };
  }
};
</script>

<style>
.map {
}
.map-content {
  padding: var(--size-xl) 0;
  align-items: flex-start;
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
  align-items: center;
  flex-direction: column;
}
.map-links a {
  color: var(--color-light);
  text-decoration: none;
  padding: var(--size-sm);
  margin: var(--size-sm) 0;
}
.map-links a:hover,
.map-links a:focus,
.map-links a:active {
  text-decoration: underline;
}
.map-icon {
  margin-right: var(--size-sm);
}
.map-divider {
  margin: 0 var(--size-sm);
  display: none;
}
.map-booking {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: var(--size-sm);
}

@media screen and (min-width: 990px) {
  .map-divider {
    display: block;
  }
  .map-links {
    align-items: center;
    flex-direction: row;
    margin-top: 0;
  }
  .map-links a {
    margin: 0;
  }
  .map-booking {
    margin-top: var(--size-lg);
  }
}
</style>