<template>
  <v-flex my-4 mx-3 class="d-flex align-center">
    <v-icon class="NavItem-iconName mr-2">{{ item.iconName }}</v-icon>
    <div class="subtitile-1 d-inline-block NavItem-name">{{ item.name }}</div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PropType } from 'vue'

export interface Item {
  iconName: String,
  name: String
}

@Component
export default class NavItem extends Vue {
  @Prop(Object) readonly item!: Item
}
</script>
