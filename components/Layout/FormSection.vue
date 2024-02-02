<script setup>
const props = defineProps({
    title: { type: String, default: null },
})
</script>
<template>
    <div>
        <div class="bg-gray-100 px-4 py-3 rounded">
        <h3 v-if="title" class="mb-3 text-lg font-light text-secondary  text-gray-900 ">{{title}}</h3>
            <slot></slot>
        </div>
    </div>
</template>