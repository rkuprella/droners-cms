<template>
  <div class="card" :class="[{inverted: inverted}, 'color-' + color ]">
    <ul class="card-stars">
      <li class="card-star" v-for="star in stars" :key="star">
        <font-awesome :icon="['fa', 'star']" size="lg" class="card-star-icon" />
      </li>
    </ul>
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
        <span v-html="formatPrice(price)"></span> €
        <div class="card-price-info" v-html="priceInfo"></div>
      </div>
    </main>
    <footer>
      <Btn :title="link" :to="to" :dark="inverted" />
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
    link: {
      type: String,
      default: "Mehr erfahren"
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
      default: "blue"
    },
    stars: {
      type: Number,
      default: 0
    },
    priceInfo: {
      type: String,
      default: "Preis inkl. MwSt."
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
.card.color-red {
  color: var(--color-red);
  border: 2px solid var(--color-red);
}
.card.color-red.inverted {
  color: var(--color-bg);
  border: 2px solid var(--color-red);
  background: var(--color-red);
}
.card.color-blue {
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
}
.card.color-blue.inverted {
  color: var(--color-bg);
  border: 2px solid var(--color-blue);
  background: var(--color-blue);
}
.card.color-green {
  color: var(--color-green);
  border: 2px solid var(--color-green);
}
.card.color-green.inverted {
  color: var(--color-bg);
  border: 2px solid var(--color-green);
  background: var(--color-green);
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
.card.color-red:not(.inverted) h3:first-line {
  color: var(--color-red);
}
.card.color-green:not(.inverted) h3:first-line {
  color: var(--color-green);
}
.card.color-blue:not(.inverted) h3:first-line {
  color: var(--color-blue);
}
.card.inverted h3,
.card.inverted p,
.card.inverted li {
  color: var(--color-bg);
}
.card-content {
  padding: var(--size-md) 0;
  width: 100%;
}
.card-price-info {
  font-size: 0.8rem;
  text-align: center;
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
.card-stars {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin: var(--size-sm) 0 var(--size-md);
}
.card-star {
  list-style: none;
}
.card-star-icon {
  color: var(--color-light);
}

@media screen and (min-width: 990px) {
  .card {
    width: 32%;
  }
}
</style>
