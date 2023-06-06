<script setup>
</script>
<template>
    <div class="grid grid-rows-[6rem_1fr] gap-8 ">
        <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Personalabteilung kontaktieren</h1>
        </div>
        <div class="px-6">
            <div class="bg-white p-4 shadow-lg space-y-3">
                <h2 class="text-3xl mb-3">Neue Anfrage an HR</h2>
                <div>
                    <label class="block text-sm font-bold mb-1" for="hauptkategorie">Kategorie</label>
                    <select class="form-input border-gray-200 w-1/3" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)">
                        <option value="">Kategorie auswählen...</option>
                        <option value="f81b753f-a79e-4e3c-ba40-b2302490b231">Personalabteilung kontaktieren</option>
                        <option value="443db314-a3df-4cf7-ba1f-1a36882273bb">Persönliches / Datenänderungen</option>
                        <option value="9037ba4e-8c79-4841-b771-997794da0196">Mitarbeiter*innen-Foto</option>
                        <option value="95247fe6-3b75-4726-9570-2cab6d37180e">Gehaltsverrechnung</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-bold mb-1" for="hauptkategorie">Grund Ihrer Nachricht</label>
                    <select class="form-input border-gray-200 w-1/3" style="box-shadow: inset 2px 2px 2px 0 rgba(51,51,51,.1)">
                        <option value="f81b753f-a79e-4e3c-ba40-b2302490b231">Pendlerpauschale</option>
                    </select>
                </div>

                <!-- Hinweistext -->
                <div>
                    <div class="">
                        <div  class="">
                            
                            <span  class="">
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
                                </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>