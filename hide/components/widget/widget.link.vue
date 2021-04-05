<template>
  <div>
    <div class="form">
      <div class="field">
        <Fa class="icon" :icon="['far', 'arrows-alt']" />
        <div class="w-full">
          <input
            v-if="!isEdit"
            v-model="textLink"
            :placeholder="item.data.text"
            class="input"
            id="judul"
            @change="update($event, item)"
            disabled
          />
          <input
            v-if="isEdit"
            v-model="textLink"
            :placeholder="item.data.text"
            class="input"
            id="judul"
            @change="update($event, item)"
          />
          <div class="right-0 inputLabel" align="right">Judul</div>
        </div>
        <button @click="deleteWidget(item._id)">
          <Fa class="icon" :icon="['far', 'trash-alt']" />
        </button>
      </div>
      <div class="field">
        <div class="w-full px-10">
          <input
            v-if="!isEdit"
            v-model="urlLink"
            :placeholder="item.data.url"
            class="url input"
            id="url"
            type="url"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$"
            v-on:keyup.enter="update($event, item)"
            disabled
          />
          <input
            v-if="isEdit"
            v-model="urlLink"
            :placeholder="item.data.url"
            class="url input"
            id="url"
            type="url"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$"
            v-on:keyup.enter="update($event, item)"
          />
          <div class="right-0 inputLabel" align="right">URL</div>
        </div>
      </div>
    </div>
    <div class="flex mt-6">
      <div class="flex ml-10 buttom">
        <Fa class="iconButtom" :icon="['far', 'link']" />
        <p class="my-1 mx-2">link</p>
        <Fa class="iconButtom" :icon="['far', 'question-circle']" />
      </div>
      <div class="w-full mr-10 buttom" align="right">
        <button>
          <Fa class="iconButtom mr-1" :icon="['far', 'chart-bar']" />
        </button>
        <button @click="editWidget">
          <Fa class="iconButtom" :icon="['far', 'pen']" />
        </button>
      </div>
    </div>
    <Transition name="drawer">
      <WidgetDelete v-if="isDeleteWidget" @close="closeModal" :item="item" :page="page" />
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WidgetLink',
  props: {
    item: {
      type: Object,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const textLink = ref(props.item.data.text)
    const urlLink = ref(props.item.data.url)
    const isDeleteWidget = ref(false)
    const isEdit = ref(false)

    return {
      textLink,
      urlLink,
      isDeleteWidget,
      isEdit,
      update,
      deleteWidget,
      closeModal,
      editWidget,
    }

    function update(e: any, item: any) {
      emit('update', e, item)
    }

    function editWidget() {
      isEdit.value = true
    }

    function deleteWidget() {
      isDeleteWidget.value = true
      // emit('delete', item)
    }

    function closeModal() {
      isDeleteWidget.value = false
    }
  },
})
</script>

<style lang="postcss" scoped></style>
