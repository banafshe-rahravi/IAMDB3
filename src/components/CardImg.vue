<template>
    <div class="p-image">
        <img class="p-img-content" :src="src" :alt="alt" :height="height" loading="lazy"/>
    </div>
</template>

<script setup>
import { string, oneOfType, number } from 'vue-types'

defineProps({
    src: string().isRequired,
    alt: string().isRequired,
    height: oneOfType([number(), string().validate(v => !isNaN(+v))]).isRequired
})
</script>




.input-1 {
    @apply ml:bg-black w-11/12 h-11 text-gray-400 border border-solid
     border-white rounded-all mx-[15px] px-8 py-3 mb-3
    ls3:hidden;
  }
  .input-2 {
    @apply ml:bg-black  w-screen h-[61px] text-gray-400 border border-solid 
     border-white rounded-all mx-4 px-8  text-left hidden
    ls3:flex basis-5/6 py-[18px] mr-3 ml-[120px];
  }
  .btn {
    @apply ml:bg-red-700 h-11 w-11/12 text-white font-normal rounded-all
     border-none py-3 px-6 mx-[15px] text-center
      ls3:ml-3 flex basis-1/6 grow-0 ls3:px-8 ls3:py-[18px] ls3:h-[61px];
  }
    

  lineHeight:{
    sx:"56.25px",
    xl:"112.5px",
    sm:"20px",
    sd:"24px",
  
  },

  .background {
    background-image:
     url("@/assets/images/Group 43 (1).png")
     
 }
  <template>
    <div class="container">
      <ul class="cards">
        <!-- <Img src="" alt="card" /> -->
        <!-- <li class="line-7">
      <img class="card-20" src="" alt="card">
      <img class="card-21" src="" alt="card">
    </li> -->
        <li class="line-1">
          <img class="card-1" src="@\assets\images\image 11.png" alt="card" />
          <img class="card-2" src="@\assets\images\image 27.png" alt="card" />
        </li>
        <li class="line-2">
          <img class="card-3" src="@\assets\images\image 5.png" alt="card" />
          <img class="card-4" src="@\assets\images\image 28.png" alt="card" />
        </li>
        <li class="line-3">
          <img class="card-5" src="@\assets\images\image 23.png" alt="card" />
          <img class="card-6" src="@\assets\images\image 10.png" alt="card" />
          <img class="card-7" src="@\assets\images\image 14.png" alt="card" />
        </li>
        <li class="line-4">
          <img class="card-8" src="@\assets\images\image 16.png" alt="card" />
          <img class="card-9" src="@\assets\images\image 18.png" alt="card" />
          <img class="card-10" src="@\assets\images\image 9.png" alt="card" />
        </li>
        <li class="line-5">
          <img class="card-11" src="@\assets\images\image 25.png" alt="card" />
          <img class="card-12" src="@\assets\images\image 24.png" alt="card" />
        </li>
        <li class="line-6">
          <img class="card-13" src="@\assets\images\image 30.png" alt="card" />
        </li>
      </ul>
      <section>
        <Title />
        <div class="line-7">
          <img class="card-14" src="@\assets\images\image 17.png" alt="card" />
          <img class="card-15" src="@\assets\images\image 26.png" alt="card" />
          <img class="card-16" src="@\assets\images\image 29.png" alt="card" />
        </div>
        <Search />
      </section>
    </div>
  </template>
  <script setup>
  // import Img from '@/components/Img.vue'
  import Search from "@/components/Search.vue";
  import Title from "@/components/Title.vue";
  </script>
  <style lang="postcss" scoped>
  .container {
    @apply ml:h-screen bg-black box-border w-auto
       ls3:bg-green-700 ;
  }
  
  .cards {
    @apply ml:flex flex-row flex-nowrap space-x-3 mb-[18.53px];
  }
  
  .line-1 {
    @apply ml:list-image-none;
  }
  .line-7 {
    @apply ml:list-image-none;
  }
  .card-1 {
    @apply ml:relative z-10 h-20 w-14 object-contain -mt-2;
  }
  .card-2 {
    @apply ml:mt-0;
  }
  .line-2 {
    @apply ml:mt-2;
  }
  .card-3 {
    @apply ml:h-20 w-14 object-fill -ml-1 rotate-3;
  }
  .card-4 {
    @apply ml:h-20 w-14 object-fill -ml-7 mt-1 rotate-6;
  }
  .card-5 {
    @apply ml:h-20 w-14 object-contain -mt-0 ml-5;
  }
  .line-3 {
    @apply ml:-mt-8;
  }
  .card-6 {
    @apply ml:h-20 w-14 object-fill -ml-2 -mt-7;
  }
  .card-7 {
    @apply ml:h-20 w-14 object-fill -ml-8 mt-1;
  }
  .line-4 {
    @apply ml:-mt-6;
  }
  .card-8 {
    @apply ml:relative z-30 h-20 w-14 object-contain -mt-1;
  }
  .card-9 {
    @apply ml:h-20 w-14 object-fill  relative z-40 -ml-7 -mt-5;
  }
  .card-10 {
    @apply ml:h-20 w-14 object-fill -ml-14 mt-2;
  }
  .card-11 {
    @apply ml:h-20 w-14 object-contain mt-0;
  }
  .card-12 {
    @apply ml:h-20 w-14 relative z-50 -ml-8 -mt-3;
  }
  .card-13 {
    @apply ml:-mt-1;
  }
  .line-5 {
    @apply ml:-mt-6;
  }
  .line-6 {
    @apply ml:list-image-none;
  }
  
  .line-7 {
    @apply ml:inline-flex;
  }
  .card-14 {
    @apply ml:-ml-4 -mt-3 h-20 w-14 object-contain mb-20;
  }
  .card-15 {
    @apply ml:mt-2 h-20 w-14 rotate-2 mb-20;
  }
  .card-16 {
    @apply ml:mt-6 h-20 w-14 rotate-2;
  }
  </style>
  
  
