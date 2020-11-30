<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Ecommerce
        </nuxt-link>
        <div class="burger navbar-burger" data-target="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <template v-for="category in categories">
          <template v-if="category.children.length">
            <nuxt-link
              :to="{ name: 'index' }"
              :key="category.slug"
              class="navbar-item is-hoverable has-dropdown"
            >
              {{ category.name }}
            </nuxt-link>
          </template>
          <nuxt-link
            :to="{ name: 'index' }"
            :key="category.slug"
            class="navbar-item"
          >
            {{ category.name }}
          </nuxt-link>
        </template>
      </div>
      <div id="nav" class="navbar-menu">
        <div class="navbar-end">
          <a href="#" class="navbar-item"> Sign in </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "categories",
    }),
  },
};
</script>