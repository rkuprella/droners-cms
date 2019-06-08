<template>
  <Layout>
    <div class="container">
      <g-image :src="$page.contentPage.featuredImage" :alt="$page.contentPage.title"/>
      <div v-html="$page.contentPage.content" class="content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    title
    content
    featuredImage (width: 200, height: 200, quality: 90)
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
