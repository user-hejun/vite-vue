import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 10,
      age: 'w1',
      addres: ''
    }
  },
  getters: {

  },
  actions: {

  }
})