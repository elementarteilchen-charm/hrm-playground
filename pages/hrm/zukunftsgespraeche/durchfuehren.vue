<script setup>
import { PlusCircleIcon, ChevronRightIcon, ArrowDownTrayIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/vue/24/outline';

const zeigeKompetenzabgleich = ref(true)
const modus = ref('MA') // MA, FK, GEMEINSAM

</script>
<template>
    <div style="background-image: url(/hintergrund.svg);" class="h-screen bg-no-repeat bg-center bg-top">
        <header class="py-6 px-6">
            <div class="grid grid-cols-2">
                <div>
                    <h2 class="font-bold italic text-white text-2xl">WALTER GROUP ZUKUNFTSGESPRÄCH</h2>
                    <div class="text-white">Willkommen Michael Hauser!</div>
                </div>
                <div class="place-self-end space-x-2">
                    <button :class="{'text-white': modus == 'MA'}" class="text-blue-600"  @click="modus='MA'">MA</button>
                    <button :class="{'text-white': modus == 'FK'}" class="text-blue-600" @click="modus='FK'">FK</button>
                    <button :class="{'text-white': modus == 'GEMEINSAM'}" class="text-blue-600" @click="modus='GEMEINSAM'">GEMEINSAM</button>
                </div>
            </div>
            <div class="mt-6 grid grid-cols-3 text-white place-items-center ">
                <div>
                    <a class="font-bold hover:underline" href="">← zurück zur vorigen Frage</a>
                </div>
                <div class="justify-self-center">
                    <div class="text-center">
                        Frage 1 / 3
                    </div>
                    <div class="mt-1 flex gap-2 items-center ">
                        <svg data-v-8adb3c8c="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 16 16" style="fill: #CCEECC;">
                            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM6.5 12.031l-2.813-3.344 1.031-1.031 1.781 1.75 5.156-4.5 0.719 0.719-5.875 6.406z"></path>
                        </svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" style="fill: #CCEECC;" class="">
                            <path d="M0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8z"></path>
                        </svg>
                        <svg data-v-8adb3c8c="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" stroke-width="2" viewBox="0 0 16 16" style="fill: white">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex gap-2">
                    <a class="font-bold hover:underline" href="">English</a>
                    
                </div>
            </div>
        </header>
<!-- 1 -->        
        
        <HRMFeedback 
                kategorie="# Langfristige Entwicklungsziele / Wünsche" 
                frage="Wunsch / Vorstellung Mitarbeiter*in"
                speichernText="Speichern und absenden"
                :modus="modus">
            <p>
                In diesem Gespräch geht es um deine langfristige Entwicklung. Bitte beschreibe dein konkretes Anliegen. 
            </p>
            
            <div class="mt-3 space-y-3">
                <InputTextarea label="Meine Vorstellung ist:" class="h-32 w-full"></InputTextarea>
            </div>
            
            <template #Fuehrungskraftansicht>
                <h3 class="font-bold">Wunsch Vorstellung Mitarbeiter*in:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>
                
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>    
            </template>

            <template #Gemeinsameansicht>
                <h3 class="font-bold">Feedback:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>
                
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Hier habt Ihr die Gelegenheit, euch über langfristige Entwicklungsmöglichkeiten, Perspektiven und Wünsche zu unterhalten. Wichtig ist es, realistische und klare Ziele zu besprechen (Entwicklung in Richtung Führungsverantwortung, fachliche Entwicklung im eigenen Bereich oder fachliche Entwicklung in einem fremden oder angrenzenden Tätigkeitsbereich). 
                    </p>
                    <p>
                        Sprecht über eure Wahrnehmungen, Vorstellungen und Wünsche und gebt euch diesbezüglich auch offenes und ehrliches Feedback. Klarheit am Weg ist für die Weitsicht sehr wichtig.
                    </p>

                </div>
            </template>
        </HRMFeedback>

        <HRMFeedback 
            kategorie="# Langfristige Entwicklungsziele / Wünsche" 
            frage="Wunsch / Vorstellung Mitarbeiter*in "
            :modus="modus">
            
            <h3 class="font-bold">Feedback:</h3>
            
            <div class="bg-gray-100 rounded-xl p-3">
                <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                <p>
                    Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                </p>
            </div>
            
            <div class="mt-3 space-y-3">
                <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
            </div>
        </HRMFeedback>

        <HRMFeedback 
            kategorie="# Langfristige Entwicklungsziele/Wünsche" 
            frage="Wunsch/Vorstellung Mitarbeiter*in ">

            <h3 class="font-bold">Feedback:</h3>
            
            <div class="bg-gray-100 rounded-xl p-3">
                <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                <p>
                    Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                </p>
            </div>
            
            <div class="mt-3 space-y-3">
                <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
            </div>
            <div class="text-sm leading-normal space-y-3">
                <p>
                    Hier habt Ihr die Gelegenheit, euch über langfristige Entwicklungsmöglichkeiten, Perspektiven und Wünsche zu unterhalten. Wichtig ist es, realistische und klare Ziele zu besprechen (Entwicklung in Richtung Führungsverantwortung, fachliche Entwicklung im eigenen Bereich oder fachliche Entwicklung in einem fremden oder angrenzenden Tätigkeitsbereich). 
                </p>
                <p>
                    Sprecht über eure Wahrnehmungen, Vorstellungen und Wünsche und gebt euch diesbezüglich auch offenes und ehrliches Feedback. Klarheit am Weg ist für die Weitsicht sehr wichtig.
                </p>

            </div>
        </HRMFeedback>

<!-- FK only -->
        <HRMFeedback 
            v-if="modus == 'FK'" 
            kategorie="# Langfristige Entwicklungsziele / Wünsche" 
            frage="Einschätzung Führungskraft">
            
             <div class="ml-0 mt-3 space-y-3">
                
                <InputRadio 
                    :options="[
                        'Fachliche Entwicklung im derzeitigen Bereich', 
                        'Fachliche Entwicklung in einen anderen Bereich',
                        'Führungslaufbahn',
                        'Sonstiges']" />
                <InputSelect label="Mandant"  width="w-1/2"
                    :options="['LKW WALTER', 'CONTAINEX', 'WGS', 'WALTER LAGERBETRIEBE']" />
                <InputSelect label="Tätigkeit" width="w-1/2" selected="Business Development"
                    :options="['Sales', 'Transport Management', 'Customer Service', 'Business Development', 'BDO', 'Carrier Management']" />                    
            </div>

            <div class="mt-3 space-y-3">
                <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
            </div>
        </HRMFeedback>
        

