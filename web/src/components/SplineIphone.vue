<template>
    <canvas id="canvas3d1"></canvas>
</template>
<script setup>
import { Application } from '@splinetool/runtime';
import { onMounted } from 'vue';

onMounted(() => {
    const canvas = document.getElementById('canvas3d1');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/vnKzu2HN-Jap1kVi/scene.splinecode');
})

</script>
