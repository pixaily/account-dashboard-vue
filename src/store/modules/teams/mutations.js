export default {
  updateTeams(state, payload) {
    if (state.teams.length > 0) {
      state.teams = [state.teams, ...payload];
    } else {
      state.teams = [...payload];
    }
  }
}