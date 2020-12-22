<template>
  <tr>
    <td width="120">
      <img
        src="@/assets/images/620x620.png"
        alt=""
        style="width: 60px; height: 60px"
      />
    </td>
    <td>{{ product.product.name }} / {{ product.name }}</td>
    <td width="160">
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select>
              <option value="0">0</option>
              <option
                :value="x"
                v-for="x in product.stock_count"
                :key="x"
                :selected="x === product.quantity"
              >
                {{ x }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </td>
    <td>{{ product.total }}</td>
    <td>
      <a href="#" @click.prevent="deleteProduct(product.id)">Remove</a>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      deleteProduct: "cart/deleteProduct",
    }),
  },
};
</script>
