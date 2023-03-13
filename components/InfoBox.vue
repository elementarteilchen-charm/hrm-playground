<script setup>

const props = defineProps({
        title: {type: String}, 
        buttonText: {type: String, default: 'Link'},
        buttonLink: {type: String, default: '#'}
    })

</script>

<template>
    <div class="border px-4 py-2 shadow bg-white grid grid-rows-[1.25rem_1fr_auto] gap-4">
        <h3 class="font-bold text-lg grid align-content-center ">
            {{title}}
        </h3>
        <div class="text-sm">    
            <slot></slot>
        </div>
        <div class="grid justify-center ">
            <a v-show="buttonLink != '#'" :href="buttonLink" class="px-2 py-1 bg-blue-600 text-white text-sm text-center rounded">
                {{buttonText}}
            </a> 
        </div>
    </div>
</template>