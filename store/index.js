export const state = () => ({
  lang: 0
})

export const getters = {
  getLang(state) {
    return state.lang
  }
}

export const mutations = {
  increment(state) {
    state.lang++
  }
}

export const actions = {
  async fetchLang({ state }) {
    // make request
    const res = { data: 10 };
    state.lang = res.data;
    return res.data;
  }
}
