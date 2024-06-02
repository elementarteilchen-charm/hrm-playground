<script setup>
    import {HandRaisedIcon, PlusCircleIcon, CalendarDaysIcon} from '@heroicons/vue/24/outline'

    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'},
        required: {type: Boolean, default: false},
    })

</script>

<template>
    <div class="self-center text-sm font-bold text-gray-700 flex-shrink-0">
        {{label}}<span v-if="required">*</span>
    </div>
    
    <div class="flex items-center gap-x-2">
        <input 
            class="px-2 py-1 border border-gray-300 rounded shadow-inner" 
            :class="width" 
            type="date"
            :value="value" />
    </div>
</template>