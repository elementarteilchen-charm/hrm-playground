<script setup>
    import { CheckCircleIcon,  } from '@heroicons/vue/24/outline'
    const showNotification = ref(true)
</script>
<template>
    <div class="flex gap-2 border-l-4 border-blue-500 rounded-r p-2 bg-gray-100 text-sm text-gray-700">
        <CheckCircleIcon class="w-5 h-5" @click="showNotification = !showNotification"/>
    	<div v-show="showNotification">
            <slot></slot>   
        </div>
    </div>
</template>