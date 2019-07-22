<template>
  <Layout>
    <div class="container">
      <ul style="color:white">
        <li
          v-for="(question, i) in $page.contentPage.questions"
          :key="i"
        >{{ question.question }} {{ question.answer }}</li>
      </ul>
    </div>
    <Content
      :title="$page.contentPage.title"
      :image="$page.contentPage.featuredImage"
      :content="$page.contentPage.content"
    />
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    title
    content
    featuredImage (width: 200, height: 200, quality: 90)
    questions {
      answer
      question
    }
  }
}
</page-query>

<script>
import Content from "~/components/Page/Content";

export default {
  components: {
    Content
  },
  metaInfo() {
    return {
      title: this.$page.contentPage.title
    };
  }
};
</script>
