<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
const title = "Datenschutzeinstellungen";
</script>
<template>
    <MeineDatenBox :title="title" buttonText="Datenschutz">
        <div class="px-4 py-2 text-sm">
            <p class="mt-2 font-bold">
                Ich bin damit einverstanden, dass folgende Informationen veröffentlicht werden:
            </p>
            <div class="_grid grid-cols-1 gap-4">

                <InputCheckbox2 checkboxLabel="Hochzeit" />
                <InputCheckbox2 checkboxLabel="Geburt eines Kindes" />
                <InputCheckbox2 checkboxLabel="Firmenjubiläum" />
        
                <p class="mt-2 font-bold">
                    Das Insider Magazin lese ich lieber:
                </p>
                <ul>
                    <li>
                        <InputRadio name="insider" :options="['Online', 'In Papierform']" />
                    </li>
                </ul>
         
            </div>
        </div>
    </MeineDatenBox>
</template>