<script setup>
  import {ChevronRightIcon, ChevronDownIcon, } from '@heroicons/vue/24/outline'
  
  const ma = mitarbeiterListe[0]
  
  const abwesenheitenListe = [
        'Elternkarenz',
        'Familienzeit',
        'Bildungskarenz',
        'Langzeitkrankenstand',
        'Unbezahlter Urlaub',
        'Wehrdienst',
        'Milizübung'
      ]
  
    const abwesenheitenLinks = {
        'Elternkarenz': '/hra/abwesenheiten/elternkarenz',
        'Familienzeit': '/hra/abwesenheiten/familienzeit',
        'Bildungskarenz': '/hra/abwesenheiten/bildungskarenz',
        'Langzeitkrankenstand': '/hra/abwesenheiten/langzeitkrankenstand',
        'Unbezahlter Urlaub': '/hra/abwesenheiten/unbezahlterurlaub',
        'Wehrdienst': '/hra/abwesenheiten/wehrdienst',
        'Milizübung': '/hra/abwesenheiten/milizuebung' 
    }

  const gewaehlteAbwesenheit = ref('Elternkarenz');

  function bearbeiten(abwesenheitBezeichnung, index) {
    gewaehlteAbwesenheit.value = ma.abwesenheiten[index]
    document.getElementById(abwesenheitBezeichnung).showModal();
  }

  function showAbwesenheitSelektor() {
    document.getElementById('abwesenheitSelektor').showModal();
  }

  function showNeueAbwesenheit() {
    document.getElementById('abwesenheitSelektor').close();
    document.getElementById(abwesenheitenListe[1]).showModal();
  }

  function verbleibendeTage(abwesenheit) {
    let bisDate = new Date(abwesenheit.bis);
    let currentDate = new Date();
    let differenceInTime = bisDate - currentDate;
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays;
  }

  function abgelaufen(abwesenheit) {
    if (verbleibendeTage(abwesenheit) < 0)
      return true
    return false
  }

  const neuErfassen = [
        {
          text: 'Elternkarenz', 
          link: '/hra/abwesenheiten/elternkarenz',
        },
        {
          text: 'Familienzeit', 
          link: '/hra/abwesenheiten/familienzeit',
        },
        {
          text: 'Bildungskarenz', 
          link: '/hra/abwesenheiten/bildungskarenz',
        },
        {
          text: 'Langzeitkrankenstand', 
          link: '/hra/abwesenheiten/langzeitkrankenstand',
        },
        {
          text: 'Unbezahlter Urlaub', 
          link: '/hra/abwesenheiten/unbezahlterurlaub',
        },
        {
          text: 'Wehrdienst', 
          link: '/hra/abwesenheiten/wehrdienst',
        },
        {
          text: 'Milizübung', 
          link: '/hra/abwesenheiten/milizuebung' 
        },
    ]
</script>

<template>

    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Familienzeit"/>
        <HRAMitarbeiterInfoBox headline="Abwesenheiten" class="mb-2" />
    </header>

    <div class="ml-8 mt-3 text-xl text-Mittelblau font-light">
        Abwesenheiten verwalten
    </div>
    <div class="p-8">
  
  
      <div class="bg-white py-6 px-6">
        
        <div class="grid grid-cols-5  gap-6  ">
          <a v-for="action in neuErfassen" 
              class="text-center inline-block place-content-center 
                  border rounded shadow opacity-80 
                  hover:opacity-100 hover:shadow-lg hover:border-Blaugrau-25
                  min-w-24 h-24 text-Mittelblau 
                  bg-Blaugrau-10 hover:bg-Blaugrau-10 
                  flex items-center"
              :href="action.link">
            <ChevronRightIcon class="w-4 h-4" />{{action.text}}
          </a>
        </div>


        <h2 class="mt-12 text-Blaugrau text-xl mb-3">Bisherige Abwesenheiten</h2>
      
        <table class="table-auto bg-white border text-sm ">
          <thead class="font-bold text-muted bg-Blaugrau-10 h-12">
            <tr>
              <th class="px-3 py-1">Abwesenheit</th>
              <th class="px-3 py-1 text-center">Von</th>
              <th class="px-3 py-1 text-center">Bis</th>
              <th class="px-3 py-1 text-center">Wiedereintritt</th>
              <!-- <th class="px-3 py-1 text-center">Status</th> -->
              <th class="px-3 py-1 text-center">Bemerkung</th>
              <th class="px-3 py-1 text-center">Bearbeiten</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="abwesenheit, index in ma.abwesenheiten" 
                class="hover:bg-Blaugrau-10 py-1 border-b ">
              <td class="px-3 py-2">
                {{abwesenheit.art}}
              </td>
              <td class="px-3 py-1 tabular-nums text-center">
                {{abwesenheit.von}}
              </td>
              <td class="px-3 py-1 tabular-nums text-center">
                {{abwesenheit.bis}}
              </td>
              <!-- <td class="px-3 py-1 tabular-nums text-center" 
                  :class="{'bg-Orange-10': abgelaufen(abwesenheit), 'bg-Gruen-10': !abgelaufen(abwesenheit)}">
                {{abwesenheit.bis}}
              </td> -->
              <td class="px-3 py-1 tabular-nums text-center">
                {{abwesenheit.wiedereintritt}}
              </td>
<!--               <td class="px-3 py-1">
                <span v-if="abwesenheit.aktiv" 
                      class="inline-block border-transparent h-5 px-2 py-[2px] rounded bg-Gruen text-white text-xs">Laufend</span>
              </td> -->
              <td class="px-3 py-1 w-[32ch]">
                {{abwesenheit.bemerkung}}
              </td>
              <td class="px-3 py-1 text-center">
                <button v-on:click="bearbeiten(abwesenheit.art, index)" href=""  class="text-Mittelblau hover:underline">
                  Bearbeiten
                </button>
                Löschen
              </td>
            </tr>
          </tbody>
        </table>

<!--         <div class="py-3 flex gap-6">
          <InputButton v-on:click="showAbwesenheitSelektor" >Neue Abwesenheit erfassen</InputButton>
        </div> -->
      </div>

    </div>



    <template v-for="abwesenheit in abwesenheitenListe">
      <LKWWDialog :title="abwesenheit" height="60vh">
        <div class="py-3">

          <div class="grid grid-cols-[15ch_auto] gap-3">
            <InputDate label="Beginn" :value="gewaehlteAbwesenheit.von"></InputDate>
            <InputDate label="Ende" :value="gewaehlteAbwesenheit.bis"></InputDate>
            <InputDate label="Wiedereintritt" :value="gewaehlteAbwesenheit.wiedereintritt"></InputDate>
            <InputTextarea label="Bemerkung" :text="gewaehlteAbwesenheit.bemerkung"></InputTextarea>
          </div>
            <HRAFormsNachweisUploadBox />
        </div>
      </LKWWDialog>
    
    </template>
</template>

<style>
</style>
