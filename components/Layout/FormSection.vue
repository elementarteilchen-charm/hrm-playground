<script setup>
const props = defineProps({
    title: { type: String, default: null },
})
</script>
<template>
    <div>
        <h3 v-if="title" class="mb-3 text-lg font-bold ">{{title}}</h3>
        <div class="bg-gray-100 px-4 py-3 rounded">
            <slot></slot>
        </div>
    </div>
</template>