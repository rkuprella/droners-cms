<template>
  <div class="info-cards">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Freizeitgestaltung neu erleben" />
        {{ cards.list }}
        <div class="card-wrapper">
          <Card
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :color="card.color"
            :to="card.to"
            :content="card.content"
            :stars="card.stars"
            :rows="rows"
            :list="splitList(card.list)"
            inverted
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
  methods: {
    splitList(list) {
      return list.split(",");
    }
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
