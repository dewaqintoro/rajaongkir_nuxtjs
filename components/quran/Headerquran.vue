<template>
  <div class="px-40 text-center">
    <div class="text-2xl">{{surah.name}}</div>
    <div>( {{surah.name_latin}} - {{surah.translations.id.name}} )</div>
    <div>{{surah.number_of_ayah}} Ayat</div>
    
  </div>
</template>

<script>

export default {
  name: 'Headerquran',
  props: {
    surah: {
      type: Object,
      required: true,
    },
  },
  setup(props){
    console.log(props)
  }
}
</script>

<style lang="postcss" scoped>

</style>