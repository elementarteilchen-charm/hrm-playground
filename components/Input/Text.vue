<script setup>
    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        readonly: {type: Boolean, default: false},
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-48 lg:w-5/6'}
    })

</script>
<template>
    <div class="grid self-start pt-2 text-sm text-gray-700">
        {{label}}
    </div>
    <div class="">
        <input class="px-2 py-1 border border-gray-300 rounded" :class="width" type="text" 
        :value="value" :readonly="readonly" width="w-16"/>
    </div>
</template>