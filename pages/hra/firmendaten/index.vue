<script setup>

  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
  import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 

  const tabs = [
        'Zutritt', 
        'Kennzeichen und Firmenbus',
        
        
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
                  <div v-show="activeTab == 'Kennzeichen und Firmenbus'" class="px-2 grid grid-rows-1 gap-4">
                      <HRAOrganisationKennzeichen />
                      <div>
                        <h3 class="text-lg font-bold text-gray-900 ">Firmenbus</h3>
                      </div>

                        <LayoutFormSection title="">
                          <div class="grid lg:grid-cols-1 gap-4">
                            <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
                              
                              <InputCheckbox label="Firmenbus" checkboxLabel="Ja" width="w-64"/>
                              
                            </div>
                          </div>
                      </LayoutFormSection>
                  </div>
                  <div v-show="activeTab == 'Firmenbus'" class="px-2 grid grid-rows-1 gap-4">
                          <!-- <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Attest.pdf" kategorie="Sonstiges" />       -->
                  </div>
                  <div v-show="activeTab == 'Konkurrenzklauseln'" class="px-2 grid grid-rows-1 gap-4">
                      <HRAOrganisationKonkurrenz />
                  </div>
              </div>
          </main>
      </div>
  </main>
</template>