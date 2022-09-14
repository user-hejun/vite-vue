<template>
<div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button @click="getTest">test</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button @click="changeNum">change Number</button>
  <p>{{ count }}</p>
  <p>{{ name }}</p>
  <p>{{ arr }}</p>
  <router-link to="/hello">test page</router-link>
</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import {
  getCurrentInstance,
  onMounted
} from 'vue'
import {
  getCode
} from '@/service'
import {
  useMainStore
} from "@/store/index.js"
import {
  storeToRefs
} from 'pinia'
import {
  toRefs
} from "vue";

const mainStore = useMainStore()
const {
  count,
  name,
  arr,
  count10
} = storeToRefs(mainStore)

console.log('count', count, name, arr, count10)

// const {
//   proxy
// } = getCurrentInstance();

const getTest = async () => {
  let data = await getCode()
  console.log(data, 'data')
}

const changeNum = () => {
  // mainStore.count++            //法1
  // mainStore.$patch({           //法2：修改多个数据，用$patch
  //     count:mainStore.count + 1,
  //     name:mainStore.name + '!',
  //     arr:[...mainStore.arr,4]
  // })         
  mainStore.$patch(state=>{          //法3：$patch函数会批量更新
      state.count++
      state.name += '~~'
      state.arr.push(5)
  })
  // mainStore.changeState(10, 'hello')
}

onMounted(() => {
  getTest();
})
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
