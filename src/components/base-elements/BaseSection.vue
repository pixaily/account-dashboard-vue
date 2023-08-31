<template>
  <section>
    <h2>{{title}}</h2>
    <slot>
    </slot>
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

<style scoped>
</style> 