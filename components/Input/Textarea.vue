<script setup>
    const props = defineProps({
        label: {type: String}, 
        placeholder: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        class: {type: String, default: 'w-48 lg:w-5/6'},
        text: {type: String, default: ''},
    })
    let content = props.text;
</script>
<template>
    <div v-if="label" class="grid self-start pt-2 text-sm text-gray-700 whitespace-nowrap">
        {{label}}
    </div>
    <div class="w-full">
        <textarea 
            v-model="content"
            class="px-2 py-1 border border-gray-300 rounded text-sm"
            :class="class"
            :placeholder="placeholder">
        <slot></slot>
        </textarea>
    </div>
</template>