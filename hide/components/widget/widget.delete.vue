<template>
  <AppModal title="" :show-header="false" :size="size" @close="$emit('close')">
    <div class="container">
      <div class="wrapper">
        <div class="text-left">
          <div class="title font-sans">Hapus Widget</div>
          <div class="text font-sans">
            Apakah kamu yakin untuk menghapus? Item tidak bisa dikembalikan setelah dihapus.
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
            <button
              @click="doDelete"
              class="btn save text-white font-bold py-2 px-4 focus:outline-none"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WidgetDelete',
  props: {
    item: {
      type: Object,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { $cookies, $axios } = useContext()
    const isLoading = ref(true)
    const size = ref('small')

    return {
      size,
      isLoading,
      doDelete,
    }

    async function doDelete() {
      const pageId = props.page._id
      const widgetId = props.item._id

      try {
        const token = $cookies.get('_t')
        const headers = { Authorization: `Bearer ${token}` }
        const response = await $axios.$delete(
          `${process.env.tautanUrlTest}/pages/widget/${pageId}`,
          { data: { widgets: [widgetId] }, headers }
        )
        console.log('response', response)
      } catch (error) {
        console.log('eror => ', error)
      }
    }
  },
})
</script>

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    max-width: 550px;
    @apply px-4 py-8;
    .title {
      color: #111827;
      /* font-size: 32px; */
      /* font-family: Inter; */
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      margin-bottom: 12px;
    }
    .text {
      /* font-family: Circular Std; */
      font-style: normal;
      font-weight: 450;
      font-size: 16px;
      line-height: 150%;
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
}
</style>
