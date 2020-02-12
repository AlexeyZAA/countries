export default {
  state: {
    countries: [],
  },

  getters: {
    COUNTRI: state => {
      return state.countries
    },
  },

  mutations: {
    SET_COUNTRI: (state, payload) => {
      state.countries = payload
    },
  },

  actions: {
    SETCOUNTRI: async (context, payload) => {
      context.commit('SET_COUNTRI', payload)
    }

  },
}
