<template>
  <v-layout wrap>
    <v-flex ma-3>
      <v-icon>mdi-details</v-icon>
      <div class="headline d-inline-block">gifch</div>
    </v-flex>
    <nav-menu :menus="menus"></nav-menu>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/molecules/NavMenu/NavMenu.vue'

export default Vue.extend({
  name: 'Nav',
  components: { NavMenu },
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
