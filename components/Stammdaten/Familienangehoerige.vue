<script setup>
  import { CheckCircleIcon, PencilIcon } from '@heroicons/vue/24/outline' 
</script>

<template>
    <h3 class="text-lg font-bold text-gray-900 ">Familienangehörige verwalten</h3>

      <table class="table w-full text-sm bg-gray-50">
        <thead class="bg-gray-300 text-left">
          <th class="px-2 py-1 text-sm ">Beziehung</th>
          <th class="px-2 py-1 text-sm ">Name</th>
          <th class="px-2 py-1 text-sm ">Vorname</th>
          <th class="px-2 py-1 text-sm ">Telefon</th>
          <th class="px-2 py-1 text-sm ">Handy</th>
          <th class="px-2 py-1 text-sm text-center">Notfallkontakt</th>
          <th class="px-2 py-1 text-sm text-center"> </th>
        </thead>
        <tbody class="bg-white_ ">
          <tr v-for="person in angehoerige" class="h-10">
            <td class="border-b py-1 px-2 ">{{person.verwandtschaftsgrad}}</td>
            <td class="border-b py-1 px-2 ">{{person.anrede}} {{person.name}}</td>
            <td class="border-b py-1 px-2 ">{{person.vorname}}</td>
            <td class="border-b py-1 px-2 ">{{person.telefon}}</td>
            <td class="border-b py-1 px-2 ">{{person.handy}}</td>
            <td class="border-b py-1 px-2 "><CheckCircleIcon class="mx-auto w-5 h-5" v-if="person.notfallkontakt"/></td>
            <td class="border-b py-1 px-2 "><PencilIcon class="mx-auto w-5 h-5 text-blue-500 hover:text-blue-600"/></td>
          </tr>
        </tbody>
      </table>

    <LayoutFormSection title="Daten bearbeiten">
        
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
            <div class="grid grid-rows-3 grid-row-start gap-2">
                <div class="grid grid-cols-[minmax(4rem,min-content)_1fr] gap-2">
                  <InputText label="Name" required="1"/>
                </div>
                <div class="grid grid-cols-[minmax(4rem,min-content)_1fr] gap-2">
                  <InputText label="Vorname" />
                </div>
                <div class="grid grid-cols-[minmax(4rem,min-content)_1fr] gap-2">
                  <InputText label="Beruf"/>
                </div>
            </div>
        </div>
    </LayoutFormSection>
  



</template>