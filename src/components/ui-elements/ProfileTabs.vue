<template>
  <section class="profile-tabs">
    <base-button :mode="'router'" :label="'My Teams'" :to="'/user-profile'"></base-button>
    <base-button :mode="'router'" :label="'About'" :to="'/user-profile'"></base-button>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>