<template>
  <section v-if="isReady" class="about-content">
    <div class="widgets">
      <WidgetItem v-for="widget in pages.widgets" :key="widget._id" :widget="widget" />
    </div>
  </section>
</template>

<script lang="ts">
import { useProfileStore } from '@/store'
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AboutContent',
  setup() {
    const profileStore = useProfileStore()
    const isReady = computed(() => profileStore.isReady)
    const pages = computed(() => profileStore.mypages)
    return { pages, isReady }
  },
})
</script>

<style lang="postcss" scoped>
.about-content {
  @apply px-4 pb-4;
  /* @apply bg-gray-100; */
  background: #f9fafb;
  .widgets {
  }
  .widget {
    @apply mb-4;
  }
}
</style>
