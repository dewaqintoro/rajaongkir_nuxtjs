<template>
  <div class="dashboard-page">
    <div class="main-area">
      <slot>
        <DashboardWidgets :page="page" />
      </slot>
    </div>
    <div class="sidebar-area">
      <DashboardLink />
      <PreviewWrapper />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useProfileStore } from '@/store'

export default defineComponent({
  name: 'PageDashboard',
  layout: 'dashboard',
  // middleware: ['auth'],
  setup() {
    const profileStore = useProfileStore()
    const page = computed(() => profileStore.mypages)

    return { page }
  },
})
</script>

<style lang="postcss" scoped>
.dashboard-page {
  @apply grid gap-4 grid-rows-1 grid-cols-1;
}
.sidebar-area {
  @apply hidden;
}
@screen sm {
  .dashboard-page {
    @apply grid-cols-2 grid-rows-1;
    grid-template-columns: minmax(300px, 1fr) minmax(0, 400px);
  }
  .sidebar-area {
    @apply block;
  }
}
</style>
