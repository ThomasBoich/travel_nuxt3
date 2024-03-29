import { defineStore } from 'pinia'
import { apiConfig } from '@/api/api'

export const useMyStoreStore = defineStore({
  id: 'myStoreStore',
  state: () => ({ 
    countries: [],
    users: [],
    interests: [],
    travelCount: {},
  }),
  actions: {
    async fetchData() {
      this.countries = await $fetch(apiConfig.countries);
      this.users = await $fetch(apiConfig.users);
      this.interests = await $fetch(apiConfig.interests);
      this.travelCount = await $fetch(apiConfig.travelCount);
    },
  }
})