<template>
  <div class="container">
    <div class="background"></div>
    <div class="twins">
    <Title/>
    <Search />
   
    <!-- <div class="no-result" v-show="!isLoading && !visibleMovies.length">
      <code style="opacity: 0.4"><NoResult /></code>
    </div>
    <div class="loading" v-if="isLoading">
      <code style="opacity: 0.4"> Add loading</code>
    </div> -->
    <!-- <router-link to="/test">click</router-link> -->
  </div>
</div>
</template>
<script setup>
// import { ref, computed } from 'vue'
// import Movie from '@/pages/Movie.vue'
// import NoResult from '@/pages/NoResult.vue'
import Search from "@/components/Search/Search.vue";
import Title from "@/components/Search/Title.vue";



</script>
<style lang="postcss" scoped>
.container {
  @apply bg-black w-full h-screen block ls3:mb-28;
}
.background {
  @apply flex ml:bg-pattern bg-black bg-no-repeat
  h-[727px] m-auto
   w-full inset-0  bg-cover bg-center 
  ls3:bg-patterns ls3:w-screen ls3:h-full 
}
.twins{
  @apply ls3:flex ls3:flex-col ls3:w-screen ls3:mr-[120px]
}
</style>
