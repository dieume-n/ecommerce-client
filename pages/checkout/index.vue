<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-three-quarter">
          <ShippingAddress :addresses="addresses" />
          <article class="message">
            <div class="message-body">
              <h1 class="title is-5">Payment</h1>
            </div>
          </article>
          <article class="message">
            <div class="message-body">
              <h1 class="title is-5">Shipping</h1>
              <div class="select is-fullwidth">
                <select name="" id="">
                  <option value="">Royal Mail 1st Class</option>
                </select>
              </div>
            </div>
          </article>
          <article class="message" v-if="count">
            <div class="message-body">
              <h1 class="title is-5">Cart summary</h1>
              <CartOverview>
                <template slot="rows">
                  <tr>
                    <td></td>
                    <td></td>
                    <td class="has-text-weight-bold">Shipping</td>
                    <td>$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td class="has-text-weight-bold">Total</td>
                    <td>{{ total }}</td>
                    <td></td>
                  </tr>
                </template>
              </CartOverview>
            </div>
          </article>
          <article class="message">
            <div class="message-body">
              <button
                class="button is-info is-fullwidth is-medium"
                :disabled="empty"
              >
                Place order
              </button>
            </div>
          </article>
        </div>
        <div class="column is-one-quarter">
          <article class="message">
            <div class="message-body">
              <button
                class="button is-info is-fullwidth is-medium"
                :disabled="empty"
              >
                Place order
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartOverview from "@/components/cart/CartOverview";
import ShippingAddress from "@/components/checkout/addresses/ShippingAddress";
export default {
  components: {
    CartOverview,
    ShippingAddress,
  },
  data() {
    return {
      addresses: [],
    };
  },
  computed: {
    ...mapGetters({
      total: "cart/total",
      count: "cart/count",
      empty: "cart/empty",
    }),
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get("addresses");
    return { addresses: addresses.data };
  },
};
</script>
