<template>
  <v-app class="App">
    <div class="App-nav">
      <Nav />
    </div>
    <v-content class="App-main">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Nav from '~/components/organisms/Nav/Nav.vue'

@Component({
  components: {
    Nav
  }
})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
.App {
  display: flex;

  &-nav {
    width: 300px;
    height: 100vh;
  }

  &-main {
    width: calc(100% - 300px);
    border-left: 1px solid rgb(190, 190, 190);
  }
}
</style>
