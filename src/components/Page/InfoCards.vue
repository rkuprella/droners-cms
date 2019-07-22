<template>
  <div class="info-cards">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Freizeitgestaltung neu erleben" />
        <div class="card-wrapper">
          <Card
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :color="card.color"
            :to="card.to"
            :content="card.content"
            :rows="rows"
          />
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
import Card from "~/components/UI/Card";

export default {
  components: {
    Title,
    Card
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selections: [
        {
          title: "Parcours & Racing mit Micro-Coptern",
          content:
            "Drohnenfliegen in Cockpit-Perspektive neu erleben. Meistere unseren Parcours.",
          icon: "gamepad",
          to: "/",
          color: "red",
          inverted: true
        },
        {
          title: "Im Team gemeinsam abheben",
          content:
            "Mit 90 Sachen abheben. Erlebe Drohnenfliegen auf ganz neue Art und Weise.",
          icon: "grin-tears",
          to: "/",
          color: "green",
          inverted: true
        }
      ]
    };
  }
};
</script>

<style>
.info-cards {
  position: relative;
  z-index: 3;
  padding: calc(var(--size-gap) / 2) 0;
}

@media screen and (min-width: 990px) {
  .info-cards {
    padding: var(--size-gap) 0;
  }
}
</style>
