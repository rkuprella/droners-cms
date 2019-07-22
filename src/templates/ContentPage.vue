<template>
  <Layout>
    <Content
      :title="$page.contentPage.title"
      :image="$page.contentPage.featuredImage"
      :content="$page.contentPage.content"
    />
    <!-- <Gallery images /> -->
    <Banner title="Jetzt unverbindlich dein Event anfragen" />
    <FAQ :list="$page.contentPage.faq.question" v-if="$page.contentPage.faq.question.length > 0" />
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    title
    content
    featuredImage
    faq {
      question {
        question
        answer
      }
    }
  }
}
</page-query>

<script>
import Content from "~/components/Page/Content";
import FAQ from "~/components/Page/FAQ";
import Banner from "~/components/Page/Banner";
import Gallery from "~/components/Page/Gallery";

export default {
  components: {
    Content,
    FAQ,
    Banner,
    Gallery
  },
  metaInfo() {
    return {
      title: this.$page.contentPage.title
    };
  }
};
</script>
