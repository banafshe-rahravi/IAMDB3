

<!-- https://www.jsdelivr.com/package/npm/vue3-circle-progress -->
<template>
  <div class="rating">
    <circle-progress
      
      :is="component"
      :is-bg-shadow="true"
      :border-width="6"
      :border-bg-width="6"
      :percent="rating * 10"
      color="#CE1212"
      :determinate="determinate"
      empty-color="#EEEBDD66"
      :size="80"
      :progress="progress"
      animation="bounce 700 1000"
      :is-gradient="true"
      :gradient="{
        angle: 79,
        startColor: ' #CE1212',
        stopColor: ' #CE1212',
      
      }"
    />

    <span class="text-in">{{ 7.9 }}</span>
    <div class="rate">
      <p class="num">1,046,592{{}}</p>
      <p class="text">rating on IMDB</p>
    </div>
  </div>
</template>
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
// import { bool, number, shape, string } from "vue-types";
export default {
  components: {CircleProgress}
}
// const props={
//         inset=boolean(),
//         vertical=number(),
//         horizontal=number(),
//         blur=number(),
//         opacity=number(),
//         color=string(),
//   Angle=number(),
//   startColor=String(),
//   stopColor=String(),
//       percent=string(),
// }
</script>
<style scoped>
.text {
  @apply font-roboto font-normal flex-nowrap
     text-xxl text-colorTitle;
}
.text-in {
  @apply  absolute font-roboto font-bold text-25 mt-6 ml-6;
}
.num {
  @apply font-roboto font-bold text-norm text-colorTitle;
}
.rate {
  @apply flex flex-wrap flex-col gap-1.5 ml-[18px] mt-[11px]
  w-[114px] text-left ;
}
.rating {
  @apply flex flex-row mt-9 mb-[189px];
}
</style>
