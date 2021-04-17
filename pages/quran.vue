<template>
  <span>
    <button @click="cek()">cek</button>
    <hr/>
    <div v-if="allSurah">
        <p class="text-2xl" v-for="(x, index) in allSurah" :key="index">
          <nuxt-link :to="'/surah/'+x.index">
            {{x.latin}}
          </nuxt-link>
        </p>
    </div>
  </span>
</template>
<script>
import { ref, useAsync } from '@nuxtjs/composition-api'
import axios from 'axios'
export default {
  name: 'Quran',
  setup(){
    const selectedCity = ref('')
    const asalCity = ref('')
    const surah = useAsync(async () => await getSurah())
    const allSurah = useAsync(async () => await getAllSurah())

    return {
      surah,
      allSurah,
      cek
    }

    async function getSurah(){
      const resp = await import('~/data/surah/1.json')
      return resp[1]
    }

    async function getAllSurah(){
      const resp = await import('~/data/surah-info.json')
      // console.log(resp)
      return resp.surah_info
    }

    async function cek(){
      console.log(allSurah?.value)
    }
  }
}
</script>