<template>
  <div class="movie-cover">
    <img class="cover-img" src="@/assets/images/image 2 (2).png" alt="alt" />
    <Rating />
    <!-- <img src="@/assets/images/Ellipse 4.png" /> -->
  </div>
</template>
<script setup>
import Rating from "../movie/Rating.vue";
import { string, number, oneOfType } from "vue-types";
const props = defineProps({
  src: string(),
  alt: string(),
  height: oneOfType([number(), string().validate((v) => !isNaN(+v))]),
});
</script>
<style lang="postcss" scoped>
.movie-cover {
  @apply hidden ls3:block  pl-16 -mt-11 -ml-16 mr-14;
}
.cover-img {
  @apply ls3:rounded-xl object-cover h-[415px] w-[276px]  mb-[36px]
   drop-shadow-[3xl];
}
</style>
