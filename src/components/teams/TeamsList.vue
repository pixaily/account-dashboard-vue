<template>
 <ul class="teams-list">
    <slot></slot>
  </ul>  
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/components/_teams-list.scss';
</style>