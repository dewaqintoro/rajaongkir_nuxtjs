<template>
  <div>
    <h1>Cek pengiriman</h1>
    <h1>Berat : {{berat}}</h1>
    <input v-model="berat" @change="cek($event)" placeholder="berat">
    <h1>Pilih asal</h1>
    <select v-model="asalProv" @change="setAsalCity()">
      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
    </select>

    <select v-model="asalCity">
      <option v-for="(x, index) in cityAsal" :key="index" :value="x.city_id">{{x.city_name}}</option>
    </select>
    <br/>
    <hr/>
    <h1>Pilih tujuan</h1>
    <select v-model="selectedProv" @change="setCity()">
      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
    </select>

    <select v-model="selectedCity">
      <option v-for="(x, index) in city" :key="index" :value="x.city_id">{{x.city_name}}</option>
    </select>

    <button @click="cek()">cek</button>
    <br/>
    <button @click="cekBiaya()">cekBiaya</button>
    <br/>
    <!-- <h1>{{biaya}}</h1> -->
    <p v-for="(x, index) in biaya" :key="index">{{x.cost[0].value}}</p>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
import axios from 'axios'
export default {
  name: 'CekOngkir',
  setup(){
    const berat = ref(1)
    const provinceAsal = ref([])
    const cityAsal = ref([])
    const province = ref([])
    const city = ref([])
    const selectedProv = ref('')
    const asalProv = ref('')
    const selectedCity = ref('')
    const asalCity = ref('')
    const biaya = ref('')

    setProv()

    return { berat, province, city, cityAsal, asalProv, asalCity, selectedProv, selectedCity, biaya, cek, setProv, setCity, setAsalCity, cekBiaya }

    function cek() {
      console.log('asal',asalCity.value)
      console.log('tujuan',selectedCity.value)
    }

    async function setProv(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/province`
      const data = await axios.get(`${url}`);
      province.value = data?.data?.rajaongkir?.results
    }

    async function setAsalCity(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/city/${asalProv.value}`
      const data = await axios.get(`${url}`);
      cityAsal.value = data?.data?.rajaongkir?.results
    }

    async function setCity(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/city/${selectedProv.value}`
      const qs= {province: selectedProv.value}
      const data = await axios.get(`${url}`);
      city.value = data?.data?.rajaongkir?.results
    }

    async function cekBiaya(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/ongkir/${asalCity.value}/${selectedCity.value}/${berat.value}`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      console.log('data', data?.data?.rajaongkir)
      biaya.value = data?.data?.rajaongkir?.results[0]?.costs
    }
  }
}
</script>
