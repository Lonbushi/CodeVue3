<template>
    <div class="droppable" @dragover.prevent @drop="handleDrop">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        this.$emit('dropped', data);
      },
    },
  };
  </script>
  
  <style>
  .droppable {
    border: 2px dashed #ccc;
    min-width: 1000px;
    min-height: 1000px;
    position: relative;
  }
  </style>
  