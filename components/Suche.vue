<script setup>
  
  const gesuchterName = ref()

  function avatar(ma) {return "background-image: url('/img/"  + ma.avatar + "')"; }
</script>

<template>
  <div class="w-4/5 mb-3">
    
    <label class="font-bold mb-2">
      Suche {{aktiverMA}}
    </label>
    <input 
          v-model="gesuchterName"
          class="border rounded border-gray-200 px-4 py-2 w-full shadow-sm" 
          placeholder="Name, Bereich, Abteilung, ..."
          type="serch"
          list="mitarbeiterliste"/>

      <datalist id="mitarbeiterliste">
        <option v-for="ma in mitarbeiterListe" :value="ma.vorname + ' ' + ma.name"/>
      </datalist>
  </div>

  <div v-for="ma in mitarbeiterListe" class="mb-6">
    <div class="grid grid-cols-[2fr_5fr_5fr] gap-2  border bg-white w-4/5">
      <a href="/hra/mitarbeiterinnen/stammdaten" >
        <div class="bg-cover bg-center h-full" :style="avatar(ma)"></div>
      </a>
      <div class="px-4 py-6">
        <div class="font-bold text-xl">
          <a href="/hra/mitarbeiterinnen/profil" class="text-Mittelblau hover:underline">
          {{ma.vorname}} {{ma.name}}</a>
        </div>
        <div>
          {{ma.taetigkeit}}
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
        <li>mandant: {{ma.mandant}} </li>
        <li>standort: {{ma.standort}}</li>
        <li>email: {{ma.email}}</li>
        <li>durchwahl: '2002',</li>
        <li>mobil: '+43 664 88370265',</li>
      </ul>
      </div>
    </div>
  </div>
</template>
