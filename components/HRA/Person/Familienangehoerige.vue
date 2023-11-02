<script setup>
  import { CheckCircleIcon, XCircleIcon, ArchiveBoxIcon  } from '@heroicons/vue/24/outline' 

  const thePerson = reactive({})


  function showDialog(person) {
      thePerson.name = person.name;
      thePerson.vorname = person.vorname;
      thePerson.telefon = person.telefon;
      thePerson.handy = person.handy;
      thePerson.notfallkontakt = person.notfallkontakt;
      document.getElementById('neue-person-dialog').showModal();
  }


</script>

<template>
  
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Familienangehörige</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
  </div>
  <LayoutFormSection >
    <h3 class="text-lg font-bold text-gray-900 "></h3>
    
      <table class="table w-full text-sm bg-gray-50">
        <thead class="bg-gray-200 text-left text-gray-500 ">
          <tr>
            <th class="px-2 py-3 text-sm ">Beziehung</th>
            <th class="px-2 py-1 text-sm ">Name</th>
            <th class="px-2 py-1 text-sm ">Vorname</th>
            <th class="px-2 py-1 text-sm ">Telefon</th>
            <th class="px-2 py-1 text-sm ">Handy</th>
            <th class="px-2 py-1 text-sm text-center">Notfallkontakt</th>
            <th class="px-2 py-1 text-sm text-center"> </th>
          </tr>
        </thead>
        <tbody class="bg-white_ ">
          <tr 
              v-for="person, index in angehoerige" 
              class="h-10 hover:bg-blue-200 hover:cursor-pointer" 
              @click="showDialog(person)">
            <td class="border-b py-3 px-2 ">{{person.verwandtschaftsgrad}}</td>
            <td class="border-b py-1 px-2 ">{{person.anrede}} {{person.name}}</td>
            <td class="border-b py-1 px-2 ">{{person.vorname}}</td>
            <td class="border-b py-1 px-2 ">{{person.telefon}}</td>
            <td class="border-b py-1 px-2 ">{{person.handy}}</td>
            <td class="border-b py-1 px-2 "><CheckCircleIcon class="mx-auto w-5 h-5" v-if="person.notfallkontakt"/></td>
            <td class="border-b py-1 px-2 "><XCircleIcon class="mx-auto w-5 h-5 text-blue-500 hover:text-blue-600"/></td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4 flex justify-end">
        <button @click="showDialog" class="bg-blue-700 text-white px-3 py-2">Weitere Person hinzufügen</button>
      </div>
  </LayoutFormSection>

    <dialog id="neue-person-dialog" class="modal shadow-lg bg-gray-100 p-4">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
                <header class="px-4 py-2 h-12  text-lg font-bold ">
                    Familienangehörigen hinzufügen 
                </header>
                <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                    
                  <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                      <InputSelect label="Beziehung" :options="['Vater', 'Nicht verwandt']" width="w-48"/>
                    </div>
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                     <InputCheckbox 
                              name="Notfallkontakt" label="Notfallkontakt" 
                              :checked="thePerson.notfallkontakt" 
                              checkboxLabel="Ja" />  
                    </div>
                  </div>

                  <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                      <InputText label="Name*"  width="w-48" :value="thePerson.name"/>
                      <InputText label="Vorname"  width="w-48" :value="thePerson.vorname"/>
                      <InputText label="Beruf"  width="w-48"/>
                    </div>  
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                      <InputText label="Handy" width="w-48" :value="thePerson.handy"/>
                      <InputText label="Telefon"  width="w-48" :value="thePerson.telefon"/>
                      
                    </div>
                  </div>
                  
                    
                  <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr_minmax(4rem,auto)_1fr] gap-4">
                      <InputCheckbox label="Verstorben" checkboxLabel="Ja" />
                    </div>
                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr_minmax(4rem,auto)_1fr] gap-4">
                      <InputDate label="Sterbedatum"/>
                    </div>
                  </div>
                  
                  <div class="mt-3  px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                      <InputTextarea label="Bemerkung" />
                  </div>

                  <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class="mt-3  px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                      <InputCheckbox label="Nachweis" checkboxLabel="vorhanden"/>
                    </div>
                    
                  </div>
                
                </main>

                <footer class="px-4 h-12">
                    <div class="flex justify-end space-x-4">
                        <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
                        <button formmethod="dialog" class="bg-blue-700 text-white px-3 py-2">Hinzufügen</button>
                    </div>
                </footer>
            </div>
        </form>
    </dialog>

</template>

<style>
dialog.modal {
  height: 75vh;
  width: 66vw;
    
}

dialog.upload {
  height: 75vh;
  width: 66vw;
    
}
dialog::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.4);
}
</style>