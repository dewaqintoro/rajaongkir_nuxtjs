<template>
  <div class="page-single-profile">
    <AboutWrapper v-if="profile" :profile="profile" :page="page" />
    <div v-else-if="!isLoading" class="about-wrapper not-found">
      <!-- <h1 class="heading">Tidak ada apa-apa di sini.</h1> -->
      <h1 class="heading">Tentang apa ini?</h1>
      <p class="description mb-4">
        Halaman ini tidak bercerita tentang apapun. <em>Link</em> yang kamu tuju mungkin bermasalah,
        atau halaman tersebut telah dihapus.
      </p>
      <NuxtLink to="/" class="button">
        <span class="icon mr-1"><Fa :icon="['far', 'home']" /></span>
        <span class="text">Kembali ke beranda</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { useProfileStore } from '@/store'
import {
  computed,
  defineComponent,
  // onMounted,
  ref,
  // ref,
  useAsync,
  useContext,
  useMeta,
  // useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageSingleProfile',
  setup() {
    const { $axios, route } = useContext()
    const profileStore = useProfileStore()
    const username = route.value.params.username
    useAsync(() => profileStore.getPagesByName(username))
    const isLoading = ref(true)

    const profile = useAsync<Profile>(() => getProfileByUsername())

    const page = computed(() => profile.value?.pages?.[0] || {})

    useMeta(() => ({
      title: `Tentang ${profile.value?.name || 'Apa?'}`,
    }))

    return { isLoading, profile, page }

    async function getProfileByUsername() {
      try {
        const username = route.value.params.username
        const url = `${process.env.tautanUrl}/profiles/${username}`
        const response = await $axios.$get(url)

        isLoading.value = false

        return response.data
      } catch (error) {
        // console.log(error)
      }
    }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.page-single-profile {
  @apply min-h-screen;
}
.about-wrapper {
  @apply mx-auto overflow-hidden;
  max-width: 500px;
  &.not-found {
    @apply h-screen flex flex-col items-center justify-center;
    @apply p-4 text-white text-center;
    .heading {
      @apply font-bold text-xl mb-4;
    }
  }
}
@media screen and (min-width: 516px) {
  .page-single-profile {
    @apply flex items-center;
    @apply py-4;
  }
  .about-wrapper {
    @apply rounded-2xl;
  }
}
@media screen and (max-width: 515px) {
  .page-single-profile {
    @apply bg-gray-100;
  }
}
</style>
