<template>
  <div>
    <span v-for="widget in widgets" :key="widget._id">
      <div class="form">
        <div class="field">
          <Fa class="icon" :icon="['far', 'arrows-alt']" />
          <div class="w-full">
            <input v-model="textLink" placeholder="Judul" class="input" />
            <div class="right-0 inputLabel" align="right">Judul</div>
          </div>
          <Fa class="icon" :icon="['far', 'trash-alt']" />
        </div>
        <div class="field">
          <div class="w-full px-10">
            <input v-model="urlLink" placeholder="URL link" class="input" />
            <div class="right-0 inputLabel" align="right">URL</div>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { Page } from '@/@types'
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'WidgetFormLink',
  props: {
    page: {
      type: Object as PropType<Page>,
      required: false,
    },
  },
  setup(props) {
    const textLink = ref('')
    const urlLink = ref('')
    const widgets = computed(() => props.page?.widgets)

    return { textLink, urlLink, widgets }
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
