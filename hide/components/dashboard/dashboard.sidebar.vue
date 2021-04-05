<template>
  <div class="dashboard-sidebar">
    <template v-for="item in items">
      <NuxtLink :key="item.name" :to="item.route">
        <img v-if="item.imageIcon" :src="item.imageIcon" />
        <span v-if="item.icon" class="icon"><Fa :icon="['far', `${item.icon}`]" /></span>
        {{ item.label }}
      </NuxtLink>
    </template>
    <div class="dashboard-sidebar__bottom">
      <NuxtLink to="/dashboard/suggest">
        <span class="icon"><Fa :icon="['far', 'lightbulb-on']" /></span>
        Suggest Idea
      </NuxtLink>
      <NuxtLink to="/dashboard/bantuan">
        <span class="icon"><Fa :icon="['far', 'question-circle']" /></span>
        Bantuan
      </NuxtLink>
      <div class="dashboard-sidebar__bottom__user">
        Bian Pratama <span class="icon"><Fa :icon="['far', 'ellipsis-v']" /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DashboardSidebar',
  setup() {
    const items = computed(() => [
      {
        label: 'Dashboard',
        name: 'dashboard',
        route: {
          path: '/dashboard',
        },
        imageIcon: require('~/assets/images/icon/home.svg'),
      },
      {
        label: 'Tampilan',
        name: 'tampilan',
        route: {
          path: '/tampilan',
        },
        icon: 'paint-brush',
      },
      {
        label: 'Analitik',
        name: 'analitik',
        route: {
          path: '/page/appearance',
        },
        icon: 'analytics',
      },
      {
        label: 'Paket',
        name: 'paket',
        route: {
          path: '/dashboard/paket',
        },
        icon: 'credit-card',
      },
    ])

    return { items }
  },
})
</script>

<style lang="postcss" scoped>
.dashboard-sidebar {
  position: relative;
  a {
    @apply flex items-center;
    color: #9ca3af;
    padding: 12px 17px;

    img,
    .icon {
      margin-right: 16px;
    }

    &:hover {
      background: #f3f4f6;
    }

    &.nuxt-link-active {
      background: #1f2937;
      border-radius: 6px;
      color: #e5e7eb;
    }
  }

  &__bottom {
    @apply w-full;
    position: absolute;
    bottom: 0;

    &__user {
      @apply flex items-center justify-between bg-white text-sm cursor-pointer;
      padding: 12px 16px;
      box-shadow: 1px 2px 6px rgba(195, 199, 204, 0.5);
      border-radius: 6px;
    }
  }
}
</style>
