<template>
  <div class="faqs">
    <h2 class="faq">FAQs</h2>
    <!-- <div class="faqs-content" v-for="(faq, index) in faqs">
      <h2 class="title-faqs" @click="showAnswer(index)">{{ faq.question }}</h2>
      <p class="text-faqs" v-show="isOpen(index)">{{ faq.answer }}</p>
    </div> -->
  </div>
</template>
<script setup></script>
<style lang="postcss">
.faq {
  @apply bg-green-800 ml:text-24 font-bold font-roboto ls3:text-28 text-colorTitle mb-6;
}
.faqs-content {
  @apply pb-3;
}
.title-faqs {
  @apply font-roboto font-bold pb-1.5 ml:text-norm ls3:text-2xl;
}
.text-faqs {
  @apply font-roboto font-normal ml:text-12 ls3:text-xxl pl-7 pb-3 
     text-colorTitle opacity-60 border-l-4 border-colorSearch cursor-pointer;
}
</style>
