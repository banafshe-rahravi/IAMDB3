<template>
    <div>
     <router-link to="/home">home</router-link>
    </div>
   
 
 <button @click="add">add</button>
 <hr>
 {{ count }}
 <hr>
 {{ double  }}
 </template>
 
 <script setup>
 import { computed } from 'vue'
 import {useMovieData } from '@/stores/movies.js'

 const { add } = useMovieData()

 const count = computed(() => useMovieData().count)
 const double = computed(()=>useMovieData().count*2)
 </script>
 <style scoped>
 </style>