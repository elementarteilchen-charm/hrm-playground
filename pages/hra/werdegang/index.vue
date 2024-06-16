<script setup>

  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
  import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 

  const tabs = [
        'Schulbildung',
        'Sprachkenntnisse',
        'Qualifikationen',
        'Ernennungen',
        'Vordienstzeiten',
        'Anrechenbare Zeiten', 
    ];
  
  const activeTab = ref(tabs[0]);
  
  function newTab(ev) {
      activeTab.value = tabs[tabs.indexOf(ev)]
      console.log("changed to " + ev)
  }
</script>

<template>
  <header class="px-16 py-3  print:hidden">
<!--       <div class="text-gray-500 text-sm">
          <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
              Persönliche Daten bearbeiten</a> &gt; Werdegang
      </div> -->

      <HRAMitarbeiterInfoBox headline="Firmenbezogene Daten bearbeiten" class="mb-0"/>
  </header>

  <main class="grid grid-rows-[auto_auto_auto] gap-8 px-16">

      <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Werdegang" />

      <div class="bg-white border border-t rounded overflow-hidden">
          <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
              
              <nav>
                  <h3 class="px-4 mt-6 text-lg font-light text-Blaugrau">
                      Werdegang
                  </h3>        
                  
                  <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>
              </nav>

              <div class="px-4 my-4 border-l pb-12">

              	<div v-show="'Sprachkenntnisse' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
              	    <HRAPersonSprachkenntnisse />
              	</div>
              	<div v-show="'Schulbildung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
              	    <HRAPersonAusbildung />
              	</div>
              	<div v-show="'Zusatzqualifikationen'== activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
              	    <HRAPersonZusatzqualifikationen />
              	</div>
              	<div v-show="'Vordienstzeiten'== activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
              	    <HRAPersonVordienstzeiten />
              	</div>
                  <div v-show="activeTab == 'Anrechenbare Zeiten'" class="px-2 grid grid-rows-1 gap-4">

                      <div>
                        <h3 class="text-lg font-bold text-gray-900 ">Anrechenbare Zeiten</h3>
                      </div>

                        <LayoutFormSection title="">
                          <div class="grid lg:grid-cols-1 gap-4">
                            <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
                              
                              <InputText label="Anrechenbare Schulzeiten"  value="48" width="w-32 text-right"/>
                              <InputText label="Anrechenbare Vordienstzeiten"  value="13" width="w-32 text-right tabular-nums"/>
                              <InputText label="Abwesenheitszeiten"  value="-17" width="w-32 text-right tabular-nums"/>
                              <hr><hr class="w-32 text-right tabular-nums">
                              <InputText label="Summe anrechenbare Urlaubsmonate"  value="44" width="w-32 text-right tabular-nums"/>
                              
                            </div>
                          </div>
                      </LayoutFormSection>
                  </div>
                 
              </div>
          </main>
      </div>
  </main>
</template>