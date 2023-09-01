<template>
  <section class="base-section">
    <div class="base-section__heading">
      <h3>{{title}}</h3>
    </div>
    <div class="base-section__content">
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    } 
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/base/_base-section.scss';
</style>