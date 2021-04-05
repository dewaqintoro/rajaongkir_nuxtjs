<template>
  <div ref="previewWrapperEl" class="preview-wrapper">
    <div class="preview-inner">
      <ClientOnly>
        <AboutWrapper v-if="isReady" :profile="profile" :page="page" :style="aboutWrapperStyles" />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { useProfileStore } from '@/store'
import { computed, defineComponent, onMounted, reactive, ref } from '@vue/composition-api'
import { useResizeObserver } from '@vueuse/core'

export default defineComponent({
  name: 'PreviewWrapper',
  setup() {
    const profileStore = useProfileStore()

    const profile = computed<Profile>(() => profileStore.profile)
    // const page = computed<Page>(() => profileStore.pages[0])
    const page = computed(() => profileStore.mypages)

    const previewSize = reactive({
      height: 0,
      width: 0,
    })
    const scale = computed(() => Math.min(previewSize.width / 500, previewSize.height / 700))

    const previewWrapperEl = ref(null)
    const aboutWrapperStyles = computed(() => ({
      // height: '700px',
      width: '500px',
      transform: `translateX(-50%) translateY(-50%) scale(${scale.value}) translate3d(0px, 0px, 0px)`,
    }))

    const isReady = computed(() => profile.value && page.value)

    onMounted(() => {
      useResizeObserver(previewWrapperEl, (entries) => {
        const entry = entries[0]
        const { width, height } = entry.contentRect
        previewSize.height = height
        previewSize.width = width
      })
    })

    return {
      profile,
      page,
      isReady,
      previewWrapperEl,
      previewSize,
      scale,
      aboutWrapperStyles,
    }
  },
})
</script>

<style lang="postcss" scoped>
.preview-wrapper {
  @apply relative h-full overflow-hidden px-2;
  .preview-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    opacity: 1;
  }
  ::v-deep .about-wrapper {
    @apply bg-white border rounded-xl overflow-hidden mx-auto;
    box-shadow: var(--shadow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    /* transform: translateY(-50%) translateX(-50%) translateZ(0); */
    .about-cover {
      @apply w-full;
    }
  }
}
</style>
