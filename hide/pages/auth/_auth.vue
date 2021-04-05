<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageAuth',
  setup() {
    const { route, $cookies, redirect } = useContext()
    const token = route.value?.query?.token
    if (token) {
      $cookies.set('_t', token)
      redirect('/dashboard')
    } else {
      redirect('/')
    }
  },
})
</script>
