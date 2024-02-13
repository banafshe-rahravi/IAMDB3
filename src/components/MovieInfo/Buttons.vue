<template>
  <div class="link">
    <MovieButton class="play" :icon="'play'" default tag="a"
      ><a>Watch thrailer</a></MovieButton
    >

    <span class="share">
      <MovieButton :icon="'share'" tag="label" is-icon-only />
      <!-- <input type="checkbox" name="share" /> -->
    </span>

    <span class="fav">
      <MovieButton
    :icon="isFav ? 'heart-filled' : 
    'heart-empty'"
        tag="label"
        is-icon-only
      />
      <input value="movie"
       type="checkbox" name="isFav" />
    </span>
  </div>
</template>

<script setup>
import MovieButton from "@/components/base/MovieButton.vue";
import { string } from "vue-types";
// import MovieIcon from "@/components/base/MovieIcon.vue";
const props = defineProps({
  icon:string(),
})
</script>

<style lang="postcss" scoped>
.link {
  @apply flex gap-[18px] mb-10 items-center no-underline;
}
</style>
