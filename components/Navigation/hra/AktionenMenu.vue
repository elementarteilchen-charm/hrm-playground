<script setup>
    import {ArrowRightCircleIcon} from '@heroicons/vue/24/outline'

    const props = defineProps({
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
        <nav class="mt-4">
            <ul class="text-sm">
                <li v-for="tab, index in tabs" 
                    class="border-l-4 border-white pl-4 pr-8 py-3 flex gap-2 hover:bg-gray-200" 
                    :class="[{
                        'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab
                    }]">

                    <span v-if="tab == 'Durchführen'"> <ArrowRightCircleIcon class="w-5 h-5"/></span>
                    <a href="#" @click="changeTab(tab)">
                        {{tab}}</a>
                </li>
            </ul>
            <hr>
            <div class="mt-4 px-2 py-3 flex flex-col space-y-3">
                <a href="" class="px-3 py-2 bg-Mittelblau text-white text-center">
                    Speichern</a>
                <a href="" class="px-3 py-2 text-Mittelblau hover:underline text-center">
                    Abbrechen</a>
            </div>
        </nav>
    </div>
</template>