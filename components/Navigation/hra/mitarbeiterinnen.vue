<script setup>

const props = defineProps({
        topMenuItems: {type: Array}, 
        active: {type: Number, default: 0}
      });
    
</script>

<template>
    <div class="flex justify-between">
        
        <div class="bg-white border rounded overflow-hidden">
          <nav class="">
            <ul class="flex gap-4">
                <li v-for="item,index in topMenuItems" 
                        class="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer"                    
                        :class="[{'bg-blue-700 text-white': active == index}]">
                    <a :href="item.link">
                         {{item.linkText}}</a>
                </li>
            </ul>
          </nav>
        </div>

    </div>
</template>