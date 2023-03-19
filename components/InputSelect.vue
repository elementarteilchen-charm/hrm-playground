<script setup>
    const props = defineProps({
        label: {type: String}, 
        options: {type: Array, default: []},
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'}
    })

</script>
<template>
    <div class="grid self-center text-sm_ text-gray-400 _font-bold">
        {{label}}
    </div>
    <div>
        <select name="" id="" class="px-2 py-1 border border-gray-300 rounded" :class="width">
            <option v-for="option in options" value="">{{option}}</option>
        </select>
        
    </div>
</template>