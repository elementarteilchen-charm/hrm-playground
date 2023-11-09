<script setup>
import { PlusCircleIcon, ChevronRightIcon, ArrowDownTrayIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/vue/24/outline';

const zeigeKompetenzabgleich = ref(true)
const modus = ref('FK')

</script>
<template>
    <div  style="background-image: url(/hintergrund.svg);" class="pb-6 bg-no-repeat bg-center bg-top ">
        <header class="py-6 px-6 ">
            <div class="grid grid-cols-2 ">
                <div>
                    <h2 class="font-bold italic text-white text-2xl">WALTER GROUP ENTWICKLUNGSGESPRÄCH</h2>
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
                <div>
                    <a class="font-bold hover:underline" href="">English</a>
                </div>
            </div>
        </header>

        <HRMFeedback 
            v-if="modus != '_GEMEINSAM'"
            kategorie="# Aufgabengebiete / Tätigkeiten" 
            frage="Hauptaufgaben"
            :modus="modus">

            <p>
                Um eine gemeinsame Ausgangsbasis für das bevorstehende Entwicklungsgespräch zu haben, ist es wichtig sich auf folgende Themen vorzubereiten:
            </p>
            <ul class="ml-3 list-disc">
                <li>Hauptaufgaben im Job (innerhalb als auch außerhalb der Abteilung)</li>
                <li>Art der Aufgaben (z.B. Projekte, Trainerinnen Tätigkeit,) </li>
            </ul>
            <div class="mt-3 space-y-3">
                <InputTextarea label="Meine Hauptaufgaben sind:" class="h-32 w-full"></InputTextarea>
            </div>
    
            <template #Fuehrungskraftansicht>
                <div class="mt-3 space-y-3">
                     <h3 class="font-bold">Hauptaufgaben Mitarbeiter*in:</h3>
                     
                     <div class="bg-gray-100 rounded-xl p-3">
                         <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                         <p>
                             Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                         </p>
                     </div>
                     
                     <div class="mt-3 space-y-3">
                        <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                     </div>
                 </div>
            </template>
            <template #Gemeinsameansicht>
                <div class="mt-3 space-y-3">
                     <h3 class="font-bold">Hauptaufgaben Mitarbeiter*in:</h3>
                     
                     <div class="bg-gray-100 rounded-xl p-3">
                         <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                         <p>
                             Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                         </p>
                     </div>
                     
                     <div class="mt-3 space-y-3">
                        <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                     </div>
                 </div>
            </template>     
        </HRMFeedback>

        <HRMFeedback 
            v-if="modus != 'GEMEINSAM_'"
            kategorie="# Aufgabengebiete / Tätigkeiten" 
            frage="Einschätzung der aktuellen Aufgaben/Tätigkeiten"
            :modus="modus">
        
            <p>
                Bitte überlegt euch, wie ihr eure Aufgaben, Tätigkeiten und Gestaltungsfreiräume einschätzt. Was seht ihr als positiv und was soll verändert werden?
            </p>
            <ul class="ml-3 list-disc">
                <li>Seid ihr richtig eingesetzt, über- oder unterfordert?</li>
                <li>Wie empfindest du die Zusammenarbeit mit bzw. in deinem Team?</li>
                <li>Was läuft gut?</li>
                <li>Was soll verändert werden?</li>
                <li>Gibt es diesbezüglich Faktoren, die dich in deiner Entwicklung behindern?</li>
            </ul>
            <div class="mt-3 space-y-3">
                <InputTextarea label="Meine Einschätzung:" class="h-32 w-full"></InputTextarea>
            </div>
            
            <template #Fuehrungskraftansicht>
                <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Wie zufrieden bist du mit der Arbeit deines Mitarbeiters? Ist die Person richtig eingesetzt? Wie funktioniert die Zusammenarbeit im Team? Ist die Person mit gewissen Tätigkeiten über- oder unterfordert? Was läuft gut und was soll verbessert werden?
                    </p>
                    <p>
                        Grundsätzlich basiert das Entwicklungsgespräch auf transparenter und offener Kommunikationsbasis. Themen sollen direkt mit Mitarbeiter*innen besprochen werden.
                    </p>
                    
                </div>
            </template>

            <template #Gemeinsameansicht>
                <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Wie zufrieden bist du mit der Arbeit deines Mitarbeiters? Ist die Person richtig eingesetzt? Wie funktioniert die Zusammenarbeit im Team? Ist die Person mit gewissen Tätigkeiten über- oder unterfordert? Was läuft gut und was soll verbessert werden?
                    </p>
                    <p>
                        Grundsätzlich basiert das Entwicklungsgespräch auf transparenter und offener Kommunikationsbasis. Themen sollen direkt mit Mitarbeiter*innen besprochen werden.
                    </p>
                    
                </div>
            </template>
                    
        </HRMFeedback>

        <HRMFeedback 
            v-if="modus != 'GEMEINSAM'"
            kategorie="# Aufgabengebiete / Tätigkeiten" 
            frage="Wie zufrieden bist du mit deinem derzeitigen Aufgabengebiet und mit deinen Tätigkeiten?"
            :modus="modus">

            <div class="ml-0 mt-3 space-y-3">
                <InputRadio label="Ich bin:" :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" /> 
            </div>
            
            <template #Fuehrungskraftansicht>
                <div class="mt-3 space-y-3">
                    <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                    <div class="bg-gray-100 rounded-xl p-3">
                        <ul class="ml-3 list-disc">
                            <li>Zufrieden</li>
                        </ul>
                    </div>    
                </div>
                 <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
            </template>

        </HRMFeedback>

        <!-- 2 -->
        <HRMFeedback
            v-if="modus != '_GEMEINSAM'"
            kategorie="# Kompetenzentwicklung" 
            frage="Wie geht es dir bei der Umsetzung der besprochenen Kompetenzpunkte?"
            :modus="modus">
            
            <p class="mt-3">
                Hier hast du die Möglichkeit zu kommunizieren, was bisher gut gelaufen ist.
            </p>
            <ul class="list-disc ml-6">
                <li>Wo gab es Herausforderungen oder Hindernisse?</li>
                <li>Inwieweit wurden die Vereinbarungen bisher umgesetzt und die Entwicklungsziele erreicht?</li>
                <li>Bei welchen Themen befindest du dich noch in der Umsetzung?</li>
                <li>Brauchst Du Hilfe bei der weiteren Umsetzung?</li>
            </ul>
            <div class="">
                <button @click="zeigeKompetenzabgleich = !zeigeKompetenzabgleich" class="flex gap-1 items-center px-2 py-2 text-sm font-bold text-Mittelblau hover:bg-gray-200">
                    <ChevronRightIcon class="w-4 h-4" />
                    <span>Notiz vom letzten Kompetenzabgleich</span>
                </button>
                <div v-show="zeigeKompetenzabgleich" class="border-l-2 border-Hellblau px-4 py-2 ml-6">
                    Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quaerat autem, molestiae provident odit atque officia? Atque veniam, cum consequatur modi fuga amet sint omnis quae laborum voluptas delectus, labore.
                </div>
            </div>
            <div class="ml-0 mt-3 space-y-3">
                <InputRadio label="Ich bin:" :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" />
            </div>
            <div class="mt-3 space-y-3">
                <InputTextarea label="Mein Feedback:" class="h-32 w-full"></InputTextarea>
            </div>

            <template #Fuehrungskraftansicht>
                <div class="mt-3 space-y-3">
                    <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                    <div class="bg-gray-100 rounded-xl p-3">
                        <ul class="ml-3 list-disc">
                            <li>Zufrieden</li>
                        </ul>
                    </div>
                    <h3 class="font-bold">Feedback Mitarbeiter*in:</h3>
                    
                    <div class="bg-gray-100 rounded-xl p-3">
                        <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                        <p>
                            Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                        </p>
                    </div>
                </div>

                
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    Hier hast du die Möglichkeit zu kommunizieren, was bisher gut gelaufen ist. <br>
                    Wo es Herausforderungen oder Hindernisse gab? Inwieweit wurden die Vereinbarungen bisher umgesetzt und die Entwicklungsziele erreicht? Bei welchen Themen befindet sich dein Mitarbeiter/deine Mitarbeiterin noch in der Umsetzung? Welche Hilfe braucht der/die Mitarbeiter*in für die weitere Umsetzung? 

                </div>
            </template>

            <template #Gemeinsameansicht>
                <div class="mt-3 space-y-3">
                    <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                    <div class="bg-gray-100 rounded-xl p-3">
                        <ul class="ml-3 list-disc">
                            <li>Zufrieden</li>
                        </ul>
                    </div>
                    <h3 class="font-bold">Feedback Mitarbeiter*in:</h3>
                    
                    <div class="bg-gray-100 rounded-xl p-3">
                        <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                        <p>
                            Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                        </p>
                    </div>
                </div>

                
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    Hier hast du die Möglichkeit zu kommunizieren, was bisher gut gelaufen ist. <br>
                    Wo es Herausforderungen oder Hindernisse gab? Inwieweit wurden die Vereinbarungen bisher umgesetzt und die Entwicklungsziele erreicht? Bei welchen Themen befindet sich dein Mitarbeiter/deine Mitarbeiterin noch in der Umsetzung? Welche Hilfe braucht der/die Mitarbeiter*in für die weitere Umsetzung? 

                </div>
            </template>
        </HRMFeedback>

        <!-- 3 -->
        <HRMFeedback
            v-if="modus != '_GEMEINSAM'"
            kategorie="# Kompetenzentwicklung" 
            frage="Was hat sich seit dem letzten Entwicklungsgespräch verändert?"
            :modus="modus">

            <p class="mt-3">
                Hier hast du die Möglichkeit zu kommunizieren, was bisher gut gelaufen ist.
            </p>
            <ul class="list-disc ml-6">
                <li>Wie zufrieden bin ich in Summe mit dem Entwicklungsfortschritt seit dem letzten Entwicklungsgespräch?</li>
                <li>Wie war die Situation vor einem Jahr, wie ist die Situation jetzt, welche Entwicklung lag dazwischen?</li>
            </ul>
            <div class="mt-3 space-y-3">
                <InputTextarea label="Meine Einschätzung:" class="h-32 w-full"></InputTextarea>
            </div>

            <template #Fuehrungskraftansicht>
                <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>

                <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Hier hast du als Führungskraft die Möglichkeit, Feedback zu geben. Wie hast du die bisherige Entwicklung (seit dem letzten EWG) wahrgenommen? Was läuft gut? Was soll sich verbessern? Hole dir Feedback von den richtigen Personen ein.     
                    </p>
                    <p>
                        Sei in deinen Aussagen klar, konkret aber wertschätzend und untermauere deine Wahrnehmung mit Beispielen. Hab keine Scheu davor auch negative Aspekte anzusprechen.
                    </p>
                </div>

            </template>

            <template #Gemeinsameansicht>
                <h3 class="font-bold">Einschätzung Mitarbeiter*in:</h3>
                
                <div class="bg-gray-100 rounded-xl p-3">
                    <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
                    <p>
                        Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
                    </p>
                </div>

                <div class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Hier hast du als Führungskraft die Möglichkeit, Feedback zu geben. Wie hast du die bisherige Entwicklung (seit dem letzten EWG) wahrgenommen? Was läuft gut? Was soll sich verbessern? Hole dir Feedback von den richtigen Personen ein.     
                    </p>
                    <p>
                        Sei in deinen Aussagen klar, konkret aber wertschätzend und untermauere deine Wahrnehmung mit Beispielen. Hab keine Scheu davor auch negative Aspekte anzusprechen.
                    </p>
                </div>

            </template>

        </HRMFeedback>

        <!-- 4 -->
        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'"
            kategorie="# Fachliche Weiterentwicklung" 
            frage="Mögliche Entwicklung innerhalb meines Jobs / Maßnahmen zur persönlichen und fachlichen Weiterentwicklung"
            :modus="modus">
            
            <template #Gemeinsameansicht>
                <p class="mt-3">
                    Hier gibt es die Möglichkeit, konkrete Entwicklungsbereiche zu definieren, die innerhalb eines Jahres umsetzbar sind. Du kannst ein oder mehrere Entwicklungsfelder definieren.
                </p>
                <ul class="list-disc ml-6">
                    <li>Woran soll gearbeitet werden?</li>
                    <li>Welches Ziel wird damit verfolgt?</li>
                    <li>Welche konkreten Handlungen/Maßnahmen sollen erfolgen? </li>
                    <li>Bis wann wollen wir die Entwicklung umgesetzt haben? </li>
                </ul>
                <h3 class="mt-6 mb-1 text-lg font-bold">Was soll im nächsten Jahr erreicht oder verändert werden?</h3>
                <div class="bg-Blaugrau-10 space-y-3 rounded-tr-lg rounded-br-lg border-l-2 border-Mittelblau px-3 py-3 ">
                    <div class="grid grid-cols-[auto_1fr] gap-8">
                        <div>
                            <InputSelect :options="['PM', 'Sprachen', 'Digital', 'Technik', 'Verkauf', 
                                'Kundenkontakt', 'Kommunikation', 'Organisation', 'Management', 'Leadership']" label="Bereich" width="w-48" />
                        </div>
                        <div>
                            <InputText label="Bis wann" width="w-32" value="Q4" />
                        </div>
                    </div>
                    <InputTextarea label="Ziel" text="Projektmanagementmethoden wurden erlernt und im Arbeitsalltag umgesetzt" class="h-16 w-full" />
                    <InputTextarea label="Konkrete Handlungen" text="Besuch eines Fachseminars" class="h-16 w-full" />
                    <InputTextarea label="Anmerkung" text="Schulungsangebot mit Personalschulung abstimmen" class="h-16 w-full" />
                </div>
                <div class="mt-6 border border-Blaugrau-25 rounded-lg px-4 py-2 hover:bg-Blaugrau-25">
                    <button class="flex gap-2 ">
                        <PlusCircleIcon class="w-6 h-6" />Weiteren Bereich hinzufügen</button>
                </div>
            </template>

        </HRMFeedback>

        <HRMFeedback 
            kategorie="# Fachliche Weiterentwicklung" 
            frage="Weitere Fähigkeiten und Talente, die ich einbringen kann / will"
            :modus="modus">
            
            
            <p class="mt-3">
                Nur wenn wir als Unternehmen deine Fähigkeiten und Talente kennen, können wir deine Entwicklung zielgerichtet begleiten. Hier hast du die Möglichkeit diese einzutragen
            </p>
            <div class="mt-6 space-y-3">
                <h3 class="font-bold">Selbsteinschätzung:</h3>
                <div v-for="skill in ['Moderation', 'Projektmanagement', 'Trainertätigkeit', 'IT Affinität']">
                    <InputCheckbox :checkboxLabel="skill" />
                </div>
                <InputText label="Sonstiges:" width="w-full" />
            </div>
            

            <template #Fuehrungskraftansicht>
                <p class="mt-3">
                    Nur wenn wir als Unternehmen deine Fähigkeiten und Talente kennen, können wir deine Entwicklung zielgerichtet begleiten. Hier hast du die Möglichkeit diese einzutragen
                </p>
                
                <div class="mt-6 bg-gray-100 rounded-xl p-3">

                    <h3 class="font-bold">Selbsteinschätzung:</h3>
                    <div v-for="skill in ['Projektmanagement', 'Trainertätigkeit']">
                        <li>{{skill}}</li>
                    </div>
                    <!-- <InputText label="Sonstiges:" width="w-full" /> -->
                </div>
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
            </template>
            <template #Gemeinsameansicht>
                <p class="mt-3">
                    Nur wenn wir als Unternehmen deine Fähigkeiten und Talente kennen, können wir deine Entwicklung zielgerichtet begleiten. Hier hast du die Möglichkeit diese einzutragen
                </p>
                <div class="mt-6 bg-gray-100 rounded-xl p-3">

                    <h3 class="font-bold">Selbsteinschätzung:</h3>
                    <div v-for="skill in ['Projektmanagement', 'Trainertätigkeit']">
                        <li>{{skill}}</li>
                    </div>
                    <!-- <InputText label="Sonstiges:" width="w-full" /> -->
                </div>
                <div class="mt-3 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                </div>
            </template>
        </HRMFeedback>
        <!-- 5 -->

