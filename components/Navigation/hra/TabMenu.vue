<script setup>
    import {ExclamationTriangleIcon, ArrowRightCircleIcon, Cog6ToothIcon} from '@heroicons/vue/24/outline'

    const props = defineProps({
        heading: { type: String, default: '' },
        tabs: { type: Array, default: [] }
    })
    const activeTab = ref(props.tabs[0]);
    
    const emit = defineEmits(['newtab'])

    function changeTab(ev) {
        activeTab.value = ev
        emit('newtab',ev)
    }
</script>
<template>
    <div class="">
        <h3 v-if="heading" class="px-4 mt-6 text-lg font-light text-Blaugrau">
            {{heading}}
        </h3>   
        <nav class="mt-2">
            <ul class="text-sm">
                <li v-for="tab, index in tabs" 
                    class="border-l-4 border-white pl-4 pr-8 py-3 flex gap-2 hover:bg-gray-200" 
                    :class="[{
                        'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab
                    }]">

                    <div class="flex gap-2">
                        <span v-if="tab == 'Durchführen'"><Cog6ToothIcon class="text-orange-500 w-5 h-5"/></span>
                        <a class="cursor-pointer" @click="changeTab(tab)">
                            {{tab}} </a>
                    </div>
                </li>
                <li>
                    
                </li>
            </ul>

            <div class="mt-4 px-2 py-6 flex flex-col space-y-3">

                <a href="" class="px-3 py-2 bg-Mittelblau text-white text-center">
                    Speichern</a>
                <a href="" class="px-3 py-2 text-Mittelblau hover:underline text-center">
                    Abbrechen</a>
            </div>
        </nav>
    </div>
</template>