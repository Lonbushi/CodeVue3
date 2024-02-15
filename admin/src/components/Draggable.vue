<template>
    <div class="draggable" :style="{ top: position.y + 'px', left: position.x + 'px' }" @mousedown="startDrag">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        startPosition: { x: 0, y: 0 },
        position: { x: 0, y: 0 },
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startPosition = { x: event.clientX, y: event.clientY };
  
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.stopDrag);
      },
      drag(event) {
        if (!this.isDragging) return;
  
        const deltaX = event.clientX - this.startPosition.x;
        const deltaY = event.clientY - this.startPosition.y;
  
        this.position.x += deltaX;
        this.position.y += deltaY;
  
        this.startPosition = { x: event.clientX, y: event.clientY };
      },
      stopDrag() {
        this.isDragging = false;
  
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('mouseup', this.stopDrag);
      },
    },
  };
  </script>
  
  <style>
  .draggable {
    position: absolute;
    cursor: move;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    padding: 10px;
    min-width: 100px;
    min-height: 100px;
  }
  </style>
  
  
  