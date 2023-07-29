<script setup>
  import { CheckCircleIcon, ArchiveBoxIcon, EnvelopeIcon } from '@heroicons/vue/24/outline' 
</script>

<template>
  <div>
      <h3 class="text-lg font-bold text-gray-900 ">Personendaten</h3>
      <p class="text-gray-400 text-sm flex items-center gap-2">
          <CheckCircleIcon class="w-4 h-4 text-green-500" />
          <span>Diese Daten können direkt geschrieben werden.</span>
      </p>
  </div>
  
  <LayoutFormSection title="Name und Titel">
    
    <div class="grid lg:grid-cols-1 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2 space-y-3">
          <InputRadio label="Geschlecht" :options="['Weiblich','Männlich', 'Divers']" name="gender" width="w-48"/>
          <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" width="w-48"/>
          <InputText label="Vorname" value="Stephanie"/>
          <div class="text-sm font-bold">Nachname</div>
          <div class="">
            <span class="font-bold px-2">Babunek</span> 
            <a href="/hra/events/namensaenderung" class="ml-3 bg-gray-50 text-Mittelblau font-bold border px-3 py-2 hover:underline">Namensänderung</a>
          </div>
          
          <InputSelect label="Titel&nbsp;nach&nbsp;dem&nbsp;Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
        </div>

    </div>
  
  </LayoutFormSection>

<div>
    <h3 class="text-lg font-light text-Mittelgrau">Geburtsdatum </h3>
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
