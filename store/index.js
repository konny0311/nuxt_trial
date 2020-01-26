export const state = () => ({
  isAuth: false
})

export const mutations = {
  setAuth(state, data) {
    state.isAuth = data
  }
}

export const actions = {
  login({ commit }) {
    commit('setAuth', true)
  }
}
