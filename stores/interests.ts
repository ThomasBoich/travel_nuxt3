// // store/interests.js
// import { defineStore } from 'pinia';

// export const useInterestsStore = defineStore({
//   id: 'interests',
//   state: () => ({
//     interests: [],
//   }),
//   actions: {
//     async fetchInterests() {
//       const response = await fetch('http://localhost:8000/interests/');
//       this.interests = await response.json();
//     },
//   },
// });

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('interests', {
  state: () => {
    return { interests:  }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async fetchInterests() {
      const response = await fetch('http://localhost:8000/interests/');
      this.interests = await response.json();
    },
  },
})