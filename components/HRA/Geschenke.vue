<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
  let datenfelder = Object.keys(geschenke[0])
</script>

<template>

    <LayoutFormSection title="">
      <div class="grid lg:grid-cols-1 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
           <InputSelect label="Kategorie" :options="['Hochzeitsgeschenk', 'Buch', 'Jubiläumsgeschenk', 'Pensionierungsgeschenk']" selected="Hochzeitsgeschenk" width="w-1/2"/>
           <InputSelect label="Kategorie" 
              :options="['Riedel-Glas', 'SCS Shopping Card de Luxe', 'Waterford-Glas']" 
              selected="Riedel-Glas" width="w-1/2"/>

          <InputText label="Betrag (€)" width="w-32"/>
          <InputDate label="Ausgabedatum" />
          <InputText label="Ausgegeben von" width="w-64"/>
          <InputText label="Betriebszugehörigkeit" width="w-32"/>
          <InputTextarea label="Bemerkung" />
          
        </div>
        <div class="flex justify-end">
          <InputButton>Speichern</InputButton>
        </div>
      </div>

  </LayoutFormSection>

  <LayoutFormSection> 
    <table class="border rounded bg-white">
        <thead>
            <tr class="text-sm h-10 bg-gray-100">
                <th v-for="feld in datenfelder" class="px-2">{{feld}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="geschenk in geschenke" class="text-sm border-b">
                <td class="px-2 py-2">{{geschenk.Kategorie}}</td>
                <td class="px-2 ">{{geschenk.Bezeichnung}}</td>
                <td class="px-2 text-right tabular-nums">{{geschenk.Betrag}}</td>
                <td class="px-2 text-center tabular-nums">{{geschenk.Ereignisdatum}}</td>
                <td class="px-2 text-center tabular-nums">{{geschenk.Ausgabedatum}}</td>
                <td class="px-2 ">{{geschenk.ausgegeben_von}}</td>
                <td class="px-2 text-right">{{geschenk.Betriebszugehörigkeit}}</td>
                <td class="px-2"></td>
            </tr>
        </tbody>
    </table>
<!--     <table class="table">
      <thead class="text-sm">
        <th>Kategorie</th>
        <th>Bezeichnung</th>
        <th>Betrag</th>
        <th>Ereignisdatum</th>
        <th>Ausgabedatum</th>
        <th>Ausgegeben von</th>
        <th>Betriebszugeh.</th>
        <th>Bemerkung</th>
      </thead>
      <tbody class="text-sm">
        <tr v-for="geschenk in geschenke">
          <td class="px-2 py-1 border-b">{{geschenk.kategorie}}</td>
          <td class="px-2 py-1 border-b">{{geschenk.bezeichnung}}</td>
          <td class="px-2 py-1 border-b">{{geschenk.betrag}}</td>
          <td class="px-2 py-1 border-b">{{geschenk.ereignisdatum}}</td>
          <td class="px-2 py-1 border-b">{{geschenk.ausgabedatum}}</td>
          <td class="px-2 py-1 border-b">{{geschenk.ausgabevon}}</td>
        </tr>
      </tbody>
    </table> -->
  </LayoutFormSection>

</template>