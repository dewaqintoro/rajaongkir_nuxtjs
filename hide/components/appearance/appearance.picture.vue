<template>
  <div class="block picture">
    <div class="img">
      <img v-if="profileImage" :src="profileImage" alt="Image" />
    </div>
    <div class="picture-right">
      <button class="btn-ganti">Ganti Foto Profil</button>
      <button class="btn-hapus">Hapus</button>
    </div>
  </div>
</template>

<script lang="ts">
import { proxyImage } from '@/utils'
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppearancePicture',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const profileImage = computed<string>(() => {
      const link = props.page.profileImage?.link || ''
      return proxyImage(link, 300)
    })

    return { profileImage }
  },
})
</script>

<style lang="postcss" scoped>
.block {
  background: #fff;
  box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
  border-radius: 6px;
}
.picture {
  @apply flex mt-6 p-4;
  .img {
    border: 2px solid #fff;
    box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
    border-radius: 20px;
    img {
      height: 100px;
      width: 100px;
      border: 2px solid #fff;
      border-radius: 20px;
    }
  }
  .picture-right {
    @apply ml-2;
    .btn-ganti {
      background: #00db65;
      box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
      border-radius: 6px;
      padding: 9px 12px;
      display: block;
      color: #00873e;
      /* font-family: Inter; */
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
    }
    .btn-hapus {
      @apply mt-2;
      background: #9ca3af;
      box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
      border-radius: 6px;
      padding: 9px 12px;
      color: #fff;
      /* font-family: Inter; */
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
    }
  }
}
</style>
