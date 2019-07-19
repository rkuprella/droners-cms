<template>
  <div class="hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Freizeitgestaltung neu erleben" />
        <div class="card-wrapper">
          <Card
            v-for="selection in selections"
            :key="selection.title"
            :title="selection.title"
            :color="selection.color"
            :to="selection.to"
            :icon="selection.icon"
            :content="selection.content"
            :inverted="selection.inverted"
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
  data() {
    return {
      selections: [
        {
          title: "Parcours & Racing mit Micro-Coptern",
          content:
            "Drohnenfliegen in Cockpit-Perspektive neu erleben. Meistere unseren Parcours.",
          icon: "gamepad",
          to: "/",
          color: "red"
        },
        {
          title: "Im Team gemeinsam abheben",
          content:
            "Mit 90 Sachen abheben. Erlebe Drohnenfliegen auf ganz neue Art und Weise.",
          icon: "grin-tears",
          to: "/",
          color: "green"
        },
        {
          title: "Get your DRONERS Merch",
          content: "Meistere unseren Parcours.",
          icon: "tshirt",
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
.selection {
  padding: var(--size-lg);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--size-lg);
  border-radius: var(--size-lg);
}
.selection.color-red {
  color: var(--color-red);
  border: 2px solid var(--color-red);
}
.selection.color-red-full {
  color: var(--color-bg);
  border: 2px solid var(--color-red);
  background: var(--color-red);
}
.selection.color-green {
  color: var(--color-green);
  border: 2px solid var(--color-green);
}
.selection.color-green-full {
  color: var(--color-bg);
  border: 2px solid var(--color-green);
  background: var(--color-green);
}
.selection h3 {
  margin-left: var(--size-md);
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  font-size: 1.4em;
  color: var(--color-light);
}
.selection.color-red h3:first-line {
  color: var(--color-red);
}
.selection.color-green h3:first-line {
  color: var(--color-green);
}
.selection.color-green-full h3,
.selection.color-red-full h3 {
  color: var(--color-bg);
}
.selection.color-green-full p,
.selection.color-red-full p {
  color: var(--color-bg);
}
.selection p {
  padding: var(--size-md) 0;
}
.selection-outro {
  margin-top: var(--size-lg);
}

@media screen and (min-width: 990px) {
  .selection {
    width: 32%;
  }
}
</style>
