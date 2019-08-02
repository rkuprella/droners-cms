<template>
  <Layout>
    <Content
      :title="$page.contentPage.title"
      :image="$page.contentPage.featuredImage"
      :content="$page.contentPage.content"
    />
    <InfoCards
      :cards="$page.contentPage.cards.card"
      :rows="$page.contentPage.cards.card.length"
      v-if="$page.contentPage.cards"
    />
    <Gallery :images="$page.contentPage.gallery.image" v-if="$page.contentPage.gallery" />
    <Banner title="Jetzt unverbindlich dein Event anfragen" />
    <FAQ :list="$page.contentPage.faq.question" v-if="$page.contentPage.faq" />
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
    gallery {
      image {
        imageUrl
        copyright
      }
    }
    cards {
      card {
        title
        content
        list
        price
        link
        to
        color
        stars
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
import InfoCards from "~/components/Page/InfoCards";

export default {
  components: {
    Content,
    FAQ,
    Banner,
    Gallery,
    InfoCards
  },
  metaInfo() {
    return {
      title: this.$page.contentPage.title
    };
  }
};
</script>
