<template>
  <component :is="tag" 
  :class="['e-button', `e-button--${isIconOnly ? 'icon-only' : 'default'}`]">
      <slot v-if="!isIconOnly" />
      <MovieIcon v-if="icon" :name="icon" />
  </component>
</template>

<script setup>
import { string, bool, oneOf } from 'vue-types'


import MovieIcon from './MovieIcon.vue';

defineProps({
  icon: string(),
  isIconOnly: bool().def(false),
  tag: oneOf(['button', 'span', 'a', 'router-link' , 'label']).def('button')
})
</script>
<style scoped>
.e-button {
display:inline-block;
  user-select: none;
  font-family:Roboto;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color:#EEEBDD;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  /* border: 1px solid rgba(255, 255, 255, 0); */
  background:#CE1212;

    
}

.e-button--default { 
  display: inline-flex;
padding: 12px 24px;
gap: 12px;
border-radius: 100px;



}

.e-button--icon-only {
  padding: 13px;
  border-radius: 100px;
  background-color:rgb(27, 23, 23, 1);
  border: 2px solid #EEEBDD;
}