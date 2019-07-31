<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="searchValue"
      prepend-inner-icon="mdi-magnify"
      label="Search Gifs"
      required
    ></v-text-field>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Search',
  data () {
    return {
      valid: false,
      searchValue: "",
    }
  }
})
</script>
