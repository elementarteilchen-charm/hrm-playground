<script setup>
    const props = defineProps({
        label: {type: String}, 
        checkboxLabel: {type: String}, 
        name: {type: String, default: 'Checkbox'}, 
        checked: {type: Boolean, default: false}, 
        labelStyle: {type: String, default: ''},
        checkboxStyle: {type: String, default: ''}
    })

    let checkboxToggle = props.checked;
</script>

<template>
    
    <div  class="grid self-start pt-1 text-sm text-gray-700">
        <span v-if="label">{{label}}</span>
    </div>
    <div class="space-x-2 flex items-center">
        <input type="checkbox" v-model="checkboxToggle"  :class="checkboxStyle" :id="name" :name="name" />
        <label :for="name" :class="labelStyle">{{checkboxLabel}}</label>
    </div>
    
</template>