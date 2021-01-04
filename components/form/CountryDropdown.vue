<template>
  <select @change="changed">
    <option value="">Please select</option>
    <option :value="country.id" v-for="country in countries" :key="country.id">
      {{ country.name }}
    </option>
  </select>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      countries: "countries/countries",
    }),
  },
  methods: {
    changed($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>
