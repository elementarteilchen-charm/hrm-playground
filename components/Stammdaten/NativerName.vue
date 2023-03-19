<script setup>
    import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/solid' 
    import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
    import { reactive } from 'vue'
    const tabs = [
            'Reisepass', 
            'Nativer Name', 
            'Geburtsname'
        ];
    const activeTab = reactive({ tab: tabs[0] });

</script>

<template>
    <div class="mt-6 bg-gray-50">
        <nav class="bg-white">
          <ul class="flex space-x-4">
            <li v-for="tab, index in tabs" 
                class="text-sm  px-2 py-1 border-gray-200 flex"
                :class="[{'bg-gray-400 text-white': tab == activeTab.tab}]">
                
                <a href="#" @click="activeTab.tab = tab">
                    {{tab}}</a>
            </li>
          </ul>
        </nav>

        <div class="mt-6">          
            <div v-show="tabs[0] == activeTab.tab" class=" px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4 ">
                <InputText label=" Vorname" value="Stephanie" />
                <InputText label=" Nachname" value="Babunek"/>
            </div>
            <div v-show="tabs[1] == activeTab.tab" class=" px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4 ">
                <InputText label="Nativer Vorname"/>
                <InputText label="Nativer Nachname"/>
            </div>
            <div v-show="tabs[2] == activeTab.tab" class=" px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4 ">
                <InputText label="Geburtsname"/>
            </div>

        </div>
    </div>
</template>