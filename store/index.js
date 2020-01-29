export const state = () => ({
  isAuth: false,
  projects: [
    {
      name: 'first project',
      technology: ['Python', 'OpenCV', 'AWS'],
      description: 'description here'
    },
    {
      name: 'second project',
      technology: ['Python', 'OpenCV', 'AWS'],
      description: 'description here'
    }
  ]
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
