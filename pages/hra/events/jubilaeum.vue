<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon, ArchiveBoxIcon, TrashIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Hochzeit',
    'Geburt',
    'Ernennungen',
    'Namensänderungen',
    'Ummeldungen',
    'Arbeitszeitmodelländerungen',
    'Signaturänderungen',
    'Visitenkartenänderungen',
    'Erhalt Zusatzqualifikationen',
    'Geschenke',
    'Jubiläum',
];
const activeTab = reactive({ tab: tabs[0] });
const zeigeAnforderungen = ref(false)
</script>
<template>
    <div class="flex items-center justify-between">
        <div class="my-3 text-3xl font-light text-Blaugrau">
            Events & Änderungen
        </div>
    </div>
    
    <main class="grid grid-rows-[auto_auto_auto] gap-8">
        <HRAMitarbeiterInfoBox />

        
    </main>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>