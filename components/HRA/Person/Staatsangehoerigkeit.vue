<script setup>
  import { CheckCircleIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline' 
</script>

<template>
    <div>
      <h3 class="text-lg font-bold text-gray-900 ">Staatsangehörigkeit und Geburtsort</h3>
      <p class="text-gray-400 text-sm flex items-center gap-2">
        <CheckCircleIcon class="w-4 h-4 text-green-500"/>
        <span>Diese Daten können direkt geschrieben werden.</span>
      </p>
    </div>
        
    <LayoutFormSection title="">    
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-y-3 gap-x-2">
            <InputSelect label="Staatsangehörigkeit" :options="['Österreich','Deutschland', 'Polen']" selected="Österreich" width="w-4/5"/>
            <InputSelect label="Staatsangehörigkeit&nbsp;2" :options="['-','DE', 'PL']" width="w-4/5" />
            <InputTextarea label="Bemerkung1" placeholder="Hier wird bei Änderung der Staatsangehörigkeit eine Bemerkung erfasst."/>
        </div>
        
        <HRAFormsNachweisUploadBox dateiname="Aberl Reisepass.png" ordner="05 Dokumente + Urkunden" kategorie="Reisepass"/>
        
    </LayoutFormSection>


    <h3 class="mt-6 font-light text-Blaugrau">Geburtsort</h3>
    <LayoutFormSection title="">
        <div class="grid grid-cols-[minmax(6rem,min-content)_1fr] gap-x-2 gap-y-3">
            <InputText label="Geburtsort" value="Krems an der Donau" />
            <InputSelect label="Geburtsland" :options="['Österreich','Deutschland', 'Polen']" selected="Österreich" width="w-32" />
            <InputTextarea label="Bemerkung2"  placeholder="Hier wird bei Änderung der Staatsangehörigkeit eine Bemerkung erfasst."/>
        </div>       

    </LayoutFormSection>
    
    <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" kategorie="Reisepass"/>

</template>