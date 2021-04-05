<template>
  <div class="block about">
    <form class="form">
      <div class="field">
        <div class="pb-6 md:pb-0 flex flex-col">
          <div>
            <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
              <div class="flex-1 leading-none">
                <input
                  v-model="title"
                  id="handle"
                  type="text"
                  class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                  name="handle"
                  placeholder="Title"
                />
              </div>
            </label>
            <p class="rightLabel">Title</p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="pb-6 md:pb-0 flex flex-col">
          <div>
            <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
              <span class="flex-none input text-gray-500 select-none leading-none">
                https://www.tenta.ng/
              </span>
              <div class="flex-1 leading-none">
                <input
                  v-model="username"
                  id="handle"
                  type="text"
                  class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                  name="handle"
                  placeholder="Username"
                />
              </div>
            </label>
            <p class="rightLabel">Username</p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="pb-6 md:pb-0 flex flex-col">
          <div>
            <label class="label input-field inline-flex items-baseline border-none p-4 w-full">
              <div class="flex-1 leading-none">
                <input
                  v-model="location"
                  id="handle"
                  type="text"
                  class="input placeholder-blue p-0 no-outline text-dusty-blue-darker w-full"
                  name="handle"
                  placeholder="Location"
                />
              </div>
            </label>
            <p class="rightLabel">Location</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// import { Profile } from '@/@types'
// import { useProfileStore } from '@/store'
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppearanceAbout',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const title = ref(props.page.title)
    const username = ref(props.page.name)
    const location = ref(props.page.location)

    return { title, username, location }
  },
})
</script>

<style lang="postcss" scoped>
.block {
  background: #fff;
  box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
  border-radius: 6px;
}

.about {
  @apply py-1 px-4;
  .title {
    color: #111827;
    font-size: 32px;
  }
  .field {
    @apply mb-10 mt-2;
    .label {
      background: #f9fafb;
      .input {
        background: #f9fafb;
        /* font-family: Inter; */
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 125%;
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
</style>
