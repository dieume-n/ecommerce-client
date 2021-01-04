<template>
  <form action="#" @submit.prevent="createAddress">
    <div class="field">
      <label for="name" class="label">Name</label>
      <div class="control">
        <input type="text" v-model="form.name" id="name" class="input" />
      </div>
    </div>
    <div class="field">
      <label for="address_1" class="label">Address line 1</label>
      <div class="control">
        <input
          type="text"
          v-model="form.address_1"
          id="address_1"
          class="input"
        />
      </div>
    </div>
    <div class="field">
      <label for="address_2" class="label">Address line 2</label>
      <div class="control">
        <input
          type="text"
          v-model="form.address_2"
          id="address_2"
          class="input"
        />
      </div>
    </div>
    <div class="field">
      <label for="city" class="label">City</label>
      <div class="control">
        <input type="text" v-model="form.city" id="city" class="input" />
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <label for="postal_code" class="label">Postal code</label>
          <div class="control">
            <input
              type="text"
              v-model="form.postal_code"
              id="postal_code"
              class="input"
            />
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label for="country" class="label">Country</label>
          <div class="control">
            <div class="select is-fullwidth">
              <CountryDropdown v-model="form.country_id" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button type="submit" class="button is-info">Add address</button>
        <button
          type="button"
          class="button is-danger"
          @click.prevent="$emit('cancel')"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import CountryDropdown from "@/components/form/CountryDropdown";
export default {
  components: {
    CountryDropdown,
  },
  data() {
    return {
      form: {
        name: "",
        address_1: "",
        address_2: "",
        city: "",
        postal_code: "",
        country_id: "",
        default: true,
      },
    };
  },
  methods: {
    async createAddress() {
      let response = await this.$axios.$post("addresses", this.form);

      this.$emit("created", response.data);
    },
  },
};
</script>