<!-- 6 -->
        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'"
            kategorie="# Fachliche Weiterentwicklung" 
            frage="Bildungsbedarf - Empfohlene Maßnahmen zur Weiterentwicklung"
            :modus="modus">
            <template #Gemeinsameansicht>
                <p class="mt-3">
                    Gemeinsam mit deiner Führungskraft hast du hier die Möglichkeit Weiterbildungsbedarf zu dokumentieren. Diese Information wird von der Führungskraft an die Schulungsabteilung weitergeleitet. Die Schulungsabteilung meldet sich im Anschluss mit einem konkreten Lernangebot bei dir. 
                </p>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Maßnahmen zur Weiterentwicklung:" class="h-32 w-full"></InputTextarea>
                </div>
            </template>
        </HRMFeedback>



<!-- 7 -->
        <HRMFeedback 
            kategorie="# Fachliche Weiterentwicklung" 
            frage="Langfristige Entwicklungsziele / Wünsche"
            :modus="modus">

            
            <div class="mt-6 space-y-3">
                <InputRadio label="" :options="['Ich bin mit meinem momentanen Aufgabengebiet sehr zufrieden','Langfristig sehe ich mich in einem anderen Bereich']" />
            </div>
            <div class="mt-6 space-y-3">
                <InputTextarea label="Anmerkungen:" class="h-32 w-full"></InputTextarea>
            </div>


            <template #Fuehrungskraftansicht>

                <div class="mt-6 bg-gray-100 rounded-xl p-3">
                    <li>Langfristig sehe ich mich in einem anderen Bereich</li>
                </div>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Vertrauliche Notiz:" class="h-32 w-full border-l-4 border-l-red-500"></InputTextarea>
                </div>
            </template>

            <template #Gemeinsameansicht>
                <div class="mt-6 bg-gray-100 rounded-xl p-3">
                    <li>Langfristig sehe ich mich in einem anderen Bereich</li>
                </div>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full border-l-4 border-l-green-500"></InputTextarea>
                </div>
            </template>
        </HRMFeedback>

