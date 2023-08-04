<script setup>
    import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
    const showNotification = ref(true)
</script>
<template>
    <div class="flex gap-2 border-l-4 border-orange-500 rounded-r p-2 bg-gray-100 text-sm text-gray-700">
        <ExclamationTriangleIcon class="w-5 h-5" @click="showNotification = !showNotification"/>
    	<div v-show="showNotification">
            <slot></slot>   
        </div>
    </div>
</template>