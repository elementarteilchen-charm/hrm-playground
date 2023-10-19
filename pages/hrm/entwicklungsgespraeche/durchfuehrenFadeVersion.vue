<script setup>
import { ChevronRightIcon, ArrowDownTrayIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/vue/24/outline';
const hauptkategorien = ['Gehalt', 'Vertrag']

const planen = [{
        mitarbeiter: 'Malgorzata Dorner',
        durchzufuehrenBis: '31.10.2023',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-2.jpg'
    },
    {
        mitarbeiter: 'Michael Auer',
        durchzufuehrenBis: '07.11.2023',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-3.jpg'
    },


]

    const zeigeKompetenzabgleich = ref(true)


</script>
<template>
    <div class="grid grid-rows-[6rem_1fr] gap-6 ">
        <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Entwicklungsgespräche</h1>
        </div>

        <div class="space-y-3 w-3/5">
            <div class="border bg-white p-6 space-y-6">
                
                <section>                    
                    <h2 class="text-2xl font-bold">1) Aufgabengebiete / Tätigkeiten</h2>
                    <p>
                        Um eine gemeinsame Ausgangsbasis für das bevorstehende Entwicklungsgespräch zu haben, ist es wichtig sich auf folgende Themen vorzubereiten.
                    </p>
                </section>

                <section>
                    <h2 class="text-lg font-bold">1.1) Hauptaufgaben</h2>
                    <div class="text-sm text-gray-500">
                        
                        <ul class="ml-6 list-disc">
                            <li>Hauptaufgaben im Job (innerhalb als auch außerhalb der Abteilung)</li>
                            <li>Art der Aufgaben (z.B. Projekte, Trainerinnen Tätigkeit,) </li>
                        </ul>
                    </div>
                    <div>
                        <InputTextarea label="Meine Hauptaufgaben sind:" class="h-32 w-full"></InputTextarea>
                    </div>
                </section>

                <section>
                    <h2 class="text-lg font-bold">1.2) Einschätzung der aktuellen Aufgaben/Tätigkeiten</h2>
                    <div class="text-sm text-gray-500 space-y-3">
                        
                        <p>
                            Bitte überlegt euch, wie ihr eure Aufgaben, Tätigkeiten und Gestaltungsfreiräume einschätzt.  Was seht ihr als positiv und was soll verändert werden?  
                        </p>

                        <ul class="ml-6 list-disc">
                            <li>Seid ihr richtig eingesetzt, über- oder unterfordert?</li>
                            <li>Wie empfindest du die Zusammenarbeit mit bzw. in deinem Team?</li>
                            <li>Was läuft gut?</li>
                            <li>Was soll verändert werden?</li>
                            <li>Gibt es diesbezüglich Faktoren, die dich in deiner Entwicklung behindern?</li>
                        </ul>
                    </div>
                    <div>
                        <InputTextarea label="Meine Einschätzung:" class="h-32 w-full"></InputTextarea>
                    </div>
                    <div class="bg-gray-100">
                        ** Wie zufrieden bist Du mit der Arbeit deines Mitarbeiters? Ist die Person richtig eingesetzt? Wie funktioniert die Zusammenarbeit im Team? Ist die Person mit gewissen Tätigkeiten über- oder unterfordert? Was läuft gut und was soll verbessert werden?
                    </div>
                </section>
                
                <section>
                    <h2 class="text-lg font-bold">1.2) Wie zufrieden bist du mit meinem derzeitigen Aufgabengebiet und mit deinen Tätigkeiten?</h2>

                    <div class="ml-6 mt-3">

                        <InputRadio label="Ich bin:" :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" />
                    </div>
                </section>
                
            </div>

            <div class="border bg-white px-4 py-6">
                <h2 class="text-xl font-bold">2) Wie geht es dir bei der Umsetzung der besprochenen Kompetenzpunkte?</h2>
                <section>
                    <div class="text-sm text-gray-500 space-y-3">
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
                            <button 
                                @click="zeigeKompetenzabgleich = !zeigeKompetenzabgleich" 
                                class="flex gap-1 items-center px-2 py-2 text-sm font-bold text-Mittelblau hover:bg-gray-200">
                                <ChevronRightIcon class="w-4 h-4"/>
                                <span>Notiz vom letzten Kompetenzabgleich</span>
                            </button>
                            <div v-show="zeigeKompetenzabgleich"
                                class="border-l-2 border-Hellblau px-4 py-2 ml-6">
                                Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quaerat autem, molestiae provident odit atque officia? Atque veniam, cum consequatur modi fuga amet sint omnis quae laborum voluptas delectus, labore.
                            </div>                        
                        </div>
                    </div>
                    
                    <div class="ml-0 mt-3">
                        <InputRadio label="Ich bin:" :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" />
                    </div>

                    <div>
                        <InputTextarea label="Meine Einschätzung:" class="h-32 w-full"></InputTextarea>
                    </div>
                </section>
            </div>
            <div class="border bg-white p-3">
                <h2 class="text-xl font-bold">3) Was hat sich seit dem letzten Entwicklungsgespräch verändert?</h2>
                                <section>
                    <div class="text-sm text-gray-500 space-y-3">
                        <p class="mt-3">
                            Hier hast du die Möglichkeit zu kommunizieren, was bisher gut gelaufen ist.
                        </p> 
                        <ul class="list-disc ml-6">
                            <li>Wie zufrieden bin ich in Summe mit dem Entwicklungsfortschritt seit dem letzten Entwicklungsgespräch?</li>
                            <li>Wie war die Situation vor einem Jahr, wie ist die Situation jetzt, welche Entwicklung lag dazwischen?</li>
                            
                        </ul>
                        
                    </div>
                    

                    <div>
                        <InputTextarea label="Meine Einschätzung:" class="h-32 w-full"></InputTextarea>
                    </div>
                </section>
                
            </div>
        </div>

    </div>
</template>