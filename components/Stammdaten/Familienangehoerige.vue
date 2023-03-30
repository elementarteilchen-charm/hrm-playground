<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
</script>

<template>
    <h3 class="text-lg font-bold text-gray-900 ">Familienangehörige verwalten</h3>
    <LayoutFormSection title="Daten">
        
        <div class="grid lg:grid-cols-2 gap-4">
            <div class="grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">
                <InputSelect label="Verwandtschaftsgrad" :options="['Mutter','Vater', 'Bruder', 'Schwester']" width="w-32" />
                <InputCheckbox label="Nachweis vorhanden" checkboxLabel="Ja" />
                <InputCheckbox label="Person ist verstorben" checkboxLabel="Ja" />

                <div class="col-span-2 my-2">
                  <hr>
                </div>
                <InputCheckbox label="Notfallkontakt" checkboxLabel="Ja" />
                <InputText label="Telefon"/>
                <InputText label="Handy"/>

            </div>
            <div class="grid-cols-[minmax(8rem,min-content)_1fr] gap-2">
                <InputText label="Name" required/>
                <InputText label="Vorname" />
                <InputText label="Beruf" required/>
            </div>
        </div>
    </LayoutFormSection>
  

    <LayoutFormSection title="Familienangehörige">
      <table class="table w-full text-sm">
        <thead class="bg-gray-50 text-left">
          <th class="px-2 py-1 text-sm text-center">Notfallkontakt</th>
          <th class="px-2 py-1 text-sm ">Verwandtschaftsgrad</th>
          <th class="px-2 py-1 text-sm ">Name</th>
          <th class="px-2 py-1 text-sm ">Telefon</th>
          <th class="px-2 py-1 text-sm ">Handy</th>
        </thead>
        <tbody class="bg-white">
          <tr v-for="person in angehoerige">
            <td class="border-b py-1 px-2 "><CheckCircleIcon class="mx-auto w-5 h-5" v-if="person.notfallkontakt"/></td>
            <td class="border-b py-1 px-2 ">{{person.verwandtschaftsgrad}}</td>
            <td class="border-b py-1 px-2 ">{{person.name}}</td>
            <td class="border-b py-1 px-2 ">{{person.vorname}}</td>
            <td class="border-b py-1 px-2 ">{{person.telefon}}</td>
            <td class="border-b py-1 px-2 ">{{person.handy}}</td>
          </tr>
        </tbody>
      </table>
    </LayoutFormSection>

</template>