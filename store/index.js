// const colSize = 4

export const state = () => ({
  isAuth: false,
  projects: []
})

export const mutations = {
  SET_PROJECTS: (state, data) => {
    state.projects = data
  }
}

const BASE_URL = 'http://localhost:3000/api'

export const actions = {
  initState({ dispatch }) {
    return Promise.all(dispatch('getProjects'))
  },
  getProjects({ commit, state }, queries) {
    return new Promise((resolve, reject) => {
      const getProjectsRequest = new Request(BASE_URL + '/projects')
      fetch(getProjectsRequest, {
        method: 'GET'
      })
        .then((res) => {
          if (res.status === 401) {
            console.log('mysql err')
            return reject(new Error('User unavailable!'))
          } else {
            return res.json()
          }
        })
        .then((res) => {
          commit('SET_PROJECTS', res.projects)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
