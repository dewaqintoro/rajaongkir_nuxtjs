<template>
  <div class="apparance-page">
    <div class="main-area">
      <slot>
        <Appearance />
      </slot>
    </div>
    <div class="sidebar-area">
      <DashboardLink />
      <PreviewWrapper />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageTampilan',
  layout: 'dashboard',
  // middleware: ['auth'],
})
</script>

<style lang="postcss" scoped>
.apparance-page {
  @apply grid gap-4 grid-rows-1 grid-cols-1;
}
.sidebar-area {
  @apply hidden;
}
@screen sm {
  .apparance-page {
    @apply grid-cols-2 grid-rows-1;
    grid-template-columns: minmax(300px, 1fr) minmax(0, 400px);
  }
  .sidebar-area {
    @apply block;
  }
}
</style>
