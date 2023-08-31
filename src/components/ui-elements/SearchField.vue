<template>
  <div class="search">
    <base-icon class="icon--search" v-html="iconSearch"></base-icon>
    <input type="search" placeholder="Search for a team" @input="search" ref="search" @keydown.up="handleUpKey" @keydown.down="handleDownKey">
    <base-button :mode="'button'" :label="'clear'" class="icon icon--close" @click="clearSearch">
      <base-icon class="icon--clear" v-html="iconClear"></base-icon>
    </base-button>
  </div>
</template>

<script>
import { svgSearch, svgClose } from './../../assets/icons/SvgStore.js'

export default {
  emits: ['search', 'arrowUp', 'arrowDown'],
  data() {
    return {
      iconSearch: svgSearch,
      iconClear: svgClose,
      searchVal: ''
    }
  },
  methods: {
    search(event) {
      if(event) {
        this.searchVal = event.target.value;
      } else {
        this.searchVal = '';
      }
      this.$emit('search', this.searchVal)
    },
    handleUpKey(e) {
      e.preventDefault();
      this.$emit('arrowUp')
    },
    handleDownKey(e) {
      e.preventDefault();
      this.$emit('arrowDown')
    },
    clearSearch() {
      this.$refs.search.value = '';
      this.search();
    }
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/components/_search.scss';
</style>