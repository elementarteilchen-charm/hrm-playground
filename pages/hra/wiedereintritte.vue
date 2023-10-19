<script setup>
  import {
      UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
      BookmarkIcon, PlusCircleIcon } 
      from '@heroicons/vue/24/outline'

  const tabs = [
        'Persönlich', 
        'Adressen und Kontakt', 
        'Bankverbindung',
        'Familienangehörige',
        'Invalidität',
    ];
  const activeTab = reactive({ tab: tabs[0] });
  const inaktiveMA = mitarbeiterListe
  const ma = ref(mitarbeiterListe[0])

  function starteWiedereintritt(mitarbeiter) {
    ma.value = mitarbeiter
    console.log(ma)
    showDialog('Suche nach Wiederkehrer');
  }
</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Eintritt auswählen
    </div>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <table class="table-fixed p-2 bg-white border rounded">
        <thead class="bg-gray-100 text-sm">
          <tr class="border-b">
            <th class="py-3 px-2">Anrede</th>
            <th class="py-3 px-2">Nachname</th>
            <th class="py-3 px-2">Vorname</th>
            <th class="py-3 px-2">Mandant</th>
            <th class="py-3 px-2">Standort</th>
            <th class="py-3 px-2">Eintrittstag</th>
            <th class="py-3 px-2">Bearbeiter</th>
            <th class="py-3 px-2">Actions</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr v-for="ma in mitarbeiterListe" class="border-b ">
            <td class="px-2 py-2"> {{ma.anrede}} </td>
            <td class="px-2 py-2"> {{ma.name}} </td>
            <td class="px-2 py-2"> {{ma.vorname}} </td>
            <td class="px-2 py-2"> {{ma.mandant}}</td>
            <td class="px-2 py-2"> {{ma.standort}} </td>
            <td class="px-2 py-2"> 01.09.2023 </td>
            <td class="px-2 py-2"> Akbulut, Diren </td>
            <td class="px-2 py-2"> Eintritt | 
              <a @click="starteWiedereintritt(ma)" href="#" class="font-bold text-Mittelblau hover:underline">Wiedereintritt</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <LKWWDialog title="Suche nach Wiederkehrer" width="80vw" height="75vh">

      <div>
        <HRASuchergebnisWiedereintritt :bewerber="ma"/>
      </div>
      
    </LKWWDialog>

  </main>

</template>

<style>  
  

</style>