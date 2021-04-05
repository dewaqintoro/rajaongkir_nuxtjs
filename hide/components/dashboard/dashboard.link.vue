<template>
  <div class="dashboard-link">
    <div v-if="isReady" class="link">
      <a :href="page.name" target="_blank" rel="noopener noreferrer">
        https://tenta.ng/{{ page.name }}
      </a>
    </div>
    <button class="button is-small is-base share">Bagikan</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useProfileStore } from '@/store'

export default defineComponent({
  name: 'DashboardLink',
  setup() {
    const profileStore = useProfileStore()
    const page = computed(() => profileStore.mypages)
    const isReady = computed(() => profileStore.isReady)
    return { isReady, page }
  },
})
</script>

<style lang="postcss" scoped>
.dashboard-link {
  @apply flex justify-start items-center self-center;
  .link {
    @apply text-gray-600 text-sm;
  }
  .button.share {
    @apply ml-4;
  }
}
@screen sm {
  .dashboard-link {
    @apply justify-between;
  }
}
@screen md {
  .dashboard-link {
    @apply justify-end;
  }
}
</style>
