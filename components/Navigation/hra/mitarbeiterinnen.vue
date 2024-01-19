<script setup>

const props = defineProps({
        topMenuItems: {type: Array}, 
        active: {type: String}
        // active: {type: Number, default: 0}
      });
    
</script>

<template>
    <div class="flex justify-between print:hidden">
        
        <div class="bg-white border rounded overflow-hidden">
          <nav class="">
            <ul class="flex gap-4">
                <li v-for="item,index in topMenuItems" 
                        class="px-4 py-2 hover:bg-Hellblau hover:text-white cursor-pointer"                    
                        :class="[{'bg-Hellblau text-white': active === item.linkText}]">
                    <a :href="item.link">
                         {{item.linkText}}</a>
                </li>
            </ul>
          </nav>
        </div>

    </div>
</template>

<!-- <li v-for="item,index in topMenuItems" 
        class="px-4 py-2 hover:bg-Hellblau hover:text-white cursor-pointer"                    
        :class="[{'bg-Hellblau text-white': active == index}]"> -->