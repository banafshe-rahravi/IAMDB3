<template>
    <div class="wrapper">
        <h2 class="similar">More like this</h2>
        <ul>
                <li v-for="movie in allMovies" class="shrink-0" >
                    <router-link :to="movie.id" @click="scrollOnTop()">
                        <img class="movie-img" :src="movie.image" alt="similar"/> >
                            <div class="bottom-content">
                        <p class="movie-title" >{{ movie.title }}</p>
                        <div class="star">
                            <img src="@/assets/images/star .png" alt="star">
                            <p>{{ movie.imDbRating }}</p>
                        </div>
                            </div>
                    </router-link>
                </li>
            </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { string } from 'vue-types';
const allMovies = ref('')
const props=defineProps({
    src:string(),
})

</script>
<style lang="postcss" scoped>
.similar{
    @apply bg-yellow-500 ml:text-24 font-bold font-roboto ls3:text-28 text-colorTitle mb-6
}
.wrapper{
    @apply ml:ml-[15px]
}
ul{
    @apply flex-row flex gap-6 overflow-x-scroll flex-nowrap
}
.movie-img{
    @apply object-cover object-center rounded-xl
    ml:w-[320px] ml:h-[342px] ls3:w-[276px] h-[409px] 
}
.movie-title{
    @apply font-roboto font-bold ml:text-xxl ml:w-[165px] ls3:text-norm ls3:w-[198px] overflow-hidden text-ellipsis whitespace-nowrap
}
.star{
    @apply inline-flex
}
p{
    @apply pl-1.5 font-normal font-roboto
     ml:text-xxl ls3:text-norm opacity-40
}
.bottom-content{
    @apply px-2.5 flex justify-between pt-3
}
</style>