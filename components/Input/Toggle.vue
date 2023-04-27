<script setup>
    const props = defineProps({
        label: {type: String}, 
        checkboxLabel: {type: String}, 
        name: {type: String, default: 'Checkbox' + Math.floor(Math.random() * 100)}, 
        checked: {type: Boolean, default: false}, 
        labelStyle: {type: String, default: ''},
        checkboxStyle: {type: String, default: ''}
    })

    let checkboxToggle = ref(props.checked);
</script>

<template>
    
    <div  class="grid self-center _pt-2 text-sm font-bold text-gray-700">
        <span v-if="label" class="whitespace-nowrap">{{label}}</span>
    </div>
    <div class="space-x-2 flex items-center">
        <label  :for="name"  
                class="relative border border-gray-400 bg-gray-300 w-12 h-6 rounded-full cursor-pointer"
        >
            <input  type="checkbox" 
                    class="sr-only peer" 
                    v-model="checkboxToggle" 
                    :id="name" :name="name" />
            <span class="peer-checked:bg-blue-500
                        peer-checked:left-6
                        absolute left-1 top-[0.2rem]
                        w-4 h-4
                        bg-gray-600 rounded-full
                        transition-all duration-300
                        "></span>
        </label>
    </div>
    
</template>