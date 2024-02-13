<template>
  <div class="card">
    <p class="description">{{}}description</p>
    <h2 class="card-title">Details</h2>
    <div>
        <div class="writers">
            <p class="text">Writers</p><span class="content">{{}}</span>
        </div>
        <div class="geners">
            <p class="text">Genres</p><span class="content">{{  }}</span>
        </div>
        <div class="awards">
            <p class="text">Awards</p><span class="content">{{  }}</span>
        </div>
        <div class="country">
            <p class="text">Country of Origin</p><span class="content">{{  }}</span>
        </div>
        <div class="rate">
            <p class="text-1">IMDB Rating</p><span class="content-1">{{ }}</span>
        </div>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  Description:String(),
        Name:String(),
        genres:String(),
        awards:String(),
        country:String(),
        ratings:String(),
})
</script>
<style lang="postcss" scoped>
.card {
    @apply ml:mx-[15px];
  }
  .description {
    @apply mx-[15px] mb-[38px] font-roboto text-14 ls3:mb-[42px] ls3:text-xxl 
    ls3:w-[504px] opacity-60 text-colorTitle;
  }
  .card-title {
    @apply font-roboto font-bold ml:text-26 ls3:text-28 text-colorTitle;
  }
  .text{
    @apply font-roboto font-bold ml:text-xxl text-colorTitle ls3:text-norm 
  }
  .text-1{
    @apply ls3:hidden ml:font-roboto font-bold text-colorTitle text-xxl
  }
.content{
    @apply font-roboto font-bold opacity-60  text-colorTitle ml:text-14 ls3:text-xxl
}
.content-1{
    @apply ls3:hidden ml:font-roboto font-bold opacity-60  text-colorTitle ml:text-14
}
.writers{
    @apply flex border-b items-center py-1.5 border-colorBorder
}
.geners{
    @apply border-colorBorder flex border-b items-center py-1.5
}
.awards{
    @apply flex border-b items-center py-1.5  border-colorBorder
}
.country{
    @apply flex items-center py-1.5
}
.rate{
    @apply ls3:hidden ml:flex border-t items-center py-1.5  border-colorBorder
}
</style>
