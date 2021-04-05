<template>
  <div class="section px-40">
    <Navbar />
    <div class="w-1/2 h-full center items-center mt-20">
      <div class="px-8">
        <p class="text-darkblue text-3xl font-bold">Tingkatkan Kompetensi Kerja <br/>dengan Kartu Prakerja</p>
        <p class="text-xl text-darkblue mt-4">Galau cari kerja? Pengen lebih kompeten?<br/>Mau ngembangin diri tanpa pusing mikirin biaya? <br/>Bekali dirimu dengan Kartu Prakerja dan</p>
        <p class="font-bold text-2xl text-darkblue leading-8">#SiapDariSekarang</p>
        <div class="flex mt-6">
          <button class="bg-darkblue text-white py-2 px-4 rounded-md">Buat Akun</button>
          <button class="py-2 px-4 rounded-md border-2 border-darkblue text-darkblue ml-6">Cara Daftar</button>
        </div>
        <p class="italic text-darkblue mt-2 text-sm">*Program Kartu Prakerja merupakan program ramah difabel .<br/>Difabel dianjurkan untuk mendaftar dan mengikuti Program <br/>Kartu Prakerja.</p>
      </div>
      <div class="hero-content mt-16 h-full"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Hero',
  components: {
    Navbar,
  }
}
</script>


<style scoped>
.section {
  /* height: 100%; */
  min-height: 620px;
  background: url("https://www.prakerja.go.id/images/home-illustration.png");
  background-position-x: right;
  background-repeat: no-repeat;
}

.hero-content {
  background: url("https://www.prakerja.go.id/images/dots.png");
  background-size: auto 110px;
  background-position-x: left;
  background-repeat: no-repeat;
  min-height: 120px;
}
</style>