import { defineStore } from 'pinia'
import { apiConfig } from '@/api/api'

// export const useMyStoreStore = defineStore({
//   id: 'myStoreStore',
//   state: () => ({ 
//     countries: [],
//     users: [],
//     interests: [],
//     travelCount: {},
//   }),
//   actions: {
//     async fetchData() {
//       this.countries = await $fetch(apiConfig.countries);
//       this.users = await $fetch(apiConfig.users);
//       this.interests = await $fetch(apiConfig.interests);
//       this.travelCount = await $fetch(apiConfig.travelCount);
//     },
//   }
// })
export const useMyStoreStore = defineStore('myStoreStore', () => {

  const countries = ref()
  const users = ref()
  const interests = ref()
  const travelCount = ref()

  async function fetchData() {
    countries.value = await $fetch(apiConfig.countries);
    users.value = await $fetch(apiConfig.users);
    interests.value = await $fetch(apiConfig.interests);
    travelCount.value = await $fetch(apiConfig.travelCount);
  }

  return { countries, users, interests, travelCount, fetchData}

})