<template>
  <div class="card">
    <TitleMovie />
    <Buttons />
    <DetailList />
  </div>
</template>
<script setup>
import TitleMovie from "@/components/MovieInfo/MovieTitle.vue";
import Buttons from "@/components/MovieInfo/Buttons.vue";
import DetailList from "@/components/MovieInfo/DetailList.vue";
</script>
<style lang="postcss" scoped>
.card {
  @apply basis-full ls3:basis-2/4;
}
</style>
