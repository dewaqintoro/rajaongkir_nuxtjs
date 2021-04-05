<template>
  <div id="example-2">
    <!-- `greet` is the name of a method defined below -->
    <button v-on:click="fetchSomething">Greet</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Vue.js',
        ip: '',
      }
    },
    // define methods under the `methods` object
    methods: {
      greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
      },
      async fetchSomething() {
        const url = `https://api.rajaongkir.com/starter/province`
        const url2 = `/starter/province`
        const headers = { key: 'fae48b5d186bfaa993f687ec1ac499b1' }
        // const data = await axios.get(`/api/v1${url}`, {headers});
        // const data = await axios.get(`${url}`, {headers});

        this.ip = await this.$http.$get(`/api/v1${url2}`, {headers})
        console.log('data', this.ip)
      }
    },
    // async asyncData({ params, $http }) {
    //   const post = await $http.$get(`https://api.nuxtjs.dev/posts`)
    //   console.log(post)
    //   return { post }
    // }
  }
</script>