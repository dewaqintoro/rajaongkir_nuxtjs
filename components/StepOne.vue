<template>
  <div class="mt-16">
    <div class="px-40">
      <div class="text-center">
        <p class="text-darkblue text-2xl font-bold mb-3">APA ITU KARTU PRAKERJA?</p>
        <hr class="step-hr" />
      </div>
      <div class="text-center mt-8">
        <p>Kartu Prakerja adalah program <b>pengembangan kompetensi berupa bantuan biaya</b> <br />yang ditujukan untuk pencari kerja, pekerja ter-PHK atau pekerja yang membutuhkan peningkatan kompetensi.</p>
      </div>
      <div class="text-center mt-8">
        <button class="border border-darkblue rounded-md px-4 py-1 text-darkblue">Baca lebih lanjut</button>
      </div>
    </div>
    <div class="step-content mt-16 h-full">
      <div class="py-8 text-center">
        <p class="text-darkblue text-2xl font-bold mb-3 mt-4">7 TAHAP PROGRAM KARTU PRAKERJA</p>
        <hr class="step-hr" />
      </div>
      <div class="center item-center text-center pb-12">
        <div class="step-video">
          <video v-if="isVideo" width="540" height="" controls>
            <source src="https://www.prakerja.go.id/videos/7-tahap-kartu-prakerja.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
          </video>
          <img v-else src="https://www.prakerja.go.id/images/7-tahap-kartu-prakerja.png" @click="showVideo()" />
        </div>
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

.step-content {
  background: url("https://www.prakerja.go.id/images/7-steps-background.png");
  background-size: cover;
  position: relative;
  background-position-x: left;
  background-repeat: no-repeat;
  background-color: #e9f2fe;
  min-height: 120px;
}

.step-video {
  width: 540px;
  /* background: cadetblue; */
  margin: auto;
  background: url('https://www.prakerja.go.id/images/7-tahap-kartu-prakerja.png');
  cursor: pointer;
}
</style>