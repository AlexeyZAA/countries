export default {
  state: {
    countries: []
  },

  getters: {
    COUNTRY: state => {
      return state.countries
    }
  },

  mutations: {
    SET_COUNTRY: (state, payload) => {
      state.countries = payload
    },
    UPDATE_COUNTRY: (state, payload) => {
      state.countries.find((curdata, index) => {
        if(curdata.name == payload.name){
          state.countries[index].capital = payload.capital
          state.countries[index].region = payload.region
          state.countries[index].population = payload.population
        }
      })
    }
  },

  actions: {
    SETCOUNTRY: async (context, payload) => {
      context.commit('SET_COUNTRY', payload)
    },
    UPDATECOUNTRY: async (context, payload) => {
      context.commit('UPDATE_COUNTRY', payload)
    }
  }
}
