<template>
  <div class="dashboard-header__user">
    <div v-for="page in pages" :key="page._id">
      <button class="icon" @click="pageName(page.name)">
        <img class="imgPages" :src="page.coverImage.link" alt="images" />
      </button>
    </div>
    <button class="icon" @click="createPage">
      <Fa class="iconAdd" :icon="['far', 'plus']" />
    </button>
    <Transition name="drawer">
      <PageCreate v-if="isCreatePage" @close="closeCreate" />
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
// import { Page, Profile } from '@/@types'
import { useProfileStore } from '@/store'

export default defineComponent({
  name: 'DashboardHeaderUser',
  setup(_, { emit }) {
    const profileStore = useProfileStore()
    const pages = computed(() => profileStore.pages)
    const isCreatePage = ref(false)

    return { pages, isCreatePage, pageName, createPage, closeCreate }

    function pageName(name: string) {
      emit('name', name)
    }

    function createPage() {
      isCreatePage.value = true
    }

    function closeCreate() {
      isCreatePage.value = false
    }
  },
})
</script>

<style lang="postcss">
.dashboard-header {
  &__user {
    @apply flex items-center justify-end;
    .icon {
      @apply m-1;
      width: 32px;
      height: 32px;
    }
    .iconAdd {
      color: white;
      background: #9ca3af;
      box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
      border-radius: 999px;
      width: 32px;
      height: 32px;
      padding: 8px;
    }
  }
}
</style>
