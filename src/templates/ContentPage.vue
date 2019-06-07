<template>
  <Layout>
    <div v-html="$page.contentPage.content"></div>
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.contentPage.title
    };
  }
};
</script>
