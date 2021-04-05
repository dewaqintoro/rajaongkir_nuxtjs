<template>
  <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-item">
    <div class="text">
      {{ link.text }}
    </div>
    <div class="icon">
      <Fa :icon="['far', 'external-link']" />
    </div>
  </a>
</template>

<script lang="ts">
import { DataLink } from '@/@types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    link: {
      type: Object as PropType<DataLink>,
      required: true,
    },
  },
})
</script>

<style lang="postcss" scoped>
.link-item {
  @apply flex justify-between;
  @apply p-3 bg-gray-200 rounded-md;
  @apply transition-colors duration-300;
  .icon {
    @apply opacity-25 transition-opacity duration-300;
  }
  &:hover {
    @apply bg-gray-300;
    .icon {
      @apply opacity-100;
    }
  }
}
</style>
