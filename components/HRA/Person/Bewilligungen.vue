<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div>
        <h3 class="text-lg font-bold text-gray-900 ">Bewilligungen</h3>
        <!-- <p class="text-gray-400 text-sm flex items-center gap-2">
            <CheckCircleIcon class="w-4 h-4 text-green-500" />
            <span>Diese Daten können direkt geschrieben werden.</span>
        </p> -->
    </div>
    <!-- <StammdatenLand /> -->
    <div class="flex justify-end gap-2">
      <span class="font-bold">Staatsbürgerschaft:</span> Österreich / Polen
    </div>
    <LayoutFormSection title="Aufenthaltsbewilligung">
        <div class="grid lg:grid-cols-1 gap-4">
            <div class=" grid grid-cols-[minmax(14rem,min-content)_1fr] gap-2">
                <InputDate label="Aufenthaltsbewilligung von:" />
                <InputDate label="Aufenthaltsbewilligung bis:" />
                <InputTextarea label="Bemerkung" text="">
                </InputTextarea>
            </div>
        </div>
        <!-- <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Aufenthaltsbewilligung.pdf" kategorie="Sonstiges" /> -->
    </LayoutFormSection>
    <LayoutFormSection title="Beschäftigungsbewilligung">
        <div class="grid lg:grid-cols-1 gap-4">
            <div class=" grid grid-cols-[minmax(14rem,min-content)_1fr] gap-2">
                <InputDate label="Beschäftigungsbewilligung von:" />
                <InputDate label="Beschäftigungsbewilligung bis:" />
                <InputTextarea label="Bemerkung" text="">
                </InputTextarea>
            </div>
        </div>
        <!-- <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Beschäftigungsbewilligung.pdf" kategorie="Sonstiges" /> -->
    </LayoutFormSection>
</template>