<template>
  <div>
    <!-- <img src="~/assets/logo.svg" /> -->
    <h1>{{mountains}}</h1>
    <img class="my-img" :src="mountains.message" />
    <!-- <ul>
      <li v-for="(city, index) in cities" :key="index">
          {{ city }}
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  async asyncData({ $http }) {
    // const mountains = await $http.$get('https://api.rajaongkir.com/starter/province',{
    //   headers: {key: 'fae48b5d186bfaa993f687ec1ac499b1'}
    // })
    const url = 'https://dog.ceo/api/breeds/image/random'
    const mountains = await $http.$get(url)
    // const cities = mountains?.rajaongkir?.results
    return { mountains }
  }
}
</script>
