<template>
  <AppModal title="" :show-header="false" :size="size" @close="$emit('close')">
    <div class="container">
      <div class="wrapper">
        <div class="text-center">
          <div class="logo" align="center">
            <img src="~/assets/images/logo.png" />
          </div>
          <div class="">
            <p class="title mt-6 ml-2">Buat Halaman Kamu</p>
          </div>
        </div>
        <form class="form mt-8">
          <div class="field">
            <div class="pb-6 md:pb-0 flex flex-col">
              <div>
                <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
                  <div class="flex-1 leading-none">
                    <input
                      id="handle"
                      v-model="values.title"
                      type="text"
                      class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                      name="handle"
                      placeholder="Judul"
                    />
                  </div>
                </label>
                <p class="rightLabel">Judul</p>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="pb-6 md:pb-0 flex flex-col">
              <div>
                <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
                  <span class="flex-none text-gray-500 select-none leading-none">
                    https://www.tenta.ng/
                  </span>
                  <div class="flex-1 leading-none">
                    <input
                      id="handle"
                      v-model="values.name"
                      type="text"
                      class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                      name="handle"
                      placeholder="jane"
                    />
                  </div>
                </label>
                <p class="rightLabel">Nama halaman</p>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="pb-6 md:pb-0 flex flex-col">
              <div>
                <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
                  <div class="flex-1 leading-none">
                    <input
                      id="handle"
                      v-model="values.location"
                      type="text"
                      class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                      name="handle"
                      placeholder="Lokasi"
                    />
                  </div>
                </label>
                <p class="rightLabel">Lokasi</p>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-6" align="right">
          <button
            class="btn cancel text-black font-bold py-2 px-4 focus:outline-none mr-1"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button
            class="btn save text-white font-bold py-2 px-4 focus:outline-none"
            @click="create"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script lang="ts">
// import { useRepository } from '@/composables'
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageCreate',
  setup(_, { emit }) {
    const { $cookies, $axios } = useContext()
    const isLoading = ref(true)
    const size = ref('medium')

    const values = ref({
      title: '',
      name: '',
      location: '',
    })

    return {
      size,
      isLoading,
      values,
      create,
    }

    async function create() {
      try {
        const token = $cookies.get('_t')
        const headers = { Authorization: `Bearer ${token}` }
        const response = await $axios.$post(
          `${process.env.tautanUrlTest}/pages/createNewPage`,
          values.value,
          { headers }
        )

        if (response?.state === 'pageCreated') {
          emit('close')
        } else {
          console.log(response?.state)
        }
      } catch (error) {
        console.log('error => ', error)
      }
    }
  },
})
</script>

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    max-width: 550px;
    @apply px-4 py-8;
    .logo {
      margin: auto;
      width: 32px;
      height: 32px;
    }

    .title {
      color: #111827;
      font-size: 32px;
    }
    .field {
      width: 519px;
      @apply my-10;
      .label {
        background: #f9fafb;
        .input {
          background: #f9fafb;
        }
      }
      .rightLabel {
        font-size: 10px;
        margin-top: -55px;
        text-align: right;
        margin-right: 15px;
        @apply text-gray-500;
      }
    }
    .btn {
      font-size: 14px;
      border-radius: 6px;
      box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
    }

    .cancel {
      color: #dedede;
      background: #999;
    }

    .save {
      color: #00873e;
      background: #00db65;
    }
  }
}
</style>
