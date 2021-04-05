<template>
  <AppModal title="" :show-header="false" :size="size" @close="$emit('close')">
    <div class="">
      <div class="title font-sans">Add Widget</div>
      <hr />
      <div class="wrapper">
        <div class="text-left">
          <div class="widget">
            <div class="linkTitle">
              <button>Link title</button>
            </div>
            <div class="textLeft">
              <Fa class="icon" :icon="['far', 'text']" /><span class="ml-2">Link</span>
            </div>
          </div>
        </div>

        <div class="flex mt-6">
          <div class="flex buttom">
            <button
              class="btn cancel text-black font-bold py-2 px-4 focus:outline-none mr-1"
              @click="$emit('close')"
            >
              Kembali
            </button>
          </div>
          <div class="w-full buttom" align="right">
            <button class="btn save text-white font-bold py-2 px-4 focus:outline-none">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WidgetCreate',
  setup() {
    const isLoading = ref(true)
    const size = ref('small')

    return {
      size,
      isLoading,
    }
  },
})
</script>

<style lang="postcss" scoped>
.title {
  @apply px-4 py-4;
  color: #111827;
  /* font-size: 32px; */
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
}
.wrapper {
  max-width: 550px;
  @apply px-4 py-8;
  .widget {
    @apply px-4 pt-4 pb-2;
    background: #fff;
    box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
    border-radius: 6px;
    .linkTitle {
      @apply my-10;
      background: #f6f6f6;
      border-radius: 6px;
      text-align: center;
      padding: 10px;
    }
    .textLeft {
      color: #999;
    }
  }
  .cancel {
    background: white;
  }
  .save {
    background: #1f2937;
    box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
    border-radius: 6px;
  }
}
</style>
