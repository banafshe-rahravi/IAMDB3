<template>
  <div class="search">
    <Input class="input-1" 
    v-model="userSearch"
    type="text" 
    placeholder="your favorite movie " />
    <Input class="input-2"
    v-model="userSearch"
     type="text"
      placeholder="type your favorite movie ..."
    />

    <div v-if="movies"
                        class="hidden lg:block list-none flex-col  lg:w-[837px] lg:h-h-415 divide-y divide-gray-500 bg-zinc-800 cursor-pointer absolute bottom-20 left-6 overflow-y-scroll ">
                        <div v-for="movie in visibleMovies">
                            <router-link :to="movie.id" class="inline-flex p-3 ">
                                <img :src="movie.image" alt="movie poster" class="object-cover object-center w-14 h-20">
                                <div class="flex flex-col justify-center pl-5">
                                    <span class="text-main-color font-normal text-f25 pb-3">{{ movie.title }}</span>
                                    <span class="text-main-color font-normal text-f18">{{ movie.description }}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>

    <!-- <button class="btn" tag="router-link" to="{name:'movie'}">
      <p>search</p>
      <span><img src="@\assets\images\Vector (9).png" alt="search"/></span>
    </button> -->
    <MovieButton
      class="btn"
      @click="searchMovie()"
      :icon="'vector'"
      default
      tag="router-link"
      :to="'/movie'"
      >search</MovieButton
    >
  </div>
</template>
<script setup>
const movies = ref(null)
const userSearch = ref('')
import { ref,computed } from "vue";
import { func, string } from "vue-types";
import MovieButton from "../base/MovieButton.vue";


const props = defineProps({
  modelValue: string(),
  label: string(),
  name: string(),
  id: string(),
  placeholder: string(),
  type: string().def("text"),
  formatter: func(),
});

const visibleMovies = computed(() => {
  if (userSearch.value) {
    return movies.value.filter((movie) => movie.id === userSearch.value)
  }
  return movies.value
})

const searchMovie = () => {
            fetch('https://api.themoviedb.org/3/search/movie' + this.UserSearch)
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.movies = response.results
                    isOpen = true
                });
        }

console.log(searchMovie)


// const fetchMovies = new Promise(async(resolve) => {
//    const response = await fetch('https://api.themoviedb.org/3/search/movie')
//   const movies = await response.json() 
//   resolve( movies)
// })
// fetchMovies.then(movie =>{
//   console.log(movies)
// })
// fetchMovies()


// const isLoading = ref(false)
// const searchMovie = async() => {
//   isLoading.value = true
//   const response = await fetch('https://api.themoviedb.org/search/movie')
//   movies.value = await response.json()
//   console.log(movies)
//   isLoading.value = false
// }
//  searchMovie()

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjFhN2NlNmZjZjRjOTJkMGIxMmZhNTYzNDY3Y2YzOSIsInN1YiI6IjY1YTUzYTE1MmQxZTQwMDEyMmNkZDRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0sIzp96GCAYlHXRgeS6v53N4OhSNucc0L1YPZSEJxe4",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/search/collection?include_adult=false&language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// {
//       "adult": false,
//       "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//       "genre_ids": [
//         18,
//         53,
//         35
//       ],
//       "id": 550,
//       "original_language": "en",
//       "original_title": "Fight Club",
//       "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//       "popularity": 73.433,
//       "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//       "release_date": "1999-10-15",
//       "title": "Fight Club",
//       "video": false,
//       "vote_average": 8.433,
//       "vote_count": 26279
//     },
</script>

<style lang="postcss" scoped>
.search {
  @apply ml:flex flex-col mx-[15px] relative
     ls3:flex-row ls3:basis-11/12  ml:mb-[120px] ls3:relative  ls3:-mt-96 
     ls3:grow  ls3:mx-[120px];
}
.input-1 {
  @apply ml:bg-black w-11/12 h-11 text-gray-400 border border-solid
     border-white rounded-all mx-[15px] px-8 py-3 mb-3
    ls3:hidden;
}
.input-2 {
  @apply hidden ml:bg-black  w-screen h-[61px] text-gray-400 border border-solid 
     border-white rounded-all mx-4 px-8  text-left 
    ls3:flex basis-5/6 py-[18px] mr-3;
}
.btn {
  @apply ml:bg-red-700 h-11 w-11/12 text-white font-normal rounded-all
     border-none py-3 px-6 mx-[15px] text-center text-xl
      ls3:ml-3 flex basis-1/6 grow-0 
      ls3:px-8 ls3:py-[18px] ls3:h-[61px] ls3:text-2xl;
}
.img {
  @apply ml:ml-3 pt-1;
}
</style>
