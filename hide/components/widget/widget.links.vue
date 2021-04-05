<template>
  <div>
    <!-- <button @click="cek">cek</button> -->
    <div class="form">
      <div class="field">
        <Fa class="icon" :icon="['far', 'arrows-alt']" />
        <div class="w-full">
          <input v-model="nameLinks" :placeholder="item.data.text" class="input" />
          <div class="right-0 inputLabel" align="right">Judul1</div>
        </div>
        <Fa class="icon" :icon="['far', 'trash-alt']" />
      </div>
      <div class="field">
        <button class="input mx-10" @click="show">Link</button>
      </div>
      <!-- <div v-if="isShow">
        <span v-for="item in item.data.links" :key="item._id">
          <WidgetLink :item="item" />
        </span>
      </div> -->
      <div v-if="isShow" class="field">
        <div class="w-full px-10">
          <input v-model="links.textLinks" :placeholder="item.data.links[0].text" class="input" />
          <div class="right-0 inputLabel" align="right">Judul Link</div>
        </div>
      </div>
      <div v-if="isShow" class="field">
        <div class="w-full px-10 mt-4">
          <input v-model="links.urlLinks" :placeholder="item.data.links[0].url" class="input" />
          <div class="right-0 inputLabel" align="right">URL</div>
        </div>
      </div>
    </div>
    <div class="flex" :class="kelas">
      <div class="flex ml-10 buttom">
        <Fa class="iconButtom" :icon="['far', 'link']" />
        <p class="my-1 mx-2">links</p>
        <Fa class="iconButtom" :icon="['far', 'question-circle']" />
      </div>
      <div class="w-full mr-10 buttom" align="right">
        <button>
          <Fa class="iconButtom mr-1" :icon="['far', 'chart-bar']" />
        </button>
        <button>
          <Fa class="iconButtom" :icon="['far', 'pen']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WidgetLinks',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isShow = ref(false)
    const kelas = ref('')
    const nameLinks = ref('')
    const links = ref({
      textLinks: '',
      urlLinks: '',
    })

    return { isShow, kelas, nameLinks, links, show, cek }

    function cek() {
      console.log('item', props.item)
    }

    function show() {
      isShow.value = !isShow.value
      if (kelas.value === 'isShow') {
        kelas.value = ''
      } else {
        kelas.value = 'isShow'
      }
    }
  },
})
</script>

<style lang="postcss" scoped></style>
