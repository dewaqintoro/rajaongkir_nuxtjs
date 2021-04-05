<template>
  <div>
    <h1>{{berat}}</h1>
    <!-- <input v-model="berat" @change="cek($event)" placeholder="berat"> -->

    <select v-model="selectedProv" @change="setCity()">
      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
    </select>

    <select v-model="selectedCity">
      <option v-for="(x, index) in city" :key="index" :value="index">{{x.city_name}}</option>
    </select>
    <span>selectedProv: {{ selectedProv }}</span>

    <button @click="setProv()">setProv</button>
    <button @click="cek()">cek</button>
  </div>
</template>
<script>
import { computed, ref, useContext } from '@nuxtjs/composition-api'
import axios from 'axios'
export default {
  name: 'CekOngkir',
  setup(){
    const berat = ref(1)
    const province = ref([])
    const city = ref([])
    const { $axios, route } = useContext()
    const selectedProv = ref('')
    const selectedCity = ref('')

    setProv()

    if(selectedProv.value){
      console.log('ada', selectedProv.value)
    } else {
      console.log('belum ada')
    }

    return { berat, province, city, selectedProv, selectedCity, cek, setProv, setCity }

    function cek() {
      console.log(selectedProv.value)
    }

    async function setProv(){
      const url = `https://aruspinggir-v1.herokuapp.com/api/orders/province`
      const headers = { key: 'fae48b5d186bfaa993f687ec1ac499b1' }
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      province.value = data?.data?.rajaongkir?.results
      // console.log(province.value)
      // setCity()
    }

    async function setCity(){
      // const url = `/starter/city?province=${selectedProv.value}`
      const url = `https://aruspinggir-v1.herokuapp.com/api/orders/city/${selectedProv.value}`
      const headers = { key: 'fae48b5d186bfaa993f687ec1ac499b1' }
      const qs= {province: selectedProv.value}
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      city.value = data?.data?.rajaongkir?.results
    }
  }
}
</script>
