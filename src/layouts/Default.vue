<template>
  <div class="layout" :class="{shop : shop }">
    <Navbar :topbar="home" :shop="shop" />
    <Sidebar v-if="home" />
    <SocialMedia v-if="home" />
    <ShoppingCart v-if="shop" />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Nav/Navbar";
import Footer from "~/components/Nav/Footer";
import Sidebar from "~/components/Nav/Sidebar";
import SocialMedia from "~/components/Nav/SocialMedia";
import ShoppingCart from "~/components/Nav/ShoppingCart";

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
    SocialMedia,
    ShoppingCart
  },
  props: {
    home: {
      type: Boolean,
      default: false
    },
    shop: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
body {
  background: var(--color-bg);
}
.layout {
  background: var(--color-bg);
}
.layout.shop {
  background: var(--color-white);
}
</style>
