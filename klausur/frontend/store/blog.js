export const state = () => ({
  toc: [],
})

export const actions = {
  setTableOfContents(context, { toc }) {
    context.commit('SET_TABLE_OF_CONTENTS', toc)
  },
}

export const mutations = {
  SET_TABLE_OF_CONTENTS(state, toc) {
    state.toc = toc
  },
}
