<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    header: { type: String, default: null },
    buttonText: { type: String, default: 'Bearbeiten' },
    buttonLink: { type: String, default: ''},
})

</script>

<template>
    <div class="grid grid-rows-[2.5rem_auto_4rem] border rounded bg-white py-3 opacity-50 hover:opacity-100 hover:shadow-lg transition">
        <div class="px-6">
            <h2 class="font-light: text-xl text-Mittelblau">{{header}}</h2>
        </div>
        
        <div class="px-3 min-h-32 overflow-auto max-h-44">
            <slot></slot>
        </div>

        <div v-if="buttonLink" class="pt-3">
            <div class="px-6 flex justify-end">
                <a :href="buttonLink"
                class="flex gap-2 items-center text-Mittelblau border border-transparent hover:border hover:border-Hellgrau rounded px-3 py-2 text-sm font-bold">
                <!-- class="flex gap-2 items-center bg-Mittelblau text-white px-3 py-2 text-sm font-bold"> -->
                    <PencilSquareIcon class="w-5 h-5" />{{buttonText}}
                </a>
            </div>

        </div>
    </div>
</template>