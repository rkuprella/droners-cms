<template>
  <Layout>
    <div class="container">
      <h1>Products Overview</h1>
      <div class="columns is-multiline">
        <div class="column" v-for="product in $static.allProduct.edges" :key="product.node.slug">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <g-image :src="product.node.featuredImage" :alt="product.node.title"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h2>{{ product.node.title }}</h2>
                <div>{{ product.node.price }} €</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
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
