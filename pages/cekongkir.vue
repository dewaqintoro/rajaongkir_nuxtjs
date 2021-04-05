<template>
  <div>
    <h1>Cek pengiriman dari jogja</h1>
    <h1>Berat : {{berat}}</h1>
    <input v-model="berat" @change="cek($event)" placeholder="berat">

    <select v-model="selectedProv" @change="setCity()">
      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
    </select>

    <select v-model="selectedCity">
      <option v-for="(x, index) in city" :key="index" :value="x.city_id">{{x.city_name}}</option>
    </select>
    <!-- <span>selectedProv: {{ selectedProv }}</span> -->

    <!-- <button @click="setProv()">setProv</button> -->
    <button @click="cek()">cek</button>
    <br/>
    <button @click="cekBiaya()">cekBiaya</button>
    <br/>
    <!-- <h1>{{biaya}}</h1> -->
    <p v-for="(x, index) in biaya" :key="index">{{x.cost[0].value}}</p>
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
    const biaya = ref('')

    setProv()

    return { berat, province, city, selectedProv, selectedCity, biaya, cek, setProv, setCity, cekBiaya }

    function cek() {
      console.log('prov',selectedProv.value)
      console.log('selectedCity',selectedCity.value)
    }

    async function setProv(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/province`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      province.value = data?.data?.rajaongkir?.results
    }

    async function setCity(){
      // const url = `/starter/city?province=${selectedProv.value}`
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/city/${selectedProv.value}`
      const qs= {province: selectedProv.value}
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      city.value = data?.data?.rajaongkir?.results
    }

    async function cekBiaya(){
    // const { data } = await Axios.get(`/api/orders/ongkir/${ongkirId}/${weight}`);
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/ongkir/${selectedCity.value}/${berat.value}`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      biaya.value = data?.data?.rajaongkir?.results[0]?.costs
      // console.log('biaya', biaya)
      // console.log('biaya', biaya?.data?.rajaongkir?.results[0]?.costs)
      // province.value = data?.data?.rajaongkir?.results
    }
  }
}
</script>
