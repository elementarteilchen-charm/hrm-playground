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
                        <option value="">Kategorie auswählen...</option>
                        <option value="1">Personalabteilung kontaktieren</option>
                        <option value="1">Persönliches / Datenänderungen</option>
                        <option value="1">Mitarbeiter*innen-Foto</option>
                        <option value="1">Gehaltsverrechnung</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-bold mb-1" for="hauptkategorie">Grund Ihrer Nachricht</label>
                    <select class="form-input border-gray-200 w-1/3" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)">
                        <option value="f81b753f-a79e-4e3c-ba40-b2302490b231">Pendlerpauschale</option>
                    </select>
                </div>
                
            <!-- Hinweistext -->
                <div class="flex justify-between w-3/4 bg-Dungelgrau-8 shadow-lg rounded border">
                    <div class=" py-3 px-4">
                        <article class="prose prose-sm">
                            <p><b>Anleitung für Wohnsitz in Österreich</b></p>
                            <ul>
                                <li>Bitte verwenden Sie den Pendlerrechner des BMF, um das Formular L33 zu erstellen.</li>
                                <li>Füllen Sie im Formular Ihre Arbeitszeit laut Dienstvertrag aus.</li>
                                <li>Bitte den Freitag nicht als Abfragetag ausfüllen.</li>
                                <li>Senden Sie anschließend das <b>ausgefüllte</b> und <b>unterzeichnete</b> Formular an uns.</li>
                            </ul>
                            <p><b>Anleitung für Wohnsitz außerhalb von Österreich</b></p>
                            <ul>
                                <li>Bitte laden Sie das Formular L33 9999 mit dem Link unten herunter.</li>
                                <li>Senden Sie anschließend das <b>ausgefüllte</b> und <b>unterzeichnete</b> Formular an uns.</li>
                            </ul>
                            <p><b>Links</b></p>
                            <ul>
                                <li><a href="https://pendlerrechner.bmf.gv.at/pendlerrechner/" target="_blank">Pendlerrechner des BMF</a></li>
                                <li><a href="https://formulare.bmf.gv.at/service/formulare/inter-Steuern/pdfs/9999/L33.pdf" target="_blank">L33 9999 Formular</a></li>
                                <li><a href="https://www.bmf.gv.at/services/berechnungsprogramme/pendlerrechner-faq.html" target="_blank">Häufige Fragen zum Pendlerrechner</a></li>
                            </ul>
                        </article>
                    </div>

                    <InformationCircleIcon class="w-5 h-5 mr-4 my-3 flex-shrink-0 text-Dunkelgrau" />
                </div>
            <!-- EIngabefelder -->
                <div>
                    <div>
                        <label class="block text-sm font-bold">Ihre Nachricht</label>
                        <textarea rows="4" class="form-textarea border-gray-200 w-3/4" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)"></textarea>
                    </div>
                    <div class="my-6 text-sm border hover:bg-gray-100 hover:shadow-lg transition w-48 py-2 px-4 text-center">
                        Upload Drop Zone
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