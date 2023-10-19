<script setup>
    const props = defineProps({
        required: {type: Boolean}, 
        label: {type: String}, 
        placeholder: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-48 lg:w-5/6'},
        disabled: {type: Boolean, default: false}
    })

</script>
<template>
    <div v-if="label" class=" self-center pt-2_ text-sm text-gray-700 font-bold whitespace-nowrap">
        {{label}}<span v-if="required">*</span>
    </div>
    <div class="w-full">
        <input 
            class="px-2 py-1 text-Dunkelgrau border border-Hellgrau bg-white disabled:opacity-50" 
            :placeholder="placeholder"
            :class="width" 
            style="box-shadow: inset 2px 2px 2px 0 rgba(51, 51, 51, 0.1);"
            type="text" 
            :value="value" 
            :disabled="disabled"/>
    </div>
</template>

<style>

</style>