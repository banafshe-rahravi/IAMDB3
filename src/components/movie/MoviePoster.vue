<template>
  <div class="background ">
    <img class="Poster" src="@/assets/images/hero1.svg" alt="alt" loading="lazy" />
    <div class="highlight"></div>
  </div>

</template>
<script setup>

</script>
<style lang="postcss" scoped>
.background{
  @apply relative
}
.poster{
 @apply ml:h-[264px] w-screen bg-cover absolute
 ml4:w-full ls:w-full ls2:w-full xxl:w-full  ls3:h-[671px] 

  }
  .highlight{
    @apply bottom-0 h-screen bg-cover absolute
     bg-no-repeat w-screen 
  }

 


</style>
