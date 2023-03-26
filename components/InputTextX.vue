<script setup>
    import { PlusCircleIcon, XCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/outline' 
    import { reactive } from 'vue';

    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        readonly: {type: Boolean, default: false},
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-48 lg:w-5/6'}
    })
    function clearFilename() {
        alert('Clear input field');
    }
    function resetFilename() {
        alert('Reset input field to original value');
    }
</script>
<template>
    <div v-if="label" class="grid self-start pt-2 text-sm text-gray-700">
        {{label}}
    </div>
    <div class="w-full">
        <div class="flex items-center gap-4">    
            <input 
                type="text" 
                :value="value"
                class="px-2 py-1 border border-gray-300 rounded" 
                :class="width" 
                :readonly="readonly" 
                />
            <XCircleIcon class="w-5 h-5 hover:text-red-500 flex-shrink-0" @click="clearFilename"/>
            <ArrowPathIcon class="w-5 h-5 hover:text-green-500 flex-shrink-0" @click="resetFilename"/>
        </div>
    </div>
</template>