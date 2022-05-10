export const state = () => ({
  snackbar: Object
})

export const getters = {
  getSnackbar: (state) => state.snackbar
}
  
export const mutations = {
  SET_SNACKBAR(state, snackbar) {
    state.snackbar = snackbar;
  },
  REMOVE_SNACKBAR(state){
    state.snackbar = null;
  }
}
  
export const actions = {
  setSnackbar({commit}, snackbar) {
    snackbar.showing = true;
    snackbar.color = snackbar.color || 'success';
    commit('SET_SNACKBAR', snackbar);
  },
  removeSnackbar({commit}){
    commit('REMOVE_SNACKBAR');
  }
}