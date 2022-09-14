import { defineStore } from "pinia"

export const useGoodsStore = defineStore('goods', {
  state: () => {
    return {
      goodsName: 'iphone',
      price: 10
    }
  },
  getters: {
    
  },
  actions: {

  }
})