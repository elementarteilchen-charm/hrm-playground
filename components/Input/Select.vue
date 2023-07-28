<script setup>
    const props = defineProps({
        label: {type: String}, 
        options: {type: Array, default: []},
        selected: {type: String, default: ''},
        width: {type: String, default: 'w-32'}
    })

let selectedOption = props.selected ? props.selected : props.options[0];

</script>
<template>
    <div v-if="label" class="self-center text-sm font-bold text-gray-700">
        {{label}}
    </div>
    <div class="w-full">
        <select v-model="selectedOption" name="" id="" 
                class="px-2 py-1 border border-gray-300 rounded" 
                :class="width"
                style="box-shadow: inset 0 2px 4px 0 rgba(50, 50, 50, 0.1)">
            <option v-for="option in options" :value="option">{{option}}</option>
        </select>
    </div>
</template>

