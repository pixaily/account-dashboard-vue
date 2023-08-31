<template>
  <button v-if="mode === 'button'" :class="[buttonClasses]">
    {{ label }}
    <slot></slot>
  </button>  
  <router-link v-else-if="mode === 'router'" :to="to" :class="[buttonClasses]">
    {{ label }}
    <slot></slot>
  </router-link>  
  <a :href="href" v-else-if="mode === 'link'" :class="[buttonClasses]">
    {{ label }}
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    'mode': {
      type: String,
      required: true
    }, 
    'label':{
      type: String,
      required: false
    }, 
    'classes':{
      type: String,
      required: false
    }, 
    'to':{
      type: String,
      required: false
    },
    'href':{
      type: String,
      required: false
    }, 
  },
  data() {
    return {
    }
  },
  computed: {
    buttonClasses() {
      if(this.classes && this.classes.length > 0) {
        return this.classes.split(' ')
      }
      return []
    }
  },
}
</script>

<style lang="">
  
</style>