<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { BellAlertIcon, EnvelopeIcon } from '@heroicons/vue/24/solid' 
</script>

<template>

  <div class="mb-8 py-4 px-4 bg-gray-100">
    <Suche />
  </div>

  <AppAlert title="Stimmen alle Ihre Daten noch?" button-text="Notfallkontakt überprüfen">
    Überprüfen Sie jetzt ihre Notfallkontaktdaten!
  </AppAlert>

  
  
  <div class="grid lg:grid-cols-3 gap-12 mt-8">
    
    <InfoBox title="Letzte Suche">
      <ul>
        <li class="flex justify-content-center text-blue-600">
          <ArrowRightCircleIcon class="w-4 mr-1 text-blue-600 block"/>
          <a href="" class="hover:underline">Thomas Auer</a>
        </li>
        <li class="flex justify-content-center text-blue-600">
          <ArrowRightCircleIcon class="w-4 mr-1 text-blue-600 block"/>
          <a href="" class="hover:underline">Petra Koller</a></li>
        <li class="flex justify-content-center text-blue-600">
          <ArrowRightCircleIcon class="w-4 mr-1 text-blue-600 block"/>
          <a href="" class="hover:underline">Personal</a>
        </li>
      </ul>
    </InfoBox>
   
    <InfoBox title="Meine Anfragen" button-text="Anfragen anzeigen">
      <li class="flex justify-content-center text-blue-600">
          <EnvelopeIcon class="w-4 mr-1 text-blue-600 block"/>
          <a href="" class="hover:underline">1 Antwort erhalten</a>
        </li>
    </InfoBox>
    
    <InfoBox title="Meine Daten" button-link="/meine-daten" button-text="Meine Daten">
      <ul>
        <li class="flex justify-content-center text-blue-600">
          <BellAlertIcon class="w-4 mr-1 text-red-500"/>
          <a href="" class="hover:underline">2 fehlende Dokumente</a>
        </li>
      </ul>
    </InfoBox>

    
  </div>
</template>
