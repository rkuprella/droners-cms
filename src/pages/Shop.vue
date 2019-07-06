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
                <div v-show="product.node.category">
                  <ul>
                    <li v-for="(category, i) in product.node.category" :key="i">{{ category }}</li>
                  </ul>
                </div>
                <div style="color:blue">{{ product.node.discount.active }}</div>
                <div>{{ addDiscount(product.node.price, product.node.discount.active, product.node.discount.percentage) }} €</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <button
                  :disabled="!product.node.available"
                  class="button is-success snipcart-add-item"
                  :data-item-id="product.node.id"
                  :data-item-name="product.node.title"
                  :data-item-image="product.node.featuredImage"
                  :data-item-price="addDiscount(product.node.price, product.node.discount.active, product.node.discount.percentage)"
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
export default {
  metaInfo: {
    title: "Shop"
  },
  methods: {
    addDiscount(price, active, percentage) {
      return active && percentage != null
        ? (price * (100 - percentage)) / 100
        : price;
    }
  }
};
</script>
