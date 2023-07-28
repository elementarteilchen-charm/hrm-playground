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

</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Suche nach Mitarbeiter*innen für Events & Änderungen
    </div>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <Suche />
    </div>
    
   <!--  <div v-for="ma in mitarbeiterListe">
      <div class="grid grid-cols-[2fr_5fr_5fr] gap-2  border bg-white">
        <div>
           <a href="/hra/events/edit" class="">
          <img :src="'/img/' + ma.avatar" alt=""></a>
        </div>
        <div class="px-4 py-3">          
          <div class="font-bold text-xl">
            {{ma.vorname}} {{ma.name}} 
          </div>
          <div>
            {{taetigkeit}}
          </div> 
          <ul class="text-sm space-y-1 text-Mittelblau">
            <li v-for="abteilung in ma.abteilungen">
              {{abteilung}}
            </li>
          </ul>
        </div>
        <div class="text-sm">
          <div class="text-xl">&nbsp;</div>
          <ul class="text-sm space-y-1 text-Mittelblau">
          <li>mandant: 'LKW',</li>
          <li>standort: 'WND',</li>
          <li>email: 'aberl@lkw-walter.com',</li>
          <li>durchwahl: '2002',</li>
          <li>mobil: '+43 664 88370265',</li>
        </ul>
        </div>
      </div>
    </div> -->
  </main>

</template>

<style>  
  

</style>