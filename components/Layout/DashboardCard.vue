<script setup>

const props = defineProps({
    header: { type: String, default: null },
    buttonText: { type: String, default: 'Bearbeiten' },
    buttonLink: { type: String}
})
</script>

<template>
    <div class="grid grid-rows-[2.5rem_auto_4rem] border rounded bg-white py-3">
        <div class="px-3">
            <h2 class="font-light: text-xl text-Mittelblau">{{header}}</h2>
        </div>
        
        <div class="overflow-auto max-h-44 min-h-32">
            <slot></slot>
        </div>

        <div class="pt-3">
            <div class="px-3 flex justify-end">
                <a :href="buttonLink"
                class="flex gap-2 items-center bg-Mittelblau text-white px-3 py-2 text-sm font-bold">
                    <PencilSquareIcon class="w-5 h-5" />{{buttonText}}
                </a>
            </div>
        </div>
    </div>
</template>