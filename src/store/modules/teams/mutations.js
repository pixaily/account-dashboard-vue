export default {
  updateTeams(state, payload) {
    state.teams = [state.teams, ...payload];
  }
}