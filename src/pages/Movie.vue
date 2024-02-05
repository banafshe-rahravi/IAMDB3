<template>
  <div v-if="isLoading">Is Looooooaaaading ...</div>
  <div v-else>
    <!-- <div class="container">
      <Poster />
      <CoverImg />
      <MovieInformation />
      <CastAndCrew />
      <photos />
      <MoreLike />
      <Faq />
    </div> -->
    <div class="container">
      <div class="wrapper">
        <MoviePoster />
        <section>
          <div class="first">
            <div class="first-1">
           <!-- <RatingScore/> -->
           <CoverImg />      
            </div>
            <div class="first-2">
              <MovieInformation />
            </div>
            <div class="first-3">
              <CastAndCrew />
            </div>
          </div>
        </section>
        <div>
          <photos />
        </div>
        <div>
          <MoreLike />
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,computed } from "vue";
const isLoading = ref(false);
// const route = useRoute()
import CoverImg from "@/components/movie/CoverImg.vue";
import MovieInformation from "@/components/movie/MovieInformation.vue";
import MoviePoster from "@/components/movie/MoviePoster.vue";
import CastAndCrew from "@/components/Cast/CastAndCrew.vue";
import photos from "@/components/movie/Photos.vue";
import MoreLike from "@/components/movie/MoreLike.vue";
import Faq from "@/components/movie/Faq.vue";
import { bool, number, shape, string,object } from "vue-types";
// import RatingScore from "@/components/Cover/RatingScore.vue";

const props = defineProps({
  movie: shape({
    adult: bool(),
    backdrop_path:string(),
    belongs_to_collection:number(),
    budget: number(),
    genres: shape({
      id: number(),
      name: string(),
    }),
    homepage: string(),
    id: number(),
    imdb_id: string(),
    original_language: string(),
    original_title: string(),
    overview: string(),
    popularity: number(),
    poster_path: string(),
    production_companies: shape({
      id: number(),
      logo_path: string(),
      name: string(),
      origin_country: string(),
    }),
    production_countries: shape({
      iso_3166_1: string(),
      name: string(),
    }),
    release_date: string(),
    revenue: number(),
    runtime: number(),
    spoken_languages: shape({
      english_name: string(),
      iso_639_1: string(),
      name: string(),
    }),
    status: string(),
    tagline: string(),
    title: string(),
    video: bool(),
    vote_average: number(),
    vote_count: number(),
  }),
});

const MovieInfo = computed(()=>{
   if(props.movie){
const name = props.movie.genres.name
   }
})


</script>
<style lang="postcss" scoped>
.wrapper {
  @apply bg-backgroundColor ml:px-[15px];
}
.btn-play {
  @apply text-red-700;
}
.container {
  @apply w-full mx-auto;
}
.first {
  @apply block relative ls3:ml-[132px]  ls3:gap-[60px] ls3:-mt-44 ml:items-center ls3:flex ls3:flex-row;
}
.first-2 {
  @apply ls3:-mt-60;
}
.first-3 {
  @apply mb-4;
}
</style>
