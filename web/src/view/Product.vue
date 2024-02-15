<template>
    <div>
        <video class="video" autoplay="true" width="390" muted="true" preload="none">
            <source type="video/mp4" :src="videoUrl">
        </video>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const videoUrl = ref('../../public/small_2x.mp4')
</script>