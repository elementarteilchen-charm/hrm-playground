<script setup>
    const props = defineProps({
        title: {type: String, default: null}, 
    })
</script>

<template>
  <div class="bg-gray-100 p-4 rounded">
  <h3 v-if="title" class="mb-2 font-bold text-gray-900 ">{{title}}</h3>
    <slot></slot>
  </div>
</template>
