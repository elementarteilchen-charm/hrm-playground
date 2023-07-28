<script setup>
import { CheckCircleIcon, ArchiveBoxIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div>
        <h3 class="text-lg font-bold text-gray-900 ">Sozialversicherungsnummer und Geburtsdatum</h3>
        <p class="text-gray-400 text-sm flex items-center gap-2">
            <CheckCircleIcon class="w-4 h-4 text-green-500" />
            <span>Diese Daten können direkt geschrieben werden.</span>
        </p>
        <p class="text-gray-400 text-sm flex items-center gap-2">
            <EnvelopeIcon class="w-4 h-4 text-orange-500" />
            <span>Es wird eine Emailbenachrichtigung versendet.</span>
        </p>
    </div>
    <LayoutFormSection title="">
        <div class="grid lg:grid-cols-1 gap-4">
            <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                <InputDate label="Geburtsdatum" value="2000-03-14" />
                <InputText label="SozialversicherungsNr" value="1450" width="w-32" />
            </div>
        </div>
    </LayoutFormSection>
</template>