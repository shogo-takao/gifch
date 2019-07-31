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
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  valid: boolean = false
  searchValue: string = ""
}
</script>
