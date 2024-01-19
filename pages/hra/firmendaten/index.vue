<script setup>

  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
  import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 

  const tabs = [
        'Zutritt', 
        'Kennzeichen', 
        'Konkurrenzklauseln', 
        
    ];
  
  const activeTab = ref(tabs[0]);
  function newTab(ev) {
      activeTab.value = tabs[tabs.indexOf(ev)]
      console.log("changed to " + ev)
  }
</script>

<template>
  <header class="px-16 py-4  print:hidden">
      <div class="text-gray-500 text-sm">
          <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
              Persönliche Daten bearbeiten</a> &gt; Firmendaten
      </div>

      <HRAMitarbeiterInfoBox headline="Firmenbezogene Daten bearbeiten" class="mb-6"/>
  </header>

  <main class="grid grid-rows-[auto_auto_auto] gap-8 px-16">

      <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Firmendaten" />

      <div class="bg-white border border-t rounded overflow-hidden">
          <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
              
              <nav>
                  <h3 class="px-4 mt-6 text-lg font-light text-Blaugrau">
                      Firmenbezogene Daten
                  </h3>        
                  
                  <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>
              </nav>

              <div class="px-4 my-4 border-l pb-12">

                  <div v-show="activeTab == 'Zutritt'" class="px-2 grid grid-rows-1 gap-4">
                      <HRAOrganisationZutritt />
                  </div>
                  <div v-show="activeTab == 'Kennzeichen'" class="px-2 grid grid-rows-1 gap-4">
                      <HRAOrganisationKennzeichen />
                  </div>
                  <div v-show="activeTab == 'Konkurrenzklauseln'" class="px-2 grid grid-rows-1 gap-4">
                      <HRAOrganisationKonkurrenz />
                  </div>
              </div>
          </main>
      </div>
  </main>
</template>