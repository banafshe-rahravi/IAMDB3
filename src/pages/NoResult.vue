<template>
<div class="wrapper">
   <div class="error-msg">
    <h1 class="number">404</h1>
    <h2 class="text">Movie not found</h2>
  </div>
</div>
</template>
<script setup></script>
<style lang="postcss" scoped>
.wrapper{
  @apply bg-black min-h-screen py-24
}
.number {
  @apply ml:font-roboto font-bold text-[96px] text-colorTitle leading-[112.5px]
       ls3:text-[128px] ls3:leading-[150px];
}
.text {
  @apply ml:font-roboto font-bold text-[40px] text-colorSearch leading-[56px]
ls3:text-[48px] ls3:leading-[46.88px];
}
.error-msg{
    @apply flex flex-wrap w-96 m-auto justify-center
    ml:mt-238.5 ls3:mt-260 
}
</style>
