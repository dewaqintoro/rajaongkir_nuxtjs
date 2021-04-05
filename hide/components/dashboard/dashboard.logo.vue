<template>
  <div class="dashboard-logo">
    <img src="~/assets/images/logo.png" alt="Tentang Kita logo" class="logo-mark" />
    <div class="logo-type">
      <div>Tentang</div>
      <div>Kita</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DashboardLogo',
})
</script>

<style lang="postcss" scoped>
.logo {
  &-type {
    @apply text-xs font-semibold;
    color: #374151;
    line-height: 120%;
  }
  &-mark {
  }
}
@screen sm {
  .logo-type {
    @apply hidden;
  }
}
@screen md {
  .logo-type {
    @apply block;
  }
}
</style>
