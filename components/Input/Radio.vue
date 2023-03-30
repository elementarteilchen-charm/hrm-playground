<script setup>
    const props = defineProps({
        label: {type: String}, 
        name: {type: String, default: 'radiobutton'}, 
        options: {type: Array, default: []},
        checkedIdx: {type: Number, default: 0},
        width: {type: String, default: 'w-48 lg:w-5/6'}
    })
const model = ref(props.options[props.checkedIdx]);
</script>
<template>
    <div class="grid self-start pt-1 text-sm text-gray-700">
        {{label}} 
    </div>
    <div class="">
        
        <div v-for="option, index in options" class="space-x-2 inline h-12 flex-row items-center">
            <input type="radio" :id="name+index" :name="name" :value="option" v-model="model" />
            <label :for="name+index" class="pr-4">{{option}}</label>
        </div>

    </div>
</template>