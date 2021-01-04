<template>
  <article class="message">
    <div class="message-body">
      <h1 class="title is-5">Ship to</h1>
      <div v-if="selecting">
        <ShippingAddressSelector
          :addresses="addresses"
          :selectedAddress="selectedAddress"
          @click="addressSelected"
        />
      </div>
      <div v-else>
        <template v-if="selectedAddress">
          <div>
            <p>{{ selectedAddress.name }}</p>
            <p>{{ selectedAddress.address_1 }}</p>
            <p v-if="selectedAddress.address_2">
              {{ selectedAddress.address_2 }}
            </p>
            <p>{{ selectedAddress.city }}</p>
            <p>{{ selectedAddress.postal_code }}</p>
            <p>{{ selectedAddress.country.name }}</p>
          </div>
        </template>
        <div class="mt-2 field is-grouped">
          <p class="control">
            <a
              href="#"
              class="button is-info"
              @click.prevent="selecting = true"
            >
              Change shipping address
            </a>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import ShippingAddressSelector from "@/components/checkout/addresses/ShippingAddressSelector";
export default {
  components: {
    ShippingAddressSelector,
  },
  props: {
    addresses: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      selecting: false,
      localAddresses: this.addresses,
      selectedAddress: null,
    };
  },
  computed: {
    defaultAddress() {
      return this.addresses.find((address) => address.default === true);
    },
  },
  methods: {
    switchAddress(address) {
      this.selectedAddress = address;
    },
    addressSelected(address) {
      this.switchAddress(address);
      this.selecting = false;
    },
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  },
};
</script>
