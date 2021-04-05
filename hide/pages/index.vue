<template>
  <div class="page-home">
    <div class="coming-wrapper">
      <div class="logo">
        <img src="~/assets/images/logo.png" alt="Tentang Kita logo" />
      </div>
      <div class="content">
        <p>Halo,</p>
        <p>
          <strong>Tentang Kita</strong> adalah layanan <em>bio link</em> atau
          <em>landing page</em> sederhana yang dapat menjadi tempatmu menaruh semua
          <em>link</em> tentang kamu atau bisnismu.
        </p>
        <p>
          Saat ini kami sedang melakukan percobaan layanan untuk beberapa relasi terdekat kami,
          sembari terus memastikan layanan kami akan dapat memberikan yang terbaik untuk kamu.
        </p>
        <p>
          Silahkan mengisi formulir di bawah ini untuk membantu kami memahami kebutuhan kamu. Dan
          kami akan mengundang kamu untuk mencoba layanan kami sebelum rilis untuk publik.
        </p>
        <a
          href="https://airtable.com/shrWy4pNiHktZlDjX"
          target="_blank"
          rel="noopener noreferrer"
          class="button animated head-shake"
        >
          Dapatkan <em>Early Access</em>
        </a>
        <p>
          <span>Terima kasih,</span><br />
          <small>Tentang aku, kamu, dan kita.</small><br />
          <small>
            <nuxt-link to="/">https://tenta.ng</nuxt-link>
          </small>
          <br />
          <a :href="signInUrl" target="_blank">
            <button>Masuk</button>
          </a>
          <br />
          <a :href="signUpUrl" target="_blank">
            <button>Coba Gratis</button>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageHome',
  setup() {
    const localUrl = `http://localhost:50238`
    // const testUrl = 'https://test.identitas.kelola.io'
    const query = {
      origin: 'tenta.ng',
      organization: '5e50621c12def600087cc882',
      continue: 'test.tenta.ng',
    }
    const signInUrl = `${localUrl}/auth/signin?origin=${query.origin}&organization=${query.organization}&continue=${query.continue}`
    const signUpUrl = `${localUrl}/auth/signup?origin=${query.origin}&organization=${query.organization}&continue=${query.continue}`

    return { signInUrl, signUpUrl }
  },
})
</script>

<style lang="postcss" scoped>
.page-home {
  @apply flex justify-center items-center;
  @apply min-h-screen;
  @apply bg-white;
}
.coming-wrapper {
  @apply p-8 overflow-hidden;
  @apply bg-white rounded-2xl;
  max-width: 500px;
  p {
    @apply mb-4;
  }
  small {
    @apply text-sm leading-none;
    @apply text-gray-600;
  }
}
.logo {
  @apply flex justify-end mb-16;
  img {
    height: 72px;
  }
}
.button {
  @apply mt-8 mb-8;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  animation-duration: 3s;
}
a:not(.button) {
  @apply underline;
}
</style>
