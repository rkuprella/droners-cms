<template>
  <Layout>
    <div class="container" style="padding-top:100px; min-height:90vh">
      <h2 class="is-size-3 has-text-info">Shop</h2>
      <a href="#" class="button is-info snipcart-checkout">
        <font-awesome :icon="['fa', 'shopping-cart']" size="lg" />
        <div class="snipcart-summary">
          <span class="snipcart-total-items" style="margin-left:10px"></span>
        </div>
      </a>

      <div class="columns is-multiline">
        <div class="column" v-for="product in $static.allProduct.edges" :key="product.node.slug">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <g-image :src="product.node.featuredImage" :alt="product.node.title" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h2>{{ product.node.title }}</h2>
                <div v-show="!product.node.available" style="color:red">Out of stock</div>
                <div v-show="product.node.category">{{ product.node.category }}</div>
                <div>{{ product.node.price }} €</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <button
                  :disabled="!product.node.available"
                  class="button is-success snipcart-add-item"
                  :data-item-id="product.node.id"
                  :data-item-name="product.node.title"
                  :data-item-image="product.node.featuredImage"
                  :data-item-price="product.node.price"
                  :data-item-url="product.node.slug"
                >In den Warenkorb</button>
              </div>
            </div>
          </div>
        </div>
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
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Shop"
  }
};
</script>
