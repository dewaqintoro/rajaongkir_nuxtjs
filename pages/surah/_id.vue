<template>
  <span>
    <button @click="mergeArrayObjects()">cek</button>
    <nuxt-link to="/quran">
        Home
      </nuxt-link>
    <hr/>
    <!-- <div class="item"  v-for="(surat, index) in surah.text" :key="surat.index">
      <p>{{surat}}</p>
      <p>{{surah.translations.id.text[index]}}</p>
    </div> -->
    <div v-if="surah">
      
      <div class="item"  v-for="(x, index) in surah.text" :key="x.index">
        <div class="card">
          <div class="flex">
            <div class="nameSurah">
              <p>{{x}}</p>
              <p>{{surah.translations.id.text[index]}}</p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  </span>
</template>
<script>
import { ref, useAsync, useContext } from '@nuxtjs/composition-api'
// import axios from 'axios'
export default {
  name: 'Surah',
  setup(){
    const { route } = useContext()
    const idParams = route.value?.params?.id

    const selectedCity = ref('')
    const asalCity = ref('')
    const surah = useAsync(async () => await getSurah())
    // const surah = ref('anjing')

    const arr1 =[
      {id:1,name:"sai"},
      {id:2,name: "King"}
    ];
    const arr2 = [
        {id:1,age:23},
        {id:2,age:24}
    ];

    const iniSurat = surah.value?.text
    const arti = surah.value?.translations?.id?.text

    return {
      surah,
      cek,
      mergeArrayObjects
    }

    function mergeArrayObjects1(arr1,arr2){
      return arr1.map((item,i)=>{
        if(item.id === arr2[i].id){
          return Object.assign({},item,arr2[i])
        }
      })
    }

    function mergeArrayObjects(){
      // Object.entries(surah.value?.text).forEach(function(query, i){
      //   console.log(query[0])
      //   console.log(i+1)
      //   console.log(surah.value?.translations?.id)
      // })
      var array1 = [[1,2,3,4],[4,5,6,7]];
      var array2 = [['a','b','c','d'],['e','f','g','h']];

      var array3 = array1.map(function (e, i) {
          return [e, array2[i]];
      });

      console.log(array3);
    }
    

    async function getSurah(){
      const resp = await import(`~/data/surah/${idParams}.json`)
      return resp[idParams]
    }

    async function cek1(){
      // console.log(allSurah?.value)
      // surah.map((x) => {
      //   console.log(x)
      // })

      const surat = surah.value.text
      console.log(surat)

      // surat.forEach((a) => {
      //   console.log(a)
      // })
      // var obj = {a:1,b:2};

      Object.entries(surat).forEach(function(query){
          console.log(query)
      })
    }
    

    async function cek(){
      // console.log(mergeArrayObjects(surat,arti));
      // let employee = {
      //     ...surat,
      //     ...arti
      // }
      // console.log(employee)
      // var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
      // var b = [ "foo", "bar", "baz", "bam", "bun", "fun" ];

      // var array1 = [
      //   {name: "lang", value: "English"}, 
      //   {name: "age", value: "18"}
      // ];
      // var array2 = [
      //   {code: "EN", text: "English language"}, 
      //   {code: "DE", value: "German", text: "German language"}
      // ];

      // var array3 = array1.map((obj, index) => Object.assign({}, obj, array2[index]));


      // var array3 = surat.map((obj, index) => {
      //   console.log(obj)
      // });

      // var myObject = { 'a': 1, 'b': 2, 'c': 3 };

      // Object.keys(myObject).map(function(key, index, value) {
      //   console.log(value);
      // });

      // console.log(myObject);

      // let person = {
      //     firstName: 'John',
      //     lastName: 'Doe',
      //     age: 25,
      //     ssn: '123-456-2356'
      // };


      // let job = {
      //     jobTitle: 'JavaScript Developer',
      //     country: 'USA'
      // };


      // let employee = Object.assign(person, job);
      // console.log(employee);


      // console.log(typeof arti,typeof arti, typeof array3);
      
    }

    
  }
}
</script>

<style lang="postcss" scoped>
@font-face {
  font-family: "lpmq";
  src: url(/fonts/lpmq.otf) format("opentype");
  font-display: swap;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.font-arabic{
  font-family: "lpmq", Arial, sans-serif;
  line-height: 2;
}

.item {
  @apply px-8 mx-36 my-8;
}
.card {
  @apply text-2xl py-4 rounded-lg my-8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
  .idSurah {
    @apply text-center;
    width: 50px;
  }
  .nameSurah {
    @apply px-4 text-right w-full;
  }
}

@screen mobile {
  .item {
    @apply mx-4;
  }
}
</style>