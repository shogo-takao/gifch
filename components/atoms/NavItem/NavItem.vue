<template>
  <v-flex my-4 mx-3 class="d-flex align-center">
    <v-icon class="NavItem-iconName mr-2">{{ item.iconName }}</v-icon>
    <div class="subtitile-1 d-inline-block NavItem-name">{{ item.name }}</div>
  </v-flex>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export interface Item {
  iconName: String,
  name: String
}

export default Vue.extend({
  name: 'NavItem',
  props: {
    item: {
      type: Object as PropType<Item>
    }
  }
})
</script>
