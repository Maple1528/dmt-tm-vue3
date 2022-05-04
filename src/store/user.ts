import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      userID: '',
      roleID: ''
    }
  },
  getters: {

  },
  actions: {

  }
})
