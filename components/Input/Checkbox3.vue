<script setup>
    defineEmits(['no-name-change'])

    const props = defineProps({
        label: {type: String}, 
        checkboxLabel: {type: String}, 
        name: {type: String, default: 'Checkbox' + Math.floor(Math.random() * 100)}, 
        checked: {type: Boolean, default: false}, 
        labelStyle: {type: String, default: ''},
        checkboxStyle: {type: String, default: ''}
    })

    let checkboxToggle = props.checked;

</script>

<template>
    
    <div class="grid self-center text-sm font-bold text-gray-700">
        <span v-if="label" class="whitespace-nowrap">{{label}}</span>
    </div>
    <div class="space-x-2 flex items-center">
        <input  type="checkbox" 
                
                @click="$emit('no-name-change')"
                v-model="checkboxToggle" 
                class="border border-gray-300 w-5 h-5 rounded-sm" 
                style="box-shadow:inset 2px 2px 2px 0 rgba(51, 51, 51, 0.1);"
                :class="checkboxStyle" 
                :id="name" :name="name" />
        <label :for="name"  :class="labelStyle">
            <span v-if="checkboxLabel">{{checkboxLabel}}</span>
            <span v-else><slot></slot></span>
        </label>
    </div>
    
</template>