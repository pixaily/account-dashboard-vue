<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('teams/pullTeams', { url:'https://run.mocky.io/v3/d07e361a-8f4b-4fdc-a8fe-bce479a0cbfd'});
  },
}
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>