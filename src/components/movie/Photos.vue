<template>
    <div class="photos">
        <h2>Photos</h2>
       <div>
        <img>
       </div>
    </div>
</template>
<script setup>
</script>
<style  lang="postcss" scoped>
.photos{
    @apply bg-red-400 mx-[15px] ls3:mx-[132px]
}
h2{
    @apply ml:text-24 font-bold font-roboto ls3:text-28 text-colorTitle mb-6
}
img{
    @apply ml:w-[158px] ml:h-[102px] rounded-xl w-[216px] h-[144px] object-cover object-center cursor-pointer

}
</style>