import { defineStore } from "pinia"

interface ILoaderStore {
  isLoading: boolean
}

const defaultValue: ILoaderStore = {
  isLoading: true
}

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => defaultValue,
  getters: {
    isLoad: state => state.isLoading
  },
  actions: {
    set(data: boolean) {
      this.$patch({ isLoading: data })
    }
  }
})