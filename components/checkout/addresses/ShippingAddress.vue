<template>
  <article class="message">
    <div class="message-body">
      <h1 class="title is-5">Ship to</h1>
      <template v-if="selectedAddress">
        <p>{{ selectedAddress.name }}</p>
        <p>{{ selectedAddress.address_1 }}</p>
        <p v-if="selectedAddress.address_2">{{ selectedAddress.address_2 }}</p>
        <p>{{ selectedAddress.city }}</p>
        <p>{{ selectedAddress.postal_code }}</p>
        <p>{{ selectedAddress.country.name }}</p>
      </template>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      localAddresses: this.addresses,
      selectedAddress: null,
    };
  },
  props: {
    addresses: {
      required: true,
      type: Array,
    },
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
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  },
};
</script>
