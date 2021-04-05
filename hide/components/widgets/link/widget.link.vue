<template>
  <a :href="widgetLink" target="_blank" rel="noopener noreferrer" class="widget widget-link">
    {{ widgetText }}
  </a>
</template>

<script lang="ts">
import { WidgetLink } from '@/@types'
import { computed, defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'WidgetLink',
  props: {
    widget: {
      type: Object as PropType<WidgetLink>,
      required: true,
    },
  },
  setup(props) {
    const widgetText = computed(() => props.widget?.data?.text)
    const widgetLink = computed(() => props.widget?.data?.url)
    return { widgetText, widgetLink }
  },
})
</script>

<style lang="postcss" scoped>
.widget-link {
  @apply block py-4 px-4 rounded-md text-center;
  @apply shadow-base bg-white;
}
</style>
