<script setup>
  const fehlendeDokumente = ['Meldezettel', 'Ausbildung Abschlusszeugnis']
</script>
<template>
  <h1 class="text-3xl font-light mb-3">Meine Daten</h1>
  
  <HRMProfilHeader :fehlendeDokumente="fehlendeDokumente"/>
  
  <div class="mt-8 grid lg:grid-cols-2 xl:lgrid-cols-3 gap-8">
    <HRMPrivateKontaktdaten />
    <HRMKFZKennzeichen /> 
    <HRMQualifikationen /> 
    <HRMNotfallkontakt />
    
    <HRMZutrittskarte />
    
  </div>
  
</template>
