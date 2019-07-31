<template>
  <div class="Nav-menu">
    <nav-item v-for="(menu, n) in menus" :key="n" :item="menu" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import NavItem, { Item } from '@/components/atoms/NavItem/NavItem.vue'

@Component({
  components: {
    NavItem
  }
})
export default class NavMenu extends Vue {
  @Prop({ type: Array, required: true }) private menus!: Item[]
}
</script>

<style lang="scss" scoped>
.Nav-menu {
  width: 100%;
}
</style>
