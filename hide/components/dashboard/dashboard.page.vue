<template>
  <div class="dashboard-page">
    <div class="main-area">
      <slot> Main </slot>
    </div>
    <div class="sidebar-area">
      <DashboardLink />
      <slot name="sidebar"> Sidebar </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DashboardPage',
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
