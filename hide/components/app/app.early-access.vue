<template>
  <div class="early-access">
    <NuxtLink v-if="finalShowEarlyAccess" to="/" class="button animated bounce-in-up">
      <span class="icon"><Fa :icon="['far', 'paper-plane']" /></span>
      <span class="text">Ceritakan tentang kamu</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  // onBeforeUpdate,
  onMounted,
  // onUpdated,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppEarlyAccess',
  setup() {
    const { route } = useContext()
    const showEarlyAccess = ref<boolean>(false)
    const isNotHome = computed(() => route.value.name !== 'index')
    const finalShowEarlyAccess = computed(() => showEarlyAccess.value && isNotHome.value)

    onMounted(() => {
      initEarlyAccess()
    })

    // onBeforeUpdate(() => {
    //   showEarlyAccess.value = false
    // })

    // onUpdated(() => {
    //   initEarlyAccess()
    // })

    return { finalShowEarlyAccess }

    function initEarlyAccess() {
      setTimeout(() => {
        showEarlyAccess.value = true
      }, 3000)
    }
  },
})
</script>

<style lang="postcss" scoped>
.early-access {
  @apply fixed w-full top-0 z-10 py-4;
  @apply flex justify-center;
}
.button {
  @apply inline-flex rounded-full;
  .icon {
    @apply mr-2;
  }
}
</style>
