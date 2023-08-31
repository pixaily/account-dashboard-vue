export default {
  async pullTeams(context, payload) {
    const response = await fetch(payload.url);
    const teams = await response.json();

    context.commit('updateTeams', teams)
  }
}