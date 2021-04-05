<template>
  <div class="m-auto pt-16 h-full w-2/3">
    <div class="flex px-16">
      <div class="w-1/2 pr-4">
        <video v-if="isVideo" width="540" height="" controls>
          <source src="https://www.prakerja.go.id/videos/prakerja-pendaftaran.mp4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
        <img v-else @click="showVideo()" class="shadow w-full h-full" src="https://www.prakerja.go.id/images/3-langkah-mudah.png" />
      </div>
      <div class="w-1/2 pl-4">
        <p class="text-darkblue font-bold text-xl mt-3">Keuntungan Kartu Prakerja</p>
        <p class="mt-8">Jika kamu menyelesaikan pelatihan baik <b>online</b> maupun <b>offline</b>, kamu akan mendapatkan <b>sertifikat</b> dan <b>insentif</b>.</p>
        <button @click="showVideo()" class="text-white bg-darkblue border rounded-sm py-1 px-3 mt-8">Lihat Video</button>
      </div>
    </div>
    <div class="m-auto mt-4 ombak">
      <!-- <img src="https://www.prakerja.go.id/images/squiggle.png"/> -->
    </div>
    <div class="py-8 text-center">
      <div>
        <p class="text-darkblue text-2xl font-bold mb-3 mt-4">Tren Lowongan di Indonesia</p>
        <hr class="step-hr" />
      </div>
      <div class="my-8">
        <p>Tren lowongan di Indonesia akan membantu kamu dalam <b>memilih pelatihan</b> di <br/>Prakerja agar <b>sesuai kebutuhan pasar</b> di Indonesia</p>
      </div>
      <div class="text-center">
        <button class="border border-darkblue bg-darkblue rounded-md px-4 py-1 text-white">Cek Tren</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  name: 'StepOne',
  setup(){
    var isVideo = ref(false)

    return { isVideo, showVideo }
    function showVideo() {
      isVideo.value = true
    }
  }
}
</script>

<style scoped>
.step-hr {
  border: 1px solid #ffd629;
  width: 100px;
  margin: auto;
}

.ombak {
  background: url('https://www.prakerja.go.id/images/squiggle.png');
  background-position-x: right;
  height: 100%;
  min-height: 100px;
  background-repeat: no-repeat;
}

.shadow {
  cursor: pointer;
}
</style>