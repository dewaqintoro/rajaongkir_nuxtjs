<template>
  <div class="wrapper">
    <div v-if="isReady" class="widgets">
      <span v-for="item in widgets" :key="item._id">
        <div v-if="item.type.handle === 'link'" class="link my-2">
          <WidgetLink :item="item" :page="page" @update="update" />
        </div>
        <div v-if="item.type.handle === 'links'" class="link my-2">
          <WidgetLinks :item="item" />
        </div>
      </span>

      <div class="addWidget">
        <div class="btnAdd">
          <button class="icon"><Fa :icon="['far', 'plus']" /></button>
          <button @click="add" class="label">Tambah Widget</button>
        </div>
      </div>
    </div>
    <Transition name="drawer">
      <WidgetDelete v-if="isDeleteWidget" @close="closeModal" />
      <WidgetCreate v-if="isCreateWidget" @close="closeModal" />
    </Transition>
  </div>
</template>

<script lang="ts">
import { ref, useContext, defineComponent, computed } from '@nuxtjs/composition-api'
import { useProfileStore } from '@/store'

export default defineComponent({
  name: 'DashboardWidgets',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { $cookies, $axios } = useContext()
    const profileStore = useProfileStore()
    const isReady = computed(() => profileStore.isReady)
    const isDeleteWidget = ref(false)
    const isCreateWidget = ref(false)
    // const page = computed(() => profileStore.mypages)
    const widgets = computed(() => profileStore.widgets)
    const widgetsLocal = ref([])
    widgetsLocal.value = widgets.value

    const values = ref({
      name: '',
      title: '',
      location: '',
    })

    const textLink = ref([])
    const urlLink = ref([])
    const kelas = ref('')
    const newData = ref({
      id: ref(''),
      myUrl: ref(''),
      myTitle: ref(''),
    })

    return {
      isDeleteWidget,
      isCreateWidget,
      isReady,
      values,
      widgets,
      textLink,
      urlLink,
      kelas,
      add,
      deleteWidget,
      update,
      closeModal,
    }

    function closeModal() {
      isDeleteWidget.value = false
      isCreateWidget.value = false
    }

    function deleteWidget() {
      isDeleteWidget.value = true
    }

    async function update(e: any, item: any) {
      newData.value.id = item._id
      newData.value.myTitle = item.data.text
      newData.value.myUrl = item.data.url

      if (e.target.id === 'url') {
        newData.value.myUrl = e.target.value
      }
      if (e.target.id === 'judul') {
        newData.value.myTitle = e.target.value
      }

      try {
        const link = ref({
          widget: {
            _id: item._id,
            type: item.type._id,
            data: {
              text: newData.value.myTitle,
              url: newData.value.myUrl,
            },
            // data: {
            //   text: 'linkks baruuu',
            //   links: [
            //     {
            //       text: newData.value.myTitle,
            //       url: newData.value.myUrl,
            //     },
            //   ],
            // },
          },
        })
        const token = $cookies.get('_t')
        const headers = { Authorization: `Bearer ${token}` }
        await $axios.$put(
          `${process.env.tautanUrlTest}/pages/widget/${props.page._id}`,
          link.value,
          { headers }
        )
      } catch (error) {
        console.log('eror => ', error)
      }
    }

    function add() {
      isCreateWidget.value = true
    }
  },
})
</script>

<style lang="postcss">
.addWidget {
  background: #f3f4f6;
  border-radius: 6px;
  text-align: center;
  @apply flex flex-col items-center mt-4;
  .btnAdd {
    /* font-family: Inter; */
    text-align: center;
    @apply py-8 w-full;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    .icon {
      color: white;
      background: #9ca3af;
      box-shadow: 0.1px 2px 6px rgba(0, 0, 0, 0.16);
      border-radius: 999px;
      padding: 9px 11px;
    }
    .label {
      /* font-family: Inter; */
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #9ca3af;
    }
  }
}
.wrapper {
  max-width: 85%;
}
.widgets {
  .link {
    @apply pt-2;
    @apply bg-white;
    box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
    border-radius: 6px;
    .buttom {
      color: #9ca3af;
      .iconButtom {
        @apply my-2;
      }
    }
  }
  .form {
    .field {
      @apply mt-4;
      @apply flex;
      .icon {
        /* margin: auto; */
        margin: 12px 0.1px;
        width: 40px;
        color: #9ca3af;
      }
      .input {
        @apply w-full;
        background: #f9fafb;
        border-radius: 6px;
        align-items: center;
        padding: 10px;
      }
      .inputLabel {
        margin-top: -45px;
        margin-right: 10px;
        font-size: 10px;
        color: #9ca3af;
        @apply right-0;
      }
    }
    .items {
      .item {
        @apply w-full;
        margin-left: 40px;
        background: #f9fafb;
        border-radius: 6px;
        align-items: center;
        padding: 10px;
      }
    }
  }
  .isShow {
    @apply mt-6;
  }
}
</style>
