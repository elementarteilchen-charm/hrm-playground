<script setup>
    import {Cog6ToothIcon, ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'

    const props = defineProps({
        schritte: {type: array, default: ['Eins']}, 
    })
    
    const activeTab = ref(props.schritte[0]);
</script>

<template>
    <!-- <div class="flex items-center gap-x-4 border rounded bg-white">
        
        <div v-for="schritt, index in schritte">
            <button 
                @click="activeTab = schritt"
                class="border-transparent rounded px-2 py-3 flex gap-2 items-center group">
                <div 
                    class="rounded-full  text-white p-1 w-8 
                            group-hover:bg-Mittelblau 
                            group-hover:scale-125
                            transition"
                    :class="{'bg-Mittelblau': activeTab === schritt, 'bg-Blaugrau': activeTab != schritt}">
                    {{index+1}} 
                </div> 
                <div class="group-hover:text-Mittelblau"
                    :class="{'text-Mittelblau': activeTab === schritt, 'text-Blaugrau': activeTab != schritt}" >
                    {{schritt}}
                </div>
            </button>
        </div>
    </div> -->
</template>