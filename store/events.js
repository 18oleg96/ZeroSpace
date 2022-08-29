export const state = () => ({
  scrollY: 0,
})

export const mutations = {
  SCROLL_Y(state, v) {
    if (v !== state.scrollY) state.scrollY = v
  },
}

export const actions = {}
