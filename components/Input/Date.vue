<script setup>
    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'},
        required: {type: Boolean, default: false},
    })

</script>
<template>
    <div class="pt-2_ text-sm font-bold text-gray-700 flex-shrink-0">
        {{label}}<span v-if="required">*</span>
    </div>
    <div class="">
        <input 
            class="px-2 py-1 border border-gray-300 rounded" 
            :class="width" 
            style="box-shadow: inset 0 2px 4px 0 rgba(50, 50, 50, 0.1)"
            type="date" 
            :value="value" />
    </div>
</template>