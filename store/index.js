const colSize = 4

export const state = () => ({
  isAuth: false,
  projects: [
    {
      name: 'first project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'second project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'third project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'fourth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'fifth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'sixth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'seventh project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'eighth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'nineth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'tenth project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
    },
    {
      name: 'eleventh project',
      technology: ['Python', 'OpenCV', 'AWS'],
      summary: 'summary here',
      link: 'https://github.com/konny0311',
      flex: colSize
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
