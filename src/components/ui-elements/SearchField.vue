<template>
  <div class="field-wrapper">
    <i class="">search icon</i>
    <input type="search" placeholder="Search for a team" @input="search" @keydown.up="handleUpKey" @keydown.down="handleDownKey">
    <base-button :mode="'button'" :label="'clear'" :classes="'icon icon--close'"></base-button>
  </div>
</template>

<script>
export default {
  emits: ['search', 'arrowUp', 'arrowDown'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value)
    },
    handleUpKey(e) {
      e.preventDefault();
      this.$emit('arrowUp')
    },
    handleDownKey(e) {
      e.preventDefault();
      this.$emit('arrowDown')
    }
  }
}
</script>

<style>
</style>