<script setup>
    const props = defineProps({
        required: {type: Boolean}, 
        label: {type: String}, 
        value: {type: String, default: ''}, 
        readonly: {type: Boolean, default: false},
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-48 lg:w-5/6'}
    })

</script>
<template>
    <div v-if="label" class=" self-start pt-2 text-sm text-gray-700 whitespace-nowrap">
        {{label}}<span v-if="required">*</span>
    </div>
    <div class="w-full">
        <input 
            class="px-2 py-1 border border-gray-300 rounded" 
            :class="width" 
            style="box-shadow: inset 0 2px 4px 0 rgba(50, 50, 50, 0.1)"
            type="text" 
            :value="value" 
            :readonly="readonly"/>
    </div>
</template>