<template>
  <div class="shop-card">
    <g-image class="shop-card-image" :src="image" :alt="title" />
    <div class="shop-card-wrapper">
      <div class="shop-card-manufacturer">{{ manufacturer }}</div>
      <h2>{{ title }}</h2>
      <div v-show="available" style="color:red">Out of stock</div>
      <div v-show="categories">
        <ul>
          <li v-for="(category, i) in categories" :key="i">{{ category }}</li>
        </ul>
      </div>
      <div style="color:blue">{{ discount.active }} - {{ price }}</div>
      <div>{{ addDiscount(price, discount.active, discount.percentage) }} €</div>
      <button
        :disabled="!available"
        class="snipcart-add-item"
        :data-item-id="id"
        :data-item-name="title"
        :data-item-image="image"
        :data-item-price="addDiscount(price, discount.active, discount.percentage)"
        :data-item-url="to"
      >In den Warenkorb</button>
    </div>
    <div class="shop-card-info" v-if="video">
      <video class="shop-card-video" autoplay playsinline muted loop preload>
        <source :src="video" />
      </video>
      <font-awesome :icon="['fa', 'video']" size="sm" class="shop-card-video-icon" />
    </div>
  </div>
</template>

<script>
import Btn from "~/components/UI/Btn";

export default {
  components: {
    Btn
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    },
    categories: {
      type: Array,
      default: null
    },
    manufacturer: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    },
    discount: {
      type: Object,
      default: null
    },
    image: {
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
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    addDiscount(price, active, percentage) {
      return active && percentage != null
        ? ((price * (100 - percentage)) / 100).toFixed(2)
        : price.toFixed(2);
    }
  }
};
</script>

<style>
.shop-card {
  width: 48%;
  margin-bottom: var(--size-lg);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shop-card-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  padding: var(--size-lg);
}
.shop-card-image {
  width: 100%;
  height: 18vw;
  min-height: 160px;
  max-height: 280px;
  object-fit: cover;
  z-index: 2;
}
.shop-card-info {
  display: none;
}
.shop-card-video {
  display: none;
}
.shop-card-video-icon {
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: var(--color-bg);
}
.shop-card-manufacturer {
  color: grey;
}

@media screen and (min-width: 990px) {
  .shop-card {
    width: 24%;
  }
  .shop-card-info {
    display: block;
    clip-path: circle(15% at 95% 95%);
    transition: clip-path 0.3s ease-in-out;
    background: var(--color-blue);
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 18vw;
    min-height: 160px;
    max-height: 280px;
    overflow: hidden;
  }
  .shop-card-video {
    display: block;
    opacity: 0;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
  }
  .shop-card-info:hover {
    clip-path: circle(75%);
  }
  .shop-card-info:hover .shop-card-video {
    opacity: 1;
    transition: opacity 0.5s 0.15s ease-in-out;
  }
}
</style>
