// store/countries.js
import { defineStore } from 'pinia';

export const useCountriesStore = defineStore({
  id: 'countries',
  state: () => ({
    countries: [],
  }),
  actions: {
    async fetchCountries() {
      const response = await fetch('https://localhost:8000/countries');
      this.countries = await response.json();
    },
  },
});