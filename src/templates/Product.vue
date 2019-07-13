<template>
  <Layout :shop="true">
    <div class="container" style="padding-top:100px; min-height:90vh; position:relative">
      <g-image
        :src="$page.product.featuredImage"
        :alt="$page.product.title"
        style="width:100%; height:400px; object-fit:cover"
      />
      <h2
        class="is-size-1 has-text-info has-text-weight-bold"
        style="position:absolute; top:350px; left:10%;"
      >{{ $page.product.title }}</h2>
      <div v-html="$page.product.content" class="content"></div>
      <button
        :disabled="!$page.product.available"
        class="snipcart-add-item"
        :data-item-id="$page.product.id"
        :data-item-name="$page.product.title"
        :data-item-image="$page.product.featuredImage"
        :data-item-price="addDiscount($page.product.price, $page.product.discount.active, $page.product.discount.percentage)"
        :data-item-url="$page.product.slug"
      >In den Warenkorb</button>
    </div>
  </Layout>
</template>

<page-query>
query Product ($path: String!) {
  product: product (path: $path) {
    id
    title
    slug
    featuredImage
    price
    available
    category
    video
    content
    manufacturer
    discount {
      active
      percentage
      dateFrom
      dateTo
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.product.title
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    addDiscount(price, active, percentage) {
      return active && percentage != null
        ? ((price * (100 - percentage)) / 100).toFixed(2)
        : price.toFixed(2);
    }
  }
};
</script>
