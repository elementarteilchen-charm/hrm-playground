<script setup>

const props = defineProps({
        title: {type: String}, 
        buttonText: {type: String, default: 'Link'}, 
        buttonLink: {type: String, default: '#'}
    })

</script>

<template>
  <div class="border rounded border-red-300 p-4 w-1/2 mx-auto text-center shadow-md">
    <h1 class="font-bold text-xl py-2">{{title}}</h1>
    <slot />
    <div class="py-4">
      <a href="#" class="px-2 py-1 bg-gray-600 text-white text-sm text-center rounded">
          {{buttonText}}
      </a> 
    </div>
  </div>
</template>
