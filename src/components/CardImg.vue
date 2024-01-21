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