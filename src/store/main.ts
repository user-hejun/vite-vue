import { defineStore } from "pinia"

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      count: 10,
      name: 'w1',
      arr: [1, 2, 3]
    }
  },
  getters: {
    count10(state): number {
      return this.count += 12
    }
  },
  actions: {
    changeState(num: number, str: string) {
      this.count += num
      this.name += str
      this.arr.push(5)
    }
  }
})