.title {
    @apply ml:font-roboto text-5xl font-bold text-colorTitle bg-colorTheme text-center 
    ls3:text-8xl ls3:text-right m-[120px] ls3:mb-[120px]
}



<div class="link">
  <MovieButton class="play" :icon="'play'" default
    >Watch thrailer</MovieButton
  >

  <span class="share">
    <MovieButton :icon="'share'" tag="label" is-icon-only />
    <input type="checkbox" name="isShare" />
  </span>

  <span class="fav">
    <MovieButton
      :icon="isFav ? 'heart-filled' : 'heart-empty'"
      tag="label"
      is-icon-only
    />
    <input type="checkbox" name="isFav" />
  </span>
</div>
</template>



<!-- .play{
  @apply inline-block font-roboto items-center justify-center cursor-pointer text-colorTitle bg-colorSearch
rounded-all ls3:w-[227px] ls3:h-[61px] ml:w-[177px] ml:h-11 
} -->






{
"adult": false,
"backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
"belongs_to_collection": null,
"budget": 63000000,
"genres": [
{
"id": 18,
"name": "Drama"
}
],
"homepage": "http://www.foxmovies.com/movies/fight-club",
"id": 550,
"imdb_id": "tt0137523",
"original_language": "en",
"original_title": "Fight Club",
"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
"popularity": 71.253,
"poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
"production_companies": [
{
"id": 711,
"logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
"name": "Fox 2000 Pictures",
"origin_country": "US"
},
{
"id": 508,
"logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
"name": "Regency Enterprises",
"origin_country": "US"
},
{
"id": 4700,
"logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
"name": "The Linson Company",
"origin_country": "US"
},
{
"id": 25,
"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
"name": "20th Century Fox",
"origin_country": "US"
},
{
"id": 20555,
"logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
"name": "Taurus Film",
"origin_country": "DE"
}
],
"production_countries": [
{
"iso_3166_1": "DE",
"name": "Germany"
},
{
"iso_3166_1": "US",
"name": "United States of America"
}
],
"release_date": "1999-10-15",
"revenue": 100853753,
"runtime": 139,
"spoken_languages": [
{
"english_name": "English",
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "Mischief. Mayhem. Soap.",
"title": "Fight Club",
"video": false,
"vote_average": 8.44,
"vote_count": 27950
}