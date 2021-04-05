<template>
  <component :is="widgetType" :widget="widget" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { WidgetItem, WidgetType } from '@/@types'
import WidgetLink from '../widgets/link'
import WidgetLinks from '../widgets/links'

export default defineComponent({
  name: 'WidgetItem',
  components: {
    WidgetLink,
    WidgetLinks,
  },
  props: {
    widget: {
      type: Object as PropType<WidgetItem>,
      required: true,
    },
  },
  setup(props) {
    const widgetType = computed(() => {
      const type = props.widget?.type as WidgetType
      return `widget-${type.handle}`
    })
    return { widgetType }
  },
})
</script>

<style lang="postcss" scoped></style>
