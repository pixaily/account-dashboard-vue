export default {
  getTeams(state) {
    return state.teams;
  },
  getTeam(state) {
    return (id) => {
      return state.teams.find(team => team.id === id);
    }
  }
}