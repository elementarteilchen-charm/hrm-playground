<script setup>
    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'}
    })

</script>
<template>
    <div class="grid self-start pt-1 text-sm text-gray-700 font-light_">
        {{label}}
    </div>
    <div class="">
        <input class="px-2 py-1 border border-gray-300 rounded" :class="width" type="date" 
        :value="value" />
    </div>
</template>