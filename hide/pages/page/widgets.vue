<template>
  <DashboardPage class="page-widgets">
    <template #sidebar>
      <PreviewWrapper />
    </template>
  </DashboardPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageWidgets',
  layout: 'dashboard',
})
</script>

<style lang="postcss" scoped></style>
