<template>
  <div class="widget-label">
    <div v-if="title" class="widget-title">{{ title }}</div>
    <WidgetType :text="text" :icon="icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'WidgetLabel',
  props: {
    title: {
      type: String,
      default: '',
    },
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
.widget-label {
  @apply mt-4;
}
.widget-title {
  @apply font-semibold;
}
</style>
