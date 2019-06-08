<template>
  <Layout :home="true">
    <Header/>
    <Intro/>
  </Layout>
</template>

<script>
import Header from "~/components/Home/Header";
import Intro from "~/components/Home/Intro";

export default {
  components: {
    Header,
    Intro
  },
  metaInfo: {
    title: "DRONERS"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
