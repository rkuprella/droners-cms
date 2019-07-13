<template>
  <div class="shop hero">
    <div class="container center-v">
      <section class="hero-section">
        <h2>Shop</h2>

        <div class="card-wrapper">
          <ShopCard
            v-for="product in $static.allProduct.edges"
            :key="product.node.slug"
            :id="product.node.id"
            :title="product.node.title"
            :image="product.node.featuredImage"
            :price="product.node.price"
            :discount="product.node.discount"
            :to="product.node.slug"
            :video="product.node.video"
            :categories="product.node.category"
            :manufacturer="product.node.manufacturer"
            :available="product.node.available"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<static-query>
query {
  allProduct {
    edges {
      node {
        id
        title
        slug
        featuredImage
        price
        available
        category
        video
        manufacturer
        discount {
          active
          percentage
          dateFrom
          dateTo
        }
      }
    }
  }
}
</static-query>

<script>
import ShopCard from "~/components/UI/ShopCard";

export default {
  components: {
    ShopCard
  }
};
</script>

<style>
</style>
