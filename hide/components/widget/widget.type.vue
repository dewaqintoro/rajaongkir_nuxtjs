<template>
  <div class="widget-type">
    <span class="icon">
      <Fa :icon="['far', icon]" />
    </span>
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'WidgetType',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'dice-d4',
    },
  },
})
</script>

<style lang="postcss" scoped>
.widget-type {
  @apply text-gray-600;
  .icon {
    @apply mr-1;
  }
}
</style>
