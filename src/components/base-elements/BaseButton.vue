<template>
  <button v-if="mode === 'button'" :type="type ? type : 'button'" @click="clicked">
    <span :class="[labelClasses]" v-if="label">{{ label }}</span>
    <slot></slot>
  </button>  
  <router-link v-else-if="mode === 'router'" :to="to" @click="clicked">
    <span :class="[labelClasses]" v-if="label">{{ label }}</span>
    <slot></slot>
  </router-link>  
  <a :href="href" v-else-if="mode === 'link'" @click="clicked">
    <span :class="[labelClasses]" v-if="label">{{ label }}</span>
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
    'type': {
      type: String,
      required: false
    },
    'label':{
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
    'labelClasses': {
      type: String,
      required: false
    }
  },
  emit: ['buttonClicked'],
  data() {
    return {
    }
  },
  methods: {
    clicked(event) {
      this.$emit('buttonClicked', event)
    }
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/base/_buttons.scss';
</style>