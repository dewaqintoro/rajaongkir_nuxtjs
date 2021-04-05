<template>
  <div class="footer mt-16 py-12 bg-primary text-white">
    <div class="w-2/3 flex center item-center mx-auto">
      <div class="w-2/3 flex">
        <img src="https://www.prakerja.go.id/images/icon-garuda.png" />
        <div class="pl-4 pr-16">
          <p class="font-semibold text-xl">Kementerian Koordinator Bidang Perekonomian Republik Indonesia</p>
          <p class="my-6">
            <b>Layanan Contact Center Prakerja</b><br/>
            Call Center : 08001503001<br/>
            Formulir Pengaduan - <a href="#">Link</a>
            Live Chat - <a href="#">Link</a>
          </p>
          <p>
            Jam operasional Contact Center:<br/>
            Hari Senin - Minggu, Pukul 08.00 - 20.00 WIB
          </p>
          <!-- <div class="mt-8">
            <i class="fab fa-instagram text-4xl text-white"></i>
            <i class="far fa-envelope text-4xl text-white ml-3"></i>
          </div> -->
          <div class="mt-2">
            Contact Us
            <span class="ml-4">
              <a href="#"><b>instagram</b></a> |
              <a href="#"><b>Pesan</b></a>
            </span>
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-16">
        <ul>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Hubungi Kami</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Syarat & Ketentuan</a></li>
          <li><a href="#">Kebijakan Privasi</a></li>
          <li><a href="#">Press Release</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'Footer',
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