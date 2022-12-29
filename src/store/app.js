// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    snackbar: {
      show: false,
      text: '',
    },
  }),
  actions: {
    showSnackbar(label) {
      this.snackbar.text = label
      this.snackbar.show = true
    },
  }
})