<!-- 2 -->

        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'" 
            kategorie="# Langfristige Entwicklungsziele" 
            frage="Vorstellung Führungskraft"
            :modus="modus">

            <template #Gemeinsameansicht>
                <div class="space-y-3 text-sm">
                    
                    <div v-if="false">
                        
                    <p>
                       Hier habt Ihr die Gelegenheit, euch über langfristige Entwicklungsmöglichkeiten, Perspektiven und Wünsche zu unterhalten. <br>
                       Wichtig ist es, realistische und klare Ziele zu besprechen (Entwicklung in Richtung Führungsverantwortung, fachliche Entwicklung im eigenen Bereich oder fachliche Entwicklung in einem fremden oder angrenzenden Tätigkeitsbereich). 
                    </p>
                    <p>
                        Sprecht über eure Wahrnehmungen, Vorstellungen und Wünsche und gebt euch diesbezüglich auch offenes und ehrliches Feedback. Klarheit am Weg ist für die Weitsicht sehr wichtig.               
                    </p>
                    </div>

                   <h3 class="font-bold">Wo sehe ich dich?</h3>
                   <div class="bg-gray-100 rounded-xl p-3">
                       <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                       <p>
                           Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                       </p>
                   </div>

                    <div class="mt-3">
                        <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
                    </div>

                    <div class="text-xs leading-normal space-y-3">
                        <p>
                           Hier habt Ihr die Gelegenheit, euch über langfristige Entwicklungsmöglichkeiten, Perspektiven und Wünsche zu unterhalten. <br>
                           Wichtig ist es, realistische und klare Ziele zu besprechen (Entwicklung in Richtung Führungsverantwortung, fachliche Entwicklung im eigenen Bereich oder fachliche Entwicklung in einem fremden oder angrenzenden Tätigkeitsbereich). 
                        </p>
                        <p>
                            Sprecht über eure Wahrnehmungen, Vorstellungen und Wünsche und gebt euch diesbezüglich auch offenes und ehrliches Feedback. Klarheit am Weg ist für die Weitsicht sehr wichtig.               
                        </p>
                    </div>

                </div>
            </template>


        </HRMFeedback>

        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'" 
            kategorie="# Arbeitszeit" 
            frage="Momentanes Arbeitszeitmodell">

            <p>
               Hier ist Platz, um über das aktuelle Arbeitszeitmodell zu sprechen. Bleibt das momentane Zeitmodell gleich oder soll sich etwas verändern?
            </p>

            <div class="ml-0 mt-3 space-y-3">
                <InputRadio 
                    :options="[
                        'Das Arbeitszeitmodell soll momentan so bleiben wie vereinbart', 
                        'Änderung der Arbeitszeit erwünscht']" />
            </div>

            <div class="mt-3 space-y-3">
                <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
            </div>


        </HRMFeedback>

<!-- 3 -->

        <HRMFeedback v-if="modus == 'GEMEINSAM'" kategorie="# Anmerkungen" frage="Sonstige Anmerkungen">
            <div class="text-sm leading-normal space-y-3">
                <p>
                   Gibt es Themen und Anmerkungen die du und dein/e Gesprächspartner*in zusätzlich dokumentieren wollen? Hier gibt es Platz dafür.
                </p>
            </div>
            <div class="mt-3 space-y-3">
                <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
            </div>
        </HRMFeedback>


<!-- 4 -->
        <main class="pb-12">
            <HRMFeedback 
                v-if="modus == 'GEMEINSAM'" 
                kategorie="# Abschluss" 
                frage="Feedback" 
                speichernText="Speichern & abschließen">

                <div v-if="1 == 2" class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-Gruen-logo"></InputTextarea>
                </div>
                <div class="mt-3 space-y-1 mb-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border border-red-500"></InputTextarea>
                    <div class="text-red-500 text-sm">
                        Bitte erfassen Sie eine Notiz.
                    </div>
                </div>
                
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Für das gegenseitige Verständnis hast du hier als Führungskraft die Möglichkeit ein zusammenfassendes schriftliches Feedback zu geben.  Im ersten Schritt soll das Feedback dem/der Mitarbeiter*in aber direkt im Gespräch mündlich gegeben werden. 
                    </p>
                    <p>
                     Dieses Feld dient nur für die schriftliche Dokumentation im Nachhinein. Jeder soll zusätzlich zum mündlichen auch ein schriftliches Feedback bekommen.
                    </p>
                </div>
            </HRMFeedback>
        </main>

    </div>
</template>