<script setup>
    import {
      UserIcon, UserGroupIcon, CalendarIcon,
      CheckCircleIcon, XCircleIcon, 
      ClockIcon, PencilIcon,
      BookmarkIcon, PlusCircleIcon, } 
      from '@heroicons/vue/24/outline'

  const tabs = [
        'Persönliche Daten', 
        'Adressen', 
        'Invalidität',
        'Bankverbindung',
        'Angehörige',
        'Bewilligungen',
    ];
  const activeTab = reactive({ tab: tabs[0] });
  const addNewItem = ref(false);

  function  showDialog() {
    document.getElementById('erinnerungen-dialog').showModal();
  }

</script>
<template>
    
    <main class="mt-4">
        <header class="px-16">
            <div class="text-xs font-light text-Blaugrau">
                Eintrittsmanagement > Eintrittsdaten bearbeiten
            </div>
            <h2 class="text-3xl text-Blaugrau">Details der eintretenden Person bearbeiten</h2>
        </header>   

        <HRAEintrittHeader vorname="Stephanie" anrede="Fr." nachname="Babunek" />

        <div class="px-16">
            <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="0" />
        </div>
        

        <div class="mt-6 px-16">
            <div class="bg-white border border-t rounded overflow-hidden">
                <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                    <div>
                        <nav class="mt-4">
                            <ul class="text-sm">
                                <li v-for="tab, index in tabs" class="border-l-4 border-white pl-4 pr-8 py-3 flex hover:bg-gray-200" :class="[{'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab.tab}]">
                                    <a href="#" @click="activeTab.tab = tab">
                                        {{tab}}</a>
                                </li>
                            </ul>

                            <div class="mt-4 px-2 py-6 flex flex-col space-y-3">
                                <a href="" class="px-3 py-2 bg-blue-700 text-white text-center">
                                    Speichern</a>
                                <a href="" class="px-3 py-2 text-blue-700 hover:underline text-center">
                                    Abbrechen</a>
                            </div>
                        </nav>
                    </div>
                    <div class="px-4 py-4 border-l pb-12">

                        <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            <StammdatenPersoenlich />
                            <StammdatenLand />
                            <StammdatenFamilienstand />
                        </div>
                        <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            <StammdatenAdresse />
                        </div>
                        <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            <StammdatenBankverbindung />
                        </div>
                        <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            <StammdatenBehinderung />
                        </div>
                        <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            <StammdatenFamilienangehoerige />
                        </div>
                        <div v-show="tabs[5] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                            
                            <HRAPersonBewilligungen />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </main>
    <dialog id="erinnerungen-dialog" class="modal-erinnerungen border rounded-lg bg-gray-200 " style="height: 52vh; width: 66vw; overflow-y: hidden; ">
        <form action="" method="dialog">
            <div class="grid" :style="{'grid-template-rows: 7rem 1fr 2rem': addNewItem, 'grid-template-rows: 4rem 1fr 2rem': !addNewItem}">
                <header :class="{'h-12': !addNewItem, 'h-24': addNewItem}">
                    <div class="grid grid-cols-3">
                        <h1 class="self-center py-2 font-bold text-lg">{{erinnerungen.length}} Erinnerungen</h1>
                        <!-- Nav -->
                        <div class="self-center flex justify-self-center justify-between w-36 gap-2 bg-white rounded-lg overflow-hidden">
                            <div @click="addNewItem = !addNewItem" class="p-2 hover:bg-green-600 hover:text-green-100" title="Neue Erinnerung">
                                <PlusCircleIcon class="w-6 h-6  " />
                            </div>
                            <div class="p-2 hover:bg-green-600 hover:text-green-100" title="Nur eigene Erinnerungen anzeigen">
                                <UserIcon class="w-6 h-6" />
                            </div>
                            <div class="p-2 hover:bg-green-600 hover:text-green-100" title="Alle Erinnerungen anzeigen">
                                <UserGroupIcon class="w-6 h-6" />
                            </div>
                        </div>
                        <div class="self-center justify-self-end p-2 text-gray-700 bg-white hover:bg-red-600 hover:text-white rounded-lg">
                            <XCircleIcon class="w-6 h-6" />
                        </div>
                    </div>
                    <div v-if="addNewItem" class="py-2">
                        <div class="h-12_ flex items-center px-2 py-2 bg-green-100 rounded-lg gap-4 font-bold text-sm ">
                            <InputText name="neueErinnerung" width="w-full" />
                            <InputDate name="faelligBis" width="text-sm" />
                            <a href="">X</a>
                            <button>Speichern</button>
                        </div>
                    </div>
                </header>
                <main class="overflow-auto" style="height: calc(50vh - 7rem);">
                    <div class="grid grid-cols-[3fr_auto_2fr] px-2 py-1 bg-white rounded-lg gap-4 font-bold text-sm ">
                        <div>Erinnerung</div>
                        <div class="w-7">&nbsp;</div>
                        <div class="grid grid-cols-2 items-center gap-4">
                            <div class="justify-self-center pr-6">Datum</div>
                            <div class="pl-4">Erfasst von</div>
                        </div>
                    </div>
                    <div v-for="erinnerung, index in erinnerungen" class="mt-3 grid grid-cols-[3fr_auto_2fr] px-2 gap-4 text-sm">
                        <div class="self-center">
                            <div class="text-xs font-light text-gray-500">{{erinnerung.seite}}</div>
                            {{erinnerung.erinnerung}}
                        </div>
                        <div class="self-center p-2 rounded-lg">
                            <InputCheckbox :name="erinnerung.erinnerung" />
                        </div>
                        <!-- Action Section -->
                        <div class="grid grid-cols-2 items-center gap-4">
                            <div>
                                <div v-if="erinnerung.faelligDatum" class="flex" title="Datum ändern">
                                    <input type="date" id="faellig" class="py-1 px-0 bg-gray-200 border-none text-sm" :value="erinnerung.faelligDatum">
                                    <label class="self-center" for="faellig">
                                        <CalendarIcon class="w-5 h-5" /></label>
                                </div>
                                <div v-else class="flex" title="Datum ändern">
                                    <input type="date" id="faellig" class="py-1 px-0 bg-gray-200 border-none text-sm" placeholder="nix">
                                    <label class="self-center" for="faellig">
                                        <CalendarIcon class="w-5 h-5" /></label>
                                </div>
                            </div>
                            <div class="justify-self-start pl-4 text-sm font-light">
                                {{erinnerung.erstelltVon}}
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="h-12 py-1">
                    <div class="flex items-center justify-end space-x-4">
                        <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
                        <button formmethod="dialog" class="bg-blue-700 text-white px-2 py-1">Speichern</button>
                    </div>
                </footer>
            </div>
        </form>
    </dialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>