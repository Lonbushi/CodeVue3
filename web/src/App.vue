<template>
  <Navbav/>
  <router-view/>
</template>
<script setup>
import Navbav from './components/Navbar.vue'
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar{
  width: 10px;
  // height: 10px;
  position: absolute;
}
::-webkit-scrollbar-thumb{
  background: #ccc;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover{
  background-color: #1890ff
}
</style>
