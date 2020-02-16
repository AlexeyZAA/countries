export default {
  state: {
    countries: [],
    dialog: false,
    modal: {}
  },

  getters: {
    COUNTRY: state => {
      return state.countries
    },
    DIALOG: state => {
      return state.dialog
    },
    MODAL: state => {
      return state.modal
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
    },
    SET_DIALOG: (state, payload) => {
      state.dialog = payload
    },
    SET_MODALDATA: (state, payload) => {
      state.modal = payload
    }
  },
  actions: {
    SETCOUNTRY: async (context, payload) => {
      context.commit('SET_COUNTRY', payload)
    },
    UPDATECOUNTRY: async (context, payload) => {
      context.commit('UPDATE_COUNTRY', payload)
    },
    SETDIALOG: async (context, payload) => {
      context.commit('SET_DIALOG', payload)
    },
    SETMODALDATA: async (context, payload) => {
      context.commit('SET_MODALDATA', payload)
    }
  }
}
