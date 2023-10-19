<script setup>
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
  const props = defineProps(['bewerber'])
  const gesuchterName = ref(props.bewerber.vorname + ' ' + props.bewerber.name)
  
  function avatar(ma) {return "background-image: url('/img/"  + ma.avatar + "')"; }
</script>
<template>
    <div class="w-4/5 mb-3">
        <div class="flex gap-4 ">
        <div class="font-bold">Bewerberdaten:</div>
            <div>
              {{bewerber.anrede}} {{bewerber.vorname}} 
              <span class="font-bold">{{bewerber.name}}</span> 
            </div>
            <div>
              <span class="text-gray-400"> ({{bewerber.email_privat}})</span>
            </div>
            <div>
              Geboren am {{bewerber.geburtsdatum}}
            </div>
        </div>

        <div class="mt-6">
            <label class="font-bold mb-2">
                Suche in inaktiven Mitarbeiter*innen
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 border-l border-t border-b bg-gray-50 h-10 p-2 p-2 ">
                <MagnifyingGlassIcon class="w-5 h-5" />
              </div>
              <input v-model="gesuchterName" class="h-10 border border-gray-200 px-4 py-2 w-full shadow-sm" placeholder="Name" type="search" list="mitarbeiterliste" />
            </div>
            <datalist id="mitarbeiterliste">
                <option v-for="ma in mitarbeiterListe" :value="ma.vorname + ' ' + ma.name" />
            </datalist>
        </div>
    </div>
    <div v-for="ma in mitarbeiterListe.filter((person) => person.name == bewerber.name)" class="mb-6">
        <div class="grid grid-cols-[2fr_5fr_5fr] gap-2  border bg-white ">
            <a href="#">
                <div class="bg-cover bg-center h-full" :style="avatar(ma)"></div>
            </a>
            <div class="px-4 py-6">
                <span class="text-xs font-bold text-white bg-Orange-80 p-1 rounded">Inaktiv</span>
                <div class="font-bold text-xl">
                    <a href="#" class="text-Mittelblau hover:underline">
                        {{ma.vorname}} {{ma.name}}</a>
                </div>
                <div>
                    {{ma.taetigkeit}}
                </div>
                <div>{{ma.mandant}}</div>
                <div class="text-sm">{{ma.standort}}</div>
            </div>
            <div class="text-sm">
                <div class="text-xl">&nbsp;</div>
                <ul class="text-sm space-y-1 text-Mittelblau">
                    <li>Private Email: {{ma.email_privat}}</li>
                    <li>Telefon: '+43 664 88370265'</li>
                </ul>
            </div>
        </div>
    </div>
</template>