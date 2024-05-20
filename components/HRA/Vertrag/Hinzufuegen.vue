<script setup>
    import { DocumentTextIcon, ChevronDownIcon, ChevronUpIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline' 
   const konkurrenzklauseln = ['KK', 'HO', 'FXT', 'VPE']

</script>
<template>

    <LKWWDialog id="VertragHinzufuegen" title="Neuen Vertrag hinzufügen" height="70vh" width="75vw">
        <div class="grid lg:grid-cols-1">

            <div class="grid grid-rows-1 gap-y-4">
                <div class="grid grid-cols-2">
                    <div class="grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3">
                        <InputSelect label="PersonalNr" :options="[13496, 15673]" width="w-1/2" />
                    </div>
                    <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3 ">
                        <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']" width="w-1/2" />
                    </div>
                </div>
                
                <div class="grid grid-cols-2">
                    <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3">
                        <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX', 'WVM']" width="w-[12ch]" />
                    </div>
                    <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3">
                        <InputSelect label="Standort" :options="['WND', 'KUF']" width="w-1/2" />
                    </div>
                </div>
                
                <div class="flex items-center">
                    <div class="font-bold text-sm w-[9rem]">
                        Vetragszusätze
                    </div>
                    <div class="flex gap-x-4  p-2 bg-white border rounded ">
                        <template v-for="klausel in konkurrenzklauseln">
                            <InputCheckbox 
                                :label="klausel" />
                        </template>
                    </div>
                </div>

                <div class="grid grid-cols-2">
                    <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3 w-1/2">
                        <InputDate label="DV-Beginn" width="w-36" />
                    </div>
                    <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3 w-1/2">
                        <InputDate label="Eintrittstag" width="w-36" />
                    </div>
                </div>
                
                <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] items-baseline gap-3 w-1/2">
                    <InputDate label="DV-Ende" width="w-36" />
                    <InputCheckbox label="Grenzgänger" />
                </div>
                
            </div>
        </div>
    </LKWWDialog>
</template>