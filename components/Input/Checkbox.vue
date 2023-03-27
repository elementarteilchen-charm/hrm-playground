<script setup>
    const props = defineProps({
        label: {type: String}, 
        name: {type: String, default: 'Checkbox'}, 
        checked: {type: Boolean, default: false}, 
        labelStyle: {type: String, default: ''},
        checkboxStyle: {type: String, default: ''}
    })

    let checkboxToggle = props.checked;
</script>

<template>
    <div class="space-x-2 inline flex items-center">
        <input type="checkbox" v-model="checkboxToggle"  :class="checkboxStyle" :id="name" :name="name" />
        <label :for="name" :class="labelStyle">{{label}}</label>
    </div>
        
</template>