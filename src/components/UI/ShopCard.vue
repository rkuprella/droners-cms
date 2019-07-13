<template>
  <g-link :to="'/shop/' + slugify(title)" class="shop-card">
    <g-image
      class="shop-card-image"
      :src="image"
      :alt="title"
      :class="{'not-available' : !available}"
    />

    <div class="shop-card-wrapper">
      <h3 class="shop-card-title">{{ title }}</h3>
      <div v-show="!available" class="shop-card-available">Zur Zeit nicht lieferbar</div>
      <div class="shop-card-price-wrapper">
        <span class="shop-card-discount" v-if="discount.active">
          <span v-html="discount.percentage" class="shop-card-discount-percent"></span>
        </span>
        <span
          class="shop-card-price"
          v-html="formatPrice(addDiscount(price, discount.active, discount.percentage))"
        ></span>
        <span class="shop-card-price-old" v-if="discount.active" v-html="price"></span>
      </div>
    </div>

    <div class="shop-card-manufacturer" v-if="manufacturer" v-html="manufacturer"></div>
    <div class="shop-card-info" v-if="video">
      <video class="shop-card-video" autoplay playsinline muted loop preload>
        <source :src="video" />
      </video>
      <font-awesome :icon="['fa', 'video']" size="sm" class="shop-card-video-icon" />
    </div>
  </g-link>
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
    },
    slugify(string) {
      const a =
        "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
      const b =
        "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
      const p = new RegExp(a.split("").join("|"), "g");
      return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
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
  text-decoration: none;
  color: var(--color-bg);
}
.shop-card-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: var(--size-md) 0;
}
.shop-card-image {
  width: 100%;
  height: 18vw;
  min-height: 160px;
  max-height: 280px;
  object-fit: cover;
  z-index: 1;
}
.shop-card-image.not-available {
  opacity: 0.2;
  filter: grayscale(100%);
}
.shop-card-title {
  color: var(--color-bg);
  font-size: 1.1em;
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
  position: absolute;
  top: var(--size-md);
  left: var(--size-md);
  z-index: 2;
  background: var(--color-blue);
  padding: var(--size-sm) var(--size-md);
  color: var(--color-bg);
}
.shop-card-price-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
.shop-card-price {
  font-size: 1.5em;
}
.shop-card-price-old {
  margin-left: var(--size-md);
  font-size: 1.1em;
  color: var(--color-red);
  text-decoration: line-through;
}
.shop-card-price::after,
.shop-card-price-old::after {
  content: "€";
  margin-left: var(--size-xs);
  font-size: 0.6em;
}
.shop-card-available {
  color: var(--color-red);
}
.shop-card-discount {
  padding: var(--size-xs) var(--size-sm);
  background: var(--color-red);
  color: var(--color-light);
  font-size: 1.1em;
  margin-right: var(--size-sm);
  border-radius: var(--size-xl);
}
.shop-card-discount-percent::before {
  content: "-";
}
.shop-card-discount-percent::after {
  content: "%";
  margin-left: var(--size-xs);
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
