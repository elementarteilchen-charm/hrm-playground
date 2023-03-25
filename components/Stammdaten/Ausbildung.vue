<script setup>
let schulen = [
  {
    schule: 'Fachhochschule',
    adresse: '2750 Wr. Neustadt',
    fachrichtung: 'Projekt- und Prozessmanagement',
    abschluss: 'MSc.',
    von: '2019-09-03',
    bis: '2022-06-13',
  },
  {
    schule: 'HAK',
    adresse: '2750 Wr. Neustadt',
    fachrichtung: '',
    abschluss: 'Matura',
    von: '2014-09-03',
    bis: '2019-06-13',
  },
  {
    schule: 'Mittelschule',
    adresse: '2750 Wr. Neustadt',
    fachrichtung: '',
    abschluss: '',
    von: '2010-09-03',
    bis: '2014-06-13',
  }
  ];

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Schulen</h3>
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="text-lg_ font-bold text-gray-700 mb-2">Meldeadresse</h3>
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
            <InputText label="Straße" value="Hauptstraße 23/5/4" />
            <InputText label="PLZ" value="3210" width="w-16"/>
            <InputText label="Ort" value="Krems" />
            <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
        </div>
      </div>
  </div>

  <div>
    <h3 class="text-lg font-bold text-gray-700 mb-2">
    Ausbildung</h3>
    <table class="table w-full">
      <thead>
        <tr class="font-bold h-12 bg-gray-100">
          <th>Schule</th>
          <th>Adresse</th>
          <th>Fachrichtung</th>
          <th>Abschluss</th>
          <th>Dauer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="schule in schulen" class="text-sm">
          <td class="px-2 py-1 border-b">{{schule.schule}}</td>
          <td class="px-2 py-1 border-b">{{schule.adresse}}</td>
          <td class="px-2 py-1 border-b">{{schule.fachrichtung}}</td>
          <td class="px-2 py-1 border-b">{{schule.abschluss}}</td>
          <td class="px-2 py-1 border-b">{{schule.von}} - {{schule.bis}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
