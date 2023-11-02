<script setup>
const props = defineProps({
    title: { type: String, default: null },
})
</script>
<template>
    <div>
        <h3 v-if="title" class="mb-1 text-lg text-Dungelblau font-light text-gray-900 ">{{title}}</h3>
        <div class="bg-gray-100 p-4 rounded">
            <slot></slot>
        </div>
    </div>
</template>