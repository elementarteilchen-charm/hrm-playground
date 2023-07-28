<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 

</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Invalidität</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
  </div>

    <LayoutFormSection title="Behinderung">
      <div class="grid lg:grid-cols-1 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputNumber label="Grad der Behinderung in %" value="" width="w-16"/>
          <InputText label="Behinderten Nummer" value="" width="w-64"/>
          <InputDate label="Seit" />
          <InputDate label="Befristet bis" />
          <InputTextarea label="Anmerkung" text="Nach einem Unfall kam es leider zu einer 25% Gehbehinderung.">
          </InputTextarea>
          
        </div>
      </div>
      <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Attest.pdf" kategorie="Sonstiges" />      
  </LayoutFormSection>

</template>