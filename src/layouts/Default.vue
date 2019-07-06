<template>
  <div class="layout has-background-dark">
    <Topbar v-if="home" />
    <Navbar :gap="home" />
    <Sidebar v-if="home" />
    <SocialMedia v-if="home" />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Topbar from "~/components/Nav/Topbar";
import Navbar from "~/components/Nav/Navbar";
import Footer from "~/components/Nav/Footer";
import Sidebar from "~/components/Nav/Sidebar";
import SocialMedia from "~/components/Nav/SocialMedia";

export default {
  components: {
    Topbar,
    Navbar,
    Footer,
    Sidebar,
    SocialMedia
  },
  props: {
    home: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>
