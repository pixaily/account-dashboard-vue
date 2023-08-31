<template>
  <div class="field-wrapper">
    <i class="">search icon</i>
    <input type="search" placeholder="Search for a team" @input="search">
    <base-button :mode="'button'" :label="'clear'" :classes="'icon icon--close'"></base-button>
  </div>
</template>

<script>
export default {
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value)
    }
  }
}
</script>

<style>
</style>