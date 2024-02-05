<template>
  <div class="cast-crew">
    <h2 class="cast">Cast & Crew</h2>
     
   <!-- <div class="cast-content" v-if="list bazigaran.length > 0"
       v-for="bazigar in listeKameleBazigaran.slice(0,tedadeCast)">
            <img class="cast-img" src="src" alt="cast&crow" >
            <div class="cast-text">
                <p class="line-1"> {{  }}</p>
                <p class="line-2">as {{ }}</p>
            </div>
        </div> -->
<p>name{{  }}</p>
<p>name</p>
<p></p>
<p></p>
<p></p>
<p></p>
    <div class="show" @click="show()">
      <span>show all</span>
      <img class="icon" 
      src="@/assets/images/Frame 7.png"
       alt="show all" />
    </div>
  </div>
</template>
<script setup>
const show = ()=>{}
</script>
<style lang="postcss" scoped>
.cast {
  @apply font-roboto text-colorTitle font-bold ml:text-24  ls3:text-28;
}
.cast-crew {
  @apply mt-14 ml-[15px];
}
.cast-content {
  @apply flex py-6;
}
.cast-img {
  @apply bg-red-500 w-[75px] h-[75px] object-cover
   object-center rounded-full;
}
.cast-text {
  @apply flex flex-col justify-center pl-3 w-full;
}
.line-1 {
  @apply font-bold  pb-1.5 text-xxl;
}
.line-2 {
  @apply font-normal text-14 opacity-60;
}
.show {
  @apply flex justify-center ls3:justify-end pt-1.5;
}
.icon {
  @apply w-[27px] h-[27px] ml-[12px];
}
span {
  @apply font-roboto text-colorSearch font-medium text-norm;
}
p{
  @apply text-colorTitle
}
</style>
