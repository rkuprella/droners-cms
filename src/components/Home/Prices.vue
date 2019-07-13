<template>
  <div class="prices hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Preise und Angebote" />
        <div class="card-wrapper">
          <Card
            v-for="price in prices"
            :key="price.title"
            :title="price.title"
            :color="price.color"
            :to="price.to"
            :icon="price.icon"
            :list="price.list"
            :link="price.link"
            :price="price.tag"
            :inverted="price.inverted"
            :stars="price.stars"
            rows="4"
          />
        </div>
        <p
          class="prices-outro center-h"
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
  data() {
    return {
      prices: [
        {
          title: "Eisenbahn",
          tag: 89.99,
          list: ["Schnell", "Sicher", "Arithmetisch"],
          to: "/",
          color: "red",
          inverted: true,
          stars: 3
        },
        {
          title: "Katzenhaus",
          tag: 45.99,
          list: ["Klein", "Gemütlich", "Zum Rausgucken"],
          link: "Macht die Katze froh",
          to: "/",
          color: "red",
          inverted: true,
          stars: 3
        },
        {
          title: "Hexenhaus",
          tag: 129.99,
          list: ["Schnell", "Sicher", "Arithmetisch"],
          to: "/",
          color: "red",
          inverted: true,
          stars: 3
        },
        {
          title: "Gruppenspaß",
          tag: 189.99,
          list: ["Familie", "Günstig", "Mehr vom Geld", "Geht doch gut"],
          link: "Jetzt reinschnuppern",
          to: "/",
          color: "green",
          inverted: true,
          stars: 4
        }
      ]
    };
  }
};
</script>

<style>
.prices-outro {
  margin-top: var(--size-lg);
}
</style>
