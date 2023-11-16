<template>
  <router-view />
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("teams/pullTeams", { url: "https://run.mocky.io/v3/37106e7c-db78-41e7-bf13-e441e8310fd4" });
    },
  };
</script>

<style lang="scss">
  @import "./assets/styles/styles.scss";
</style>
