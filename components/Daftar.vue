<template>
  <div class="m-auto center mt-8">
    <div class="text-center">
      <p class="text-darkblue text-2xl font-bold mb-3">CARA DAFTAR</p>
      <hr class="step-hr" />
      <p class="py-8 text-darkblue">Pelajari dan ikuti panduan di bawah ini untuk mengikuti program</p>
    </div>
    <div class="w-1/2 m-auto px-20">
      <div class="flex">
        <img class="daftar-img" src="https://www.prakerja.go.id/images/step-01-register.png" />
        <div>
          <p class="text-darkred font-bold text-lg">LANGKAH 1</p>
          <p class="text-darkblue font-bold text-lg my-6">Daftarkan dirimu</p>
          <p>Sebelum daftar, pastikan kamu:</p>
          <ul>
            <li class="flex">
              <img class="w-4 h-4 my-auto mr-4" src="https://www.prakerja.go.id/images/checklist.png"/>
              WNIa
            </li>
            <li class="flex">
              <img class="w-4 h-4 my-auto mr-4" src="https://www.prakerja.go.id/images/checklist.png"/>
              Minimal berusia 18 tahun
            </li>
            <li class="flex">
              <img class="w-4 h-4 my-auto mr-4" src="https://www.prakerja.go.id/images/checklist.png"/>
              Sedang tidak menempuh pendidikan formal
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center">
        <img class="m-auto mt-8 daftar-img" src="https://www.prakerja.go.id/images/step-01-verification.png" />
        <p class="mt-8 text-red-500 font-semibold">Setelah daftar, data kamu akan kami verifikasi</p>
      </div>
      <div class="flex mt-12">
        <div class="pr-4">
          <p class="text-darkred font-bold text-lg">LANGKAH 2</p>
          <p class="text-darkblue font-bold text-lg my-6">Tes Motivasi dan Kemampuan Dasa</p>
          <p>Tes ini bertujuan untuk mengenali kompetensi dan potensi yang kamu miliki. Penggunaan alat bantu corat-coret seperti kertas, pensil/pulpen diperbolehkan untuk menyelesaikan soal.</p>
        </div>
        <div class="my-auto">
          <img class="daftar-img" src="https://www.prakerja.go.id/images/step-02-interest.png" />
        </div>
      </div>
      <div class="flex mt-12">
        <div class="my-auto">
          <img class="daftar-img" src="https://www.prakerja.go.id/images/step-03-course.png" />
        </div>
        <div class="pl-2">
          <p class="text-darkred font-bold text-lg">LANGKAH 3</p>
          <p class="text-darkblue font-bold text-lg my-6">Pilih Pelatihan yang Kamu Inginkan</p>
          <p>Pastikan kamu mengikuti dan menyelesaikan semua kelas pelatihan yang kamu pilih.</p>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex">
          <div class="pr-4">
            <p class="text-darkred font-bold text-lg">LANGKAH 4</p>
            <p class="text-darkblue font-bold text-lg my-6">Tunggu Apalagi?</p>
            <p>Belajar gratis, dapat insentif pula. Dengan Kartu Prakerja, raih masa depan lebih cerah!</p>
          </div>
          <div class="my-auto">
            <img class="daftar-img" src="https://www.prakerja.go.id/images/step-04-sign-up.png" />
          </div>
        </div>
        <div class="mt-8">
          <button class="border border bg-darkblue rounded-md px-4 py-1 text-white">Mulai Sekarang</button>
          <button class="border border-darkblue rounded-md px-4 py-1 text-darkblue ml-4">Lihat FAQ</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.step-hr {
  border: 1px solid #ffd629;
  width: 100px;
  margin: auto;
}

.daftar-img {
  max-height: 180px;
  max-width: 200px;
}
</style>