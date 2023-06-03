<script setup>
  const fehlendeDokumente = ['Meldezettel', 'Ausbildung Abschlusszeugnis']
</script>
<template>
  <h1 class="text-3xl font-light mb-3">Meine Anfragen</h1>
  
  <HRMProfilHeader :fehlendeDokumente="fehlendeDokumente"/>
  
  <div class="mt-8 grid grid-cols-2 gap-8">
    <HRMPrivateKontaktdaten />
    Meine Anfragen
  </div>
  
</template>
