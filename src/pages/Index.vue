<template>
  <Layout :home="true">
    <Header />
    <Intro />
    <Selection />
    <Imagination />
    <Video />
    <ImageTabs />
    <Prices />
    <Map />
    <Outro />
  </Layout>
</template>

<script>
import Header from "~/components/Home/Header";
import Intro from "~/components/Home/Intro";
import Selection from "~/components/Home/Selection";
import Imagination from "~/components/Home/Imagination";
import Prices from "~/components/Home/Prices";
import Map from "~/components/Home/Map";
import Outro from "~/components/Home/Outro";
import ImageTabs from "~/components/Home/ImageTabs";
import Video from "~/components/Home/Video";

export default {
  components: {
    Header,
    Intro,
    Selection,
    Imagination,
    Prices,
    Map,
    Outro,
    ImageTabs,
    Video
  },
  metaInfo: {
    titleTemplate: "DRONERS - Drone Arena"
  }
};
</script>

<style>
</style>
