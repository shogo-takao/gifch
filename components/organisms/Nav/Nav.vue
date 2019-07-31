<template>
  <v-layout wrap>
    <v-flex ma-3>
      <v-icon>mdi-details</v-icon>
      <div class="headline d-inline-block">gifch</div>
    </v-flex>
    <v-flex mx-3 my-1>
      <Search />
    </v-flex>
    <nav-menu :menus="menus"></nav-menu>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/molecules/NavMenu/NavMenu.vue'
import Search from '@/components/molecules/Search/Search.vue'

export default Vue.extend({
  name: 'Nav',
  components: { NavMenu, Search },
  data () {
    return {
      menus: [
        {
          iconName: "mdi-home",
          name: "ホーム"
        },
        {
          iconName: "mdi-star",
          name: "お気に入り"
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
