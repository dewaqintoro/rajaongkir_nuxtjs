<template>
  <div class="footer mt-16 py-12 bg-primary text-white">
    <div class="w-2/3 flex center item-center mx-auto">
      <div class="w-2/3 flex">
        <div class="pl-4 pr-16">
          <p class="font-semibold text-xl">Kementerian Koordinator Bidang Perekonomian Republik Indonesia</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'Item',
  setup(){

    return { }
  }
}
</script>

<style scoped>
.footer img {
  height: 40px;
  width: 40px;
}
.footer ul li{
  margin-bottom: 1rem;
}
</style>