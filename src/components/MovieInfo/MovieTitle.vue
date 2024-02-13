<template>
  <div class="movie-description">
    <h1 class="movie-name">Iron Man{{title}}</h1>
    <div class="directors">
      <span>directors:</span><span>{{director }}</span>
    </div>

    <div class="date">
    <span class="year">{{ year }}year</span>
<div class="circle"></div>
    <span class="rating">{{pg13}}pg13</span>
<div class="circle"></div>
    <span class="time">{{time}}time</span>
  </div>
   
  </div>



</template>
<script setup>
import { string } from 'vue-types';

const props = defineProps({
  title:string(),
  director:string(),
  year:string(),
  pg13:string(),
  time:string(),

})
</script>
<style lang="postcss">
.movie-name {
  @apply font-roboto font-bold text-colorTitle text-5xl leading-10 mb-1.5;
}
.directors{
  @apply font-roboto text-norm ml:mb-5 ls3:mb-6;
}
span {
  @apply font-roboto text-colorTitle text-norm ;
}
.date{
    @apply inline-flex gap-[15px] items-center ml:pb-5 ml:mb-5 ls3:mb-6
}
.circle{
    @apply w-2 h-2 bg-white rounded-full shrink-0 grow-0 
}
.rating{
  @apply shrink-0 grow-0 mt-0
}
.year{
  @apply shrink-0 grow-0 
}
.time{
  @apply shrink-0 grow-0 
}

</style>
