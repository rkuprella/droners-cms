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
            :dark="price.dark"
            :inverted="price.inverted"
          />
        </div>
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
          linkText: "Gruppenangebot sichern",
          link: "/",
          icon: "circle",
          color: "red"
        },
        {
          title: "Katzenhaus",
          tag: 45.99,
          list: ["Klein", "Gemütlich", "Zum Rausgucken"],
          link: "Macht die Katze froh",
          to: "/",
          color: "red"
        },
        {
          title: "Gruppenspaß",
          tag: 189.99,
          list: ["Familie", "Günstig", "Mehr vom Geld"],
          link: "Jetzt reinschnuppern",
          to: "/"
        },
        {
          title: "Gruppenspaß",
          tag: 189.99,
          list: ["Familie", "Günstig", "Mehr vom Geld"],
          link: "Jetzt reinschnuppern",
          to: "/",
          dark: true
        },
        {
          title: "Gruppenspaß",
          tag: 189.99,
          list: ["Familie", "Günstig", "Mehr vom Geld"],
          link: "Jetzt reinschnuppern",
          to: "/",
          color: "green",
          inverted: true
        },
        {
          title: "Gruppenspaß",
          tag: 189.99,
          list: ["Familie", "Günstig", "Mehr vom Geld"],
          link: "Jetzt reinschnuppern",
          to: "/",
          dark: true,
          inverted: true
        }
      ]
    };
  }
};
</script>

<style>
</style>
