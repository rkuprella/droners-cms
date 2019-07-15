<template>
  <Layout :home="true">
    <Header />
    <Intro />
    <Selection />
    <Imagination />
    <Prices />
    <Map />
  </Layout>
</template>

<script>
import Header from "~/components/Home/Header";
import Intro from "~/components/Home/Intro";
import Selection from "~/components/Home/Selection";
import Imagination from "~/components/Home/Imagination";
import Prices from "~/components/Home/Prices";
import Map from "~/components/Home/Map";

export default {
  components: {
    Header,
    Intro,
    Selection,
    Imagination,
    Prices,
    Map
  },
  metaInfo: {
    title: "DRONERS"
  }
};
</script>

<style>
</style>
