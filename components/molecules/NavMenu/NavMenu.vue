<template>
  <div class="Nav-menu">
    <nav-item v-for="(menu, n) in menus" :key="n" :item="menu" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import NavItem, { Item } from '@/components/atoms/NavItem/NavItem.vue'

export default Vue.extend({
  name: 'NavMenu',
  components: { NavItem },
  props: {
    menus: Array as PropType<Item[]>
  }
})
</script>

<style lang="scss" scoped>
.Nav-menu {
  width: 100%;
}
</style>
