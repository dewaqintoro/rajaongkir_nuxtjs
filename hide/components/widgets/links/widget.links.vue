<template>
  <div class="widget widget-links">
    <div class="links">
      <LinkItem v-for="(link, index) in widgetLinks" :key="index" :link="link" />
    </div>
    <WidgetLabel :title="widgetTitle" text="Links" icon="link" />
  </div>
</template>

<script lang="ts">
import { WidgetLinks } from '@/@types'
import { computed, defineComponent, PropType } from '@vue/composition-api'
import LinkItem from './links.link.vue'

export default defineComponent({
  name: 'WidgetLinks',
  components: {
    LinkItem,
  },
  props: {
    widget: {
      type: Object as PropType<WidgetLinks>,
      required: true,
    },
  },
  setup(props) {
    const widgetLinks = computed(() => props.widget?.data?.links)
    const widgetTitle = computed(() => props.widget?.data?.title)
    return { widgetLinks, widgetTitle }
  },
})
</script>

<style lang="postcss" scoped>
.widget-links {
  @apply block p-4 rounded-md;
  @apply shadow-base bg-white;
  .links {
    @apply mb-4;
  }
  .link-item {
    &:not(:last-child) {
      @apply mb-2;
    }
  }
}
</style>
