<template>
  <div class="about-wrapper">
    <AboutHeader :profile="profile" :page="page" />
    <AboutContent />
    <AboutFooter />
  </div>
</template>

<script lang="ts">
import { Profile } from '@/@types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'AboutWrapper',
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
})
</script>

<style lang="postcss" scoped>
.about-wrapper {
  @apply mt-4;
}
</style>
