<template>
  <div v-if="isReady" class="wrapper">
    <div class="title">Profil</div>
    <AppearanceAbout :page="page" />
    <AppearancePicture :page="page" />
    <AppearanceCover :page="page" />
    <AppearanceThemes :page="page" />
  </div>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { useProfileStore } from '@/store'
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Appearance',
  setup() {
    const profileStore = useProfileStore()
    const profile = computed<Profile>(() => profileStore.profile)
    const page = computed(() => profileStore.mypages)
    const isReady = computed(() => profileStore.isReady)

    return { profile, page, isReady }
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  max-width: 75%;
  .title {
    /* font-family: Inter; */
    @apply mb-4;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    color: #111827;
  }
}
</style>
