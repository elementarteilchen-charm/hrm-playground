<script setup>
  const fehlendeDokumente = ['Meldezettel', 'Ausbildung Abschlusszeugnis']
</script>
<template>
  <div class="grid grid-rows-[6rem_1fr] gap-8 mb-12">
    
    <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
      <h1 class="text-3xl font-light text-Blaugrau">Meine Daten</h1>
    </div>
    
    <div class="px-6">
      <HRMProfilHeader/>
      
      <div class="mt-8 grid grid-cols-2 gap-8">
        <HRMFehlendeDokumente />

        <HRMPrivatadresse />
        <HRMZutrittskarte />
        <HRMPrivateKontaktdaten />
        <!-- <HRMKFZKennzeichen />  -->
        <!-- <HRMQualifikationen />  -->
        <!-- <HRMNotfallkontakt /> -->

      </div>
    </div>
  </div>
  
  
</template>
