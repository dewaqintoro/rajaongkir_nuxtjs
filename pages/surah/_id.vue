<template>
  <span>
    <div v-if="surah">
      <nuxt-link to="/quran">
        Quran
      </nuxt-link>
      <br/>
      <button @click="cek()">cek</button>
      <p class="text-2xl font-arabic" v-for="(x, index) in surah.text" :key="index">{{x}}</p>
    </div>
  </span>
</template>
<script>
import { ref, useAsync, useContext } from '@nuxtjs/composition-api'
// import axios from 'axios'
export default {
  name: 'Surah',
  setup(){
    const { route } = useContext()
    const idParams = route.value?.params?.id

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
      const resp = await import(`~/data/surah/${idParams}.json`)
      // console.log(resp[idParams])
      return resp[idParams]
    }

    async function getAllSurah(){
      const resp = await import('~/data/surah-info.json')
      // console.log(resp)
      return resp.surah_info
    }

    async function cek(){
      // console.log(allSurah?.value)
      console.log('idParams', idParams)
    }
  }
}
</script>

<style scoped>

@font-face {
  font-family: "lpmq";
  src: url(/fonts/lpmq.otf) format("opentype");
  font-display: swap;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.font-arabic{
  font-family: "lpmq", Arial, sans-serif;
  line-height: 2;
}

</style>