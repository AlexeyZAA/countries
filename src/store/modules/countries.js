     import axios from 'axios';
   
   export default {
     state: {
       countries: []
     },
   
     getters: {
       COUTRi: state => {
         return state.countries
       }
     },
   
     mutations: {
       SET_COUTRi: (state, payload) => {
         state.countries = payload
       },
   
       ADD_COUTRi: (state, payload) => {
         state.countries.push(payload)
       }
     },
   
     actions: {
       GET_COUTRi: async (context) => {
          let {data} = await axios.get('https://restcountries.eu/rest/v2/all');
         context.commit('SET_COUTRi', data)
       },
   
       SAVE_COUTRi: async (context, payload) => {
         context.commit('ADD_COUTRi', payload)
       }
     }
   }
   