<template>
  <Layout>
    <div class="container" style="padding-top:100px; min-height:90vh; position:relative">
      <g-image
        :src="$page.contentPage.featuredImage"
        :alt="$page.contentPage.title"
        style="width:100%; height:400px; object-fit:cover"
      />
      <h2
        class="is-size-1 has-text-info has-text-weight-bold"
        style="position:absolute; top:350px; left:10%;"
      >{{ $page.contentPage.title }}</h2>
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
