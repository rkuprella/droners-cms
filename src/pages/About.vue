<template>
  <Layout>
    <h1>Products</h1>
    <div
      v-for="product in $static.allProduct.edges"
      :key="product.node.slug"
      style="width:25%; height:250px; overflow:hidden"
    >
      <h2>{{ product.node.title }}</h2>
      <div>{{ product.node.price }} €</div>
      <g-image :src="product.node.featuredImage" :alt="product.node.title"/>
    </div>
  </Layout>
</template>

<static-query>
query {
  allProduct {
    edges {
      node {
        title
        slug
        featuredImage
        price
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
