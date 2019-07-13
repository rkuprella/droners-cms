<template>
  <Layout>
    <div class="shop hero">
      <div class="container center-v">
        <section class="hero-section">
          <h2>Shop</h2>
          <a href="#" class="snipcart-checkout">
            <font-awesome :icon="['fa', 'shopping-cart']" size="lg" />
            <div class="snipcart-summary">
              <span class="snipcart-total-items" style="margin-left:10px"></span>
            </div>
          </a>

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
  </Layout>
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
import Title from "~/components/UI/Title";
import ShopCard from "~/components/UI/ShopCard";

export default {
  metaInfo: {
    title: "Shop"
  },
  components: {
    Title,
    ShopCard
  },
  methods: {
    addDiscount(price, active, percentage) {
      return active && percentage != null
        ? ((price * (100 - percentage)) / 100).toFixed(2)
        : price.toFixed(2);
    }
  }
};
</script>
