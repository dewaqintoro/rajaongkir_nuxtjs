<template>
  <section v-if="isReady" class="about-header">
    <div class="about-cover">
      <img v-if="coverImage" :src="coverImage" alt="Cover" />
    </div>
    <div class="about-image">
      <img v-if="profileImage" :src="profileImage" alt="Image" />
    </div>
    <div class="about-info">
      <div class="name">
        <strong>{{ page.title }}</strong>
      </div>
      <div class="username">@{{ page.name }}</div>
      <div class="location">
        <span class="icon"><Fa :icon="['far', 'map-marker-alt']" /></span>
        <span class="label">{{ page.location }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { proxyImage } from '@/utils'
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { useProfileStore } from '@/store'

export default defineComponent({
  name: 'AboutHeader',
  props: {
    profile: {
      type: Object as PropType<Profile>,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const profileStore = useProfileStore()
    const isReady = computed(() => profileStore.isReady)
    const profileImage = computed<string>(() => {
      const link = props.page.profileImage?.link || ''
      return proxyImage(link, 300)
    })

    const coverImage = computed<string>(() => {
      const link = props.page.coverImage?.link || ''
      return proxyImage(link, 640)
    })

    const myusername = computed(() => props.page.profile.username || '')

    return { profileImage, coverImage, myusername, isReady }
  },
})
</script>

<style lang="postcss" scoped>
.about-header {
  @apply flex flex-col items-center;
  /* @apply bg-gray-100; */
  background: #f9fafb;
  .about-cover {
    height: 200px;
    width: 640px;
  }
  .about-image {
    @apply rounded-2xl overflow-hidden;
    @apply border-2 border-white shadow-lg;
    height: 100px;
    width: 100px;
    margin-top: -50px;
    margin-bottom: 16px;
  }
  .about-cover,
  .about-image {
    img {
      @apply h-full w-full bg-gray-300;
      @apply object-cover object-center;
    }
  }
  .about-info {
    @apply text-center mb-10;
    .username,
    .location {
      @apply text-gray-600;
    }
  }
}
</style>
