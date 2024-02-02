<template>
    <div>
      localModelValue: {{ localModelValue }}
      <hr>
      <label v-if="label" :for="id">
        {{ label }}
      </label>
      <input v-model="localModelValue" :placeholder="placeholder" :id="id" :name="name" :type="type" />
    </div>
  </template>
  
  <script setup>
  import { func, string } from 'vue-types'
  import { useLocalModelValue } from '@/composables/localModelValue.js'
  
  const props = defineProps({
      modelValue: string(),
    label: string(),
    name: string(),
    id: string(),
    placeholder: string(),
    type: string().def('text'),
    formatter: func()
  })



















  
  defineEmits(['update:modelValue', 'update:label'])
  
  const { localModelValue } = useLocalModelValue({ props })
  
  </script>
  






























  <template>
    <div class="container">
      <div class="background">
        <Title />
        <Search />
      </div>
    </div>
  </template>
  <script setup>
  import Search from "@/components/HomePage/Search.vue";
  import Title from "@/components/HomePage/Title.vue";
  </script>
  <style lang="postcss" scoped>
  .container {
    @apply ml:h-screen bg-black box-border w-auto
         ls3:bg-green-700;
  }
  
  .cards {
    @apply ml:flex flex-row flex-nowrap space-x-3 mb-[18.53px];
  }
  
  .background {
    @apply bg-pattern
  }
  .title {
    @apply ml:font-roboto text-5xl font-bold text-sm mt-[18.53px]
     text-colorTitle  text-center mb-0
    ls3:text-right m-[120px] ls3:mb-[120px] ls3:text-base
}
  </style>
  
detail:
https://api.themoviedb.org/3/account/{account_id}

movie search
https://api.themoviedb.org/3/search/movie

movie <details>https://api.themoviedb.org/3/movie/{movie_id}</details>
movie images 
https://api.themoviedb.org/3/movie/{movie_id}/images

https://api.themoviedb.org/3/movie/{movie_id}/similar


add rating:
https://api.themoviedb.org/3/movie/{movie_id}/rating
  <template>
    <div class="container">
        <div class="poster"></div>
         <h1 class="movie-name">Iron Man</h1>
         <p>directors:</p>
         <div class="date">
            <span>year</span>
            <div></div>
            <span>pg13</span>
            <div></div>
            <span>time</span>
            <div></div>
         </div>
<div>
         <btn>
            <img />
         </btn>
         <btn>
            <img/>
         </btn>
         <btn>
            <img/>
         </btn>
</div>
          <p class="description"></p>



          <div class="details">
             <h1>Details</h1>
             <span></span><span></span>
             <span></span><span></span>
             <span></span><span></span>
             <span></span><span></span>
             <span></span><span></span>
          </div>

          <div class="cast">
            <h1>cast & Crew</h1>
            <img/>
            <img/>

          </div>

    </div>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
.poster{
    @apply bg-hero1 

}

</style>