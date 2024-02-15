<template>
  <canvas id="canvas3d"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Application } from '@splinetool/runtime';

// mounted时创建场景 
onMounted(() => {
  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/hojHaP9PgWAFEJXa/scene.splinecode');
})

</script>
