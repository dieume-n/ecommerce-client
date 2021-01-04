<template>
  <table class="table is-hoverable is-fullwidth">
    <tbody>
      <tr v-for="address in addresses" :key="address.id">
        <td class="p-4">
          <div
            :class="{
              'has-text-weight-bold': address.id === selectedAddress.id,
            }"
          >
            <p>{{ address.name }}</p>
            <p>{{ address.address_1 }}</p>
            <p v-if="address.address_2">
              {{ address.address_2 }}
            </p>
            <p>{{ address.city }}</p>
            <p>{{ address.postal_code }}</p>
            <p>{{ address.country.name }}</p>
          </div>
        </td>
        <td class="p-4">
          <button
            class="button is-info"
            @click.prevent="$emit('click', address)"
          >
            Ship here
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    addresses: {
      required: true,
      type: Array,
    },
    selectedAddress: {
      required: true,
      type: Object,
    },
  },
};
</script>
