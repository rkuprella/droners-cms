<template>
  <Layout>
    <Header />
    <Shopping />
  </Layout>
</template>

<script>
import Header from "~/components/Shop/Header";
import Shopping from "~/components/Shop/Shopping";

export default {
  metaInfo: {
    title: "Shop"
  },
  components: {
    Header,
    Shopping
  }
};
</script>

<style>
</style>
