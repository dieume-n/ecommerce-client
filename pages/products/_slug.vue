<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half">
          <img src="@/assets/images/620x620.png" :alt="product.name" />
        </div>
        <div class="column is-half">
          <section class="section">
            <h1 class="title is-4">{{ product.name }}</h1>
            <p v-if="product.description">
              {{ product.description }}
            </p>
            <hr />
            <span class="tag is-rounded is-medium"> {{ product.price }} </span>
          </section>
          <section class="section">
            <form>
              <ProductVariation
                v-for="(variations, type) in product.variations"
                :type="type"
                :variations="variations"
                :key="type"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductVariation from "@/components/products/ProductVariation"
export default {
  components: {
    ProductVariation
  },
  data() {
    return {
      product: null,
    };
  },
  async asyncData({ params, app }) {
    const response = await app.$axios.$get(`products/${params.slug}`);
    return {
      product: response.data,
    };
  },
};
</script>
