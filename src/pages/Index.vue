<template>
  <Layout :home="true">
    <Header />
    <Intro />
    <Selection />
    <Imagination />
    <Prices />
  </Layout>
</template>

<script>
import Header from "~/components/Home/Header";
import Intro from "~/components/Home/Intro";
import Selection from "~/components/Home/Selection";
import Imagination from "~/components/Home/Imagination";
import Prices from "~/components/Home/Prices";

export default {
  components: {
    Header,
    Intro,
    Selection,
    Imagination,
    Prices
  },
  metaInfo: {
    title: "DRONERS"
  }
};
</script>

<style>
</style>
