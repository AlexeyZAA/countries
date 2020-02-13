export default {
  state: {
    countries: null
  },

  getters: {
    COUNTRI: state => {
      return state.countries
    }
  },

  mutations: {
    SET_COUNTRI: (state, payload) => {
      state.countries = payload
    },
    UPDATE_COUNTRI: (state, payload) => {
      state.countries = { ...state.params, ...payload }
    }
  },

  actions: {
    SETCOUNTRI: async (context, payload) => {
      context.commit('SET_COUNTRI', payload)
    },
    UPDATECOUNTRI: async (context, payload) => {
      context.commit('UPDATE_COUNTRI', payload)
    }
  }
}
