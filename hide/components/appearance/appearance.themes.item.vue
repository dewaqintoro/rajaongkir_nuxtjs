<template>
  <div class="theme">
    <div class="items" :style="{ background: item.color }">
      <!-- <div class="item"></div> -->
    </div>
    <div class="title">{{ item.title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppearanceThemesItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log('item', props.item)
    return {}
  },
})
</script>

<style lang="postcss" scoped>
.theme {
  @apply m-1;
  .items {
    border-radius: 6px;
    width: 100px;
    height: 100px;
    justify-content: center;
    .item {
      width: 68px;
      height: 16px;
      box-shadow: 0.1px 2px 6px rgba(195, 199, 204, 0.5);
      border-radius: 6px;
    }
  }
  .title {
    @apply mt-1;
    /* font-family: Inter; */
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #111827;
  }
}
</style>
