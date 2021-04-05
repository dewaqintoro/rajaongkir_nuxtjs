<template>
  <DashboardPage class="page-appearance">
    <template #sidebar>
      <PreviewWrapper />
    </template>
  </DashboardPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageAppearance',
  layout: 'dashboard',
})
</script>

<style lang="postcss" scoped></style>
