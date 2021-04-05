<template>
  <div class="about-footer">
    <div class="copyright">
      ©2020 <nuxt-link to="/">Tentang Kita</nuxt-link>. All Rights Reserved.
    </div>
    <div class="early-access">
      <nuxt-link to="/" class="button">
        <span class="text">Ceritakan tentang kamu</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AboutFooter',
})
</script>

<style lang="postcss" scoped>
.about-footer {
  /* @apply p-4 bg-gray-100; */
  @apply text-center text-sm text-gray-500 p-4;
  @apply transition-colors duration-300;
  background: #f9fafb;
  &:hover {
    @apply text-gray-600;
  }
  a:not(.button) {
    @apply underline;
  }
  .copyright {
    @apply mb-2;
  }
}
.button {
  @apply inline-block;
  @apply bg-gray-200 text-gray-500;
  @apply rounded-full text-sm py-1 px-3;
}
</style>
