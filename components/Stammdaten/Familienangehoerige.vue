<script setup>
import { CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'

const thePerson = reactive({})


function showDialog(person) {
    thePerson.name = person.name;
    thePerson.vorname = person.vorname;
    thePerson.telefon = person.telefon;
    thePerson.handy = person.handy;
    thePerson.notfallkontakt = person.notfallkontakt;
    document.getElementById('neue-person-dialog').showModal();
}

function showUploadDialog() {
    document.getElementById('nachweis-upload-dialog').showModal();
}
</script>
<template>

    <!-- <LayoutFormSection title="Familienangehörige verwalten"> -->
    
        <h3 class="text-lg font-bold"></h3>
        <table class="table w-full text-sm bg-white">
            <thead class="bg-Blaugrau-25 text-left ">
                <tr>
                    <th class="px-2 py-1 text-sm ">Beziehung</th>
                    <th class="px-2 py-1 text-sm ">Name</th>
                    <th class="px-2 py-1 text-sm ">Vorname</th>
                    <th class="px-2 py-1 text-sm ">Telefon</th>
                    <th class="px-2 py-1 text-sm ">Handy</th>
                    <th class="px-2 py-1 text-sm text-center">Notfallkontakt</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="person, index in angehoerige" class="hover:bg-blue-200 hover:cursor-pointer" @click="showDialog(person)">
                    <td class="border-b py-1 px-2 ">{{person.verwandtschaftsgrad}}</td>
                    <td class="border-b py-1 px-2 ">{{person.anrede}} {{person.name}}</td>
                    <td class="border-b py-1 px-2 ">{{person.vorname}}</td>
                    <td class="border-b py-1 px-2 ">{{person.telefon}}</td>
                    <td class="border-b py-1 px-2 ">{{person.handy}}</td>
                    <td class="border-b py-1 px-2 ">
                        <CheckCircleIcon class="mx-auto w-5 h-5" v-if="person.notfallkontakt" />
                    </td>
                    
                </tr>
            </tbody>
        </table>
        <div class="mt-4 flex justify-end">
            <InputButton v-on:click="showDialog">
                Familienmitglied hinzufügen
            </InputButton>
        </div>
    
    
    <LKWWDialog title="Neues Familienmitglied" id="neue-person-dialog" width="70vw" height="50vh">
        <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
            <div class="mt-4 grid grid-cols-2 gap-4">
                <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputSelect label="Beziehung" :options="['Kind', 'Nicht verwandt']" selected="Kind" width="w-48" />
                </div>
                <!-- <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputCheckbox name="Notfallkontakt" label="Notfallkontakt" :checked="thePerson.notfallkontakt" checkboxLabel="Ja" />
                </div> -->
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4">
                <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputText label="Name*" width="w-48" :value="thePerson.name" />
                    <InputText label="Vorname" width="w-48" :value="thePerson.vorname" />
                    <!-- <InputText label="Beruf" width="w-48" /> -->
                </div>
                <!-- <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputText label="Handy" width="w-48" :value="thePerson.handy" />
                    <InputText label="Telefon" width="w-48" :value="thePerson.telefon" />
                </div> -->
            </div>
            <!-- <div class="mt-4 grid grid-cols-2 gap-4">
                <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr_minmax(4rem,auto)_1fr] gap-4">
                    <InputCheckbox label="Verstorben" checkboxLabel="Ja" />
                </div>
                <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr_minmax(4rem,auto)_1fr] gap-4">
                    <InputDate label="Sterbedatum" />
                </div>
            </div> -->
            <div class="mt-3  px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                <InputTextarea label="Bemerkung" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4">
                <div class="mt-3  px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputCheckbox label="Nachweis" checkboxLabel="vorhanden" />
                </div>
            </div>
        </main>
    </LKWWDialog>
    
</template>
<style>
</style>