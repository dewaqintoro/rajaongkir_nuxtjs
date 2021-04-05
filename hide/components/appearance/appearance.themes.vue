<template>
  <div class="blocks themes" align="center">
    <span v-for="item in items" :key="item.id">
      <AppearanceThemesItem :item="item" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppearanceThemes',
  setup() {
    const items = ref([
      {
        id: '1',
        title: 'Default',
        color: '#3d3b3c',
      },
      {
        id: '2',
        title: 'Blue',
        color: '#416ee1',
      },
      {
        id: '3',
        title: 'Red',
        color: '#e14141',
      },
      {
        id: '4',
        title: 'Green',
        color: '#00b252',
      },
      {
        id: '5',
        title: 'Gradient',
        color: 'linear-gradient(180deg, #6e53f4 0%, #fab6c8 100%)',
      },
      {
        id: '6',
        title: 'Gradient',
        color: 'linear-gradient(180deg, #7d8df9 0%, #76edfb 100%)',
      },
      {
        id: '7',
        title: 'Gradient',
        color: 'linear-gradient(180deg, #d6659d 0%, #fc8e6d 100%)',
      },
      {
        id: '5',
        title: 'Gradient',
        color: 'linear-gradient(180deg, #6e53f4 0%, #fab6c8 100%)',
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss" scoped>
.blocks {
  background: #fff;
  box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
  border-radius: 6px;
}
.themes {
  @apply p-1 mt-6;
  @apply flex flex-wrap;
  justify-content: center;
}
</style>
