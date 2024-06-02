<script setup>
    const props = defineProps({
        label: {type: String}, 
        placeholder: {type: String, default: ''}, 
        class: {type: String, default: 'w-48 lg:w-5/6'},
        text: {type: String, default: ''},
        style: {type: String, default: ''}
    })

</script>
<template>
    <div v-if="label" class="grid self-start pt-2 text-sm font-bold text-gray-700 whitespace-nowrap">
        {{label}}
    </div>
    <div class="w-full">
        <textarea 
            :name="label" :id="label"
            class="shadow-inner px-2 py-1 border border-gray-300 rounded text-sm"
            rows=5
            :class="class"
            :placeholder="placeholder"
            :style="style">{{text}}</textarea>
    </div>
</template>
<style>
    textarea::placeholder {
        color: #ccc;
    }
</style>