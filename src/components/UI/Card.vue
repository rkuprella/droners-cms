<template>
  <div class="card" :class="[{inverted: inverted}, 'color-' + color, 'rows-' + rows ]">
    <ul class="card-stars">
      <li class="card-star" v-for="star in stars" :key="star">
        <font-awesome :icon="['fa', 'star']" size="sm" class="card-star-icon" />
      </li>
    </ul>
    <header class="card-header center-v" :class="{'center': !icon}">
      <font-awesome :icon="['fa', icon]" size="3x" v-if="icon" class="card-icon" />
      <h4 v-html="title" class="card-title" />
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
        <span v-html="formatPrice(price)"></span>
        <span class="card-euro">€</span>
        <div class="card-price-info" v-html="priceInfo"></div>
      </div>
    </main>
    <footer class="card-footer" :class="{'center': !icon}">
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
    },
    rows: {
      type: Number,
      default: 3
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
  padding: var(--size-md) calc(var(--size-md) + 4px);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--size-lg);
  overflow: hidden;
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
.card-title {
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  font-size: 1.4em;
  color: var(--color-light);
}
.card.color-red:not(.inverted) .card-title:first-line {
  color: var(--color-red);
}
.card.color-green:not(.inverted) .card-title:first-line {
  color: var(--color-green);
}
.card.color-blue:not(.inverted) .card-title:first-line {
  color: var(--color-blue);
}
.card.inverted .card-title,
.card.inverted p,
.card.inverted li {
  color: var(--color-bg);
}
.card-content {
  padding: var(--size-md) 0;
  width: 100%;
}
.card-header,
.card-footer {
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
  margin: 0 var(--size-xs);
}
.card-star-icon {
  color: rgba(0, 0, 0, 0.3);
}
.card-euro {
  margin-left: var(--size-sm);
  font-size: 0.6em;
}

@media screen and (min-width: 450px) {
  .card.rows-4,
  .card.rows-6 {
    width: 49%;
  }
}

@media screen and (min-width: 990px) {
  .card.rows-6 {
    width: 15%;
  }
  .card.rows-4 {
    width: 24%;
  }
  .card.rows-3 {
    width: 32%;
  }
  .card.rows-2 {
    width: 49%;
  }
  .card.rows-1 {
    width: 100%;
  }
}
</style>
