<template>
  <div class="card" :class="[{dark : dark}, 'color-' + color ]">
    <header class="center-v">
      <font-awesome :icon="['fa', icon]" size="3x" v-if="icon" class="card-icon" />
      <h3 v-html="title"></h3>
    </header>
    <main class="card-content">
      <p v-if="content" v-html="content"></p>
      <ul v-if="list">
        <li v-for="item in list" :key="item" class="card-list">
          <font-awesome :icon="['fa', 'check']" size="sm" class="card-check" />
          <span v-html="item"></span>
        </li>
      </ul>
      <div class="card-price" v-if="price">
        <span v-html="price"></span> €
      </div>
    </main>
    <footer>
      <Btn title="Mehr erfahren" :to="to" :inverted="inverted" :dark="dark" />
    </footer>
  </div>
</template>

<script>
import Btn from "~/components/UI/Btn";

export default {
  components: {
    Btn
  },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    price: {
      type: Number,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    inverted: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "light"
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.card {
  padding: var(--size-lg);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--size-lg);
  border-radius: var(--size-lg);
}
.card.dark {
  background: var(--color-bg-dark);
}
.card.color-red {
  color: var(--color-red);
  border: 2px solid var(--color-red);
}
.card.color-red-full {
  color: var(--color-bg);
  border: 2px solid var(--color-red);
  background: var(--color-red);
}
.card-icon {
  margin-right: var(--size-md);
}
.card-check {
  margin-right: var(--size-sm);
}
.card h3 {
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  font-size: 1.4em;
  color: var(--color-light);
}
.card.color-red h3:first-line {
  color: var(--color-red);
}
.card.color-red-full h3 {
  color: var(--color-bg);
}
.card.color-red-full p {
  color: var(--color-bg);
}
.card-content {
  padding: var(--size-md) 0;
  width: 100%;
}
.card-list {
  list-style: none;
  color: var(--color-light);
}
.card-price {
  font-size: 2.4em;
  margin-top: var(--size-md);
  text-align: center;
  width: 100%;
}

@media screen and (min-width: 990px) {
  .card {
    width: 32%;
  }
}
</style>