<!-- 8 -->
        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'"
            kategorie="# Arbeitszeit" 
            frage="Momentanes Arbeitszeitmodell"
            :modus="modus">
            <template #Gemeinsameansicht>
                <p class="mt-3">
                    Hier ist Platz um über das aktuelle Arbeitszeitmodell zu sprechen. Bleibt das momentane Zeitmodell gleich oder soll sich etwas verändern?
                </p>
                <div class="mt-6 space-y-3">
                    <InputRadio label="" :options="['Das Arbeitszeitmodell soll momentan so bleiben wie vereinbart', 'Änderung der Arbeitszeit erwünscht']" />
                </div>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Gemeinsame Notiz:" class="h-32 w-full  border-l-4 border-l-green-500"></InputTextarea>
                </div>
            </template>
        </HRMFeedback>



<!-- Abschluss -->
        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'"
            kategorie="# Anmerkungen" 
            frage="Sonstige Anmerkungen"
            :modus="modus">
            <template #Gemeinsameansicht>
                <p class="mt-3">
                    Gibt es Themen und Anmerkungen die du und dein/e Gesprächspartner*in zusätzlich dokumentieren wollen? 
                    Hier gibt es Platz dafür.
                </p>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Gemeinsame Notizen:" class="h-48 w-full  border-l-4 border-l-green-500"></InputTextarea>
                </div>
            </template>
        </HRMFeedback>

        <HRMFeedback 
            v-if="modus == 'GEMEINSAM'"
            kategorie="# Anmerkungen" 
            frage="Feedback"
            :modus="modus">
            <template #Gemeinsameansicht>
                <div class="mt-6 space-y-3">
                    <InputTextarea label="Feedback/Zusammenfassung:" class="h-48 w-full  border-l-4 border-l-green-500"></InputTextarea>
                </div>
                <div class="text-sm leading-normal space-y-3">
                    <p>
                        Für das gegenseitige Verständnis hast du hier als Führungskraft die Möglichkeit ein zusammenfassendes schriftliches Feedback zu geben.  
                    </p>
                    <p>
                       Im ersten Schritt soll das Feedback dem/der Mitarbeiter*in aber direkt im Gespräch mündlich gegeben werden. Dieses Feld dient nur für die schriftliche Dokumentation im Nachhinein. Jeder soll zusätzlich zum mündlichen auch ein schriftliches Feedback bekommen. 
                    </p>

                </div>
            </template>
        </HRMFeedback>

    </div>
</template>