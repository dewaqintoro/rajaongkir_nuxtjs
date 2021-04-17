<template>
  <div>
    <h1>Quran {{surah.name_latin}}</h1>
    <button @click="cek()">cek</button>
    <p class="text-2xl" v-for="(x, index) in surah.text" :key="index">{{x}}</p>
  </div>
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

    return {
      surah,
      cek
    }

    async function getSurah(){
      const resp = await import('~/data/1.json')
      return resp[1]
    }

    async function cek(){
      console.log(surah?.value)
    }
  }
}
</script>