<script setup>
import { QuestionMarkCircleIcon, InformationCircleIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <div class="grid grid-rows-[6rem_1fr] gap-8 ">
        <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Personalabteilung kontaktieren</h1>
        </div>
        <div class="px-6">
            <div class="bg-white p-4 shadow-lg space-y-6">
                <h2 class="text-3xl mb-3">Neue Anfrage an HR</h2>
                <div>
                    <label class="block text-sm font-bold mb-1" for="hauptkategorie">Kategorie</label>
                    <select class="form-input border-gray-200 w-1/3" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)">
                        <option value="1">Persönliches / Datenänderungen</option>
                        <option value="">Kategorie auswählen...</option>
                        <option value="2">Personalabteilung kontaktieren</option>
                        <option value="3">Mitarbeiter*innen-Foto</option>
                        <option value="4">Gehaltsverrechnung</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-bold mb-1" for="hauptkategorie">Grund deiner Nachricht</label>
                    <select class="form-input border-gray-200 w-1/3" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)">
                        <option value="">Staatsangehörigkeit bearbeiten </option>
                    </select>
                </div>
                
            <!-- Hinweistext -->
                <div class="flex justify-between w-3/4 bg-Orange-hell shadow-lg rounded border">
                    <div class=" py-3 px-4">
                        <article class="prose prose-sm">
                            <p><b>Bitte übermittle deinen Staatsbürgerschaftsnachweis.</b></p>
                           
                        </article>
                    </div>

                </div>
            <!-- EIngabefelder -->
                <div class="space-y-3">
                    <h3>Aktuelle Angaben</h3>
                    <div class="grid grid-cols-[12rem_auto] gap-x-4">
                        <InputSelect :options="['AT', 'DE', 'SK']" selected="AT" label="Staatsangehörigkeit 1:"/>
                    </div>
                    <div class="grid grid-cols-[12rem_auto] gap-x-4">
                        <InputSelect :options="['(Leer)', 'DE', 'SK']" selected="(Leer)" label="Staatsangehörigkeit 2:"/>
                    </div>
                    <div class="_grid grid-cols-[12rem_auto] gap-x-4">
                        <InputTextarea label="Deine Nachricht:" class="w-3/4 h-24" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)"/>
                    </div>
                    <h3 class="text-sm">
                        Bei Änderungen der Staatsangehörigkeit muss ein aktueller Nachweis hochgeladen werden.
                    </h3>
                    <div class="p-6 border rounded text-Mittelgrau text-sm w-3/4"
                        style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)"
                    >
                        Dateien zum Hochladen hierher ziehen (maximal 5MB)
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="flex gap-6">
                        <div>
                            <a href="" class="text-Mittelblau font-bold">Abbrechen</a>
                        </div>
                        <div>
                            <a class="bg-Mittelblau text-white font-bold px-4 py-3" href="">Anfrage senden</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>