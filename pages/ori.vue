<template>
  <div class="center my-auto">
    <h1>Cek pengiriman</h1>
    <h1 class="bg-red-300">Berat : {{berat}}</h1>
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
    <p v-for="(x, index) in biaya" :key="index">{{x.cost[0].value}}</p>
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Password
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            State
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
        </div>
      </div>
    </form>
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

    return {
      berat,
      province,
      city,
      cityAsal,
      asalProv,
      asalCity,
      selectedProv,
      selectedCity,
      biaya,
      cek,
      setProv,
      setCity,
      setAsalCity,
      cekBiaya
    }

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
