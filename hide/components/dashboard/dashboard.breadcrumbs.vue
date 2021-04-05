<template>
  <div v-if="profileReady" class="dashboard-breadcrumbs">
    <template v-for="(item, index) in items">
      <!-- <template v-for="item in items"> -->
      <NuxtLink v-if="item" :key="item.name" :to="item.route" class="item breadcrumb">{{
        item.label
      }}</NuxtLink>
      <div v-else :key="index" class="item separator">/</div>
    </template>
  </div>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { useProfileStore } from '@/store'
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DashboardBreadcrumbs',
  setup() {
    const profileStore = useProfileStore()
    const profile = computed<Profile>(() => profileStore.profile)
    const profileReady = computed(() => profileStore.profileReady)
    const items = computed(() => [
      {
        label: 'Dashboard',
        name: 'dashboard',
        route: {
          path: '#',
        },
      },
      null,
      {
        label: `@` + profile.value.username,
        name: 'widgets',
        route: {
          path: '/dashboard',
        },
      },
      null,
      {
        label: `Tampilan`,
        name: 'tampilan',
        route: {
          path: '/tampilan',
        },
      },
    ])

    return { items, profileReady, profile }
  },
})
</script>

<style lang="postcss" scoped>
.dashboard-breadcrumbs {
  /* @apply grid grid-rows-none gap-2; */
  @apply self-center;
  .item {
    @apply inline-block text-lg font-semibold text-gray-600 mr-2;
    &.nuxt-link-exact-active {
      @apply text-gray-900;
    }
  }
}
</style>
