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
        if(curdata.name == payload.countryname){
          state.countries[index].name = 'payload.countryname' 
          //alert(JSON.stringify(state.countries[index].name))
        }
      })
    }
  },

  actions: {
    SETCOUNTRY: async (context, payload) => {
      context.commit('SET_COUNTRY', payload)
    },
    UPDATECOUNTRY: async (context, payload) => {
      alert(JSON.stringify(payload))
      context.commit('UPDATE_COUNTRY', payload)
    }
  }
}
