<template>
  <div class="page-page">Widgets</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PagePage',
  layout: 'dashboard',
  middleware(context) {
    context.redirect('/page/widgets')
  },
})
</script>

<style lang="postcss" scoped></style>
