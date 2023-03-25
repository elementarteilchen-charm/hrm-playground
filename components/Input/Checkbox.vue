<script setup>
    const props = defineProps({
        label: {type: String}, 
        name: {type: String, default: 'Checkbox'}, 
        checked: {type: Boolean, default: false}, 
        width: {type: String, default: ''}
    })

    let checkboxToggle = props.checked;
</script>

<template>
    <div class="space-x-2 inline flex items-center">
        <input type="checkbox" v-model="checkboxToggle"  :id="name" :name="name" />
        <label :for="name" class="" :class="width">{{label}}</label>
    </div>
        
</template>