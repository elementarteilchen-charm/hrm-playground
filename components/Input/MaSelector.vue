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
    <div class="grid grid-cols-[minmax(6rem,min-content)_1fr]">
        <div v-if="label" class=" self-center text-sm text-gray-700 font-bold whitespace-nowrap">
            {{label}}<span v-if="required">*</span>
        </div>
        <div class="w-full">
            <input 
                class="px-2 py-1 text-Dunkelgrau border border-Hellgrau bg-white shadow-inner" 
                :class="width" 
                
                type="text" 
                :value="value" 
                :readonly="readonly"/>
        </div>
    </div>
</template>