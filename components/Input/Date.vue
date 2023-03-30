<script setup>
    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'},
        required: {type: Boolean, default: false}
    })

</script>
<template>
    <div class="pt-1 text-sm text-gray-700">
        {{label}}<span v-if="required">*</span>
    </div>
    <div class="">
        <input class="px-2 py-1 border border-gray-300 rounded" :class="width" type="date" 
        :value="value" />
    </div>
</template>