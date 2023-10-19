<script setup>
import { ChevronRightIcon, ArrowDownTrayIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/vue/24/outline';


const zeigeKompetenzabgleich = ref(true)
</script>
<template>
    <div style="background-image: url(/hintergrund.svg);" class="h-screen bg-no-repeat bg-center bg-top">
        <header class="py-6 px-6">
            <div>
                <h2 class="font-bold italic text-white text-2xl">WALTER GROUP ENTWICKLUNGSGESPRÄCH</h2>
                <div class="text-white">Willkommen Michael Hauser!</div>
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
                        <svg data-v-8adb3c8c="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 16 16" style="fill: #CCEECC;"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM6.5 12.031l-2.813-3.344 1.031-1.031 1.781 1.75 5.156-4.5 0.719 0.719-5.875 6.406z"></path></svg>
                        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" style="fill: #CCEECC;" class=""><path d="M0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8z"></path></svg>
                        <svg data-v-8adb3c8c="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" stroke-width="2" viewBox="0 0 16 16" style="fill: white"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path></svg>
                    </div>
                </div>
                <div>
                    <a class="font-bold hover:underline" href="">English</a>
                </div>
            </div>
        </header>
        
        <main class="mt-12">
            <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
                <div>
                    <h2 class="uppercase text-Mittelblau font-bold text-center"># Aufgabengebiete / Tätigkeiten</h2>
                    <div class="flex items-center gap-3 my-3">
                        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
                            <path d="M29.7495 41.7792L29.7495 74H0L0 48.5625C0 34.7903 1.64419 24.8208 4.93256 18.6542C9.24856 10.4319 16.0822 4.21389 25.4335 0L32.2158 10.7917C26.5639 13.1556 22.4021 16.7014 19.7303 21.4292C17.0584 26.0542 15.5684 32.8375 15.2601 41.7792L29.7495 41.7792ZM77.5337 41.7792L77.5337 74L47.7842 74V48.5625C47.7842 34.7903 49.4284 24.8208 52.7168 18.6542C57.0328 10.4319 63.8664 4.21389 73.2177 0L80 10.7917C74.3481 13.1556 70.1863 16.7014 67.5145 21.4292C64.8426 26.0542 63.3526 32.8375 63.0443 41.7792H77.5337Z" fill="#F2F4F6"></path>
                        </svg>
                        <h2 class="text-3xl font-bold">Hauptaufgaben</h2>
                    </div>
                    <section class="px-[100px]">
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
                    </section>
                    <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                        <div>
                            <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                        </div>
                        <div>
                            <InputButton>Speichern & nächste Frage</InputButton>
                        </div>
                    </footer>
                </div>
            </div>
        </main>

        <main class="mt-12">
            <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
                <div>
                    <h2 class="uppercase text-Mittelblau font-bold text-center"># Aufgabengebiete / Tätigkeiten</h2>
                    <div class="flex items-center gap-3 my-3">
                        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
                            <path d="M29.7495 41.7792L29.7495 74H0L0 48.5625C0 34.7903 1.64419 24.8208 4.93256 18.6542C9.24856 10.4319 16.0822 4.21389 25.4335 0L32.2158 10.7917C26.5639 13.1556 22.4021 16.7014 19.7303 21.4292C17.0584 26.0542 15.5684 32.8375 15.2601 41.7792L29.7495 41.7792ZM77.5337 41.7792L77.5337 74L47.7842 74V48.5625C47.7842 34.7903 49.4284 24.8208 52.7168 18.6542C57.0328 10.4319 63.8664 4.21389 73.2177 0L80 10.7917C74.3481 13.1556 70.1863 16.7014 67.5145 21.4292C64.8426 26.0542 63.3526 32.8375 63.0443 41.7792H77.5337Z" fill="#F2F4F6"></path>
                        </svg>
                        <h2 class="text-3xl font-bold">Einschätzung der aktuellen Aufgaben/Tätigkeiten</h2>
                    </div>
                    <section class="px-[100px]">
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
                    </section>
                    <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                        <div>
                            <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                        </div>
                        <div>
                            <InputButton>Speichern & nächste Frage</InputButton>
                        </div>
                    </footer>
                </div>
            </div>
        </main>

        <main class="mt-12">
            <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
                <div>
                    <h2 class="uppercase text-Mittelblau font-bold text-center"># Aufgabengebiete / Tätigkeiten</h2>
                    <div class="flex items-center gap-3 my-3">
                        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                            <path d="M29.7495 41.7792L29.7495 74H0L0 48.5625C0 34.7903 1.64419 24.8208 4.93256 18.6542C9.24856 10.4319 16.0822 4.21389 25.4335 0L32.2158 10.7917C26.5639 13.1556 22.4021 16.7014 19.7303 21.4292C17.0584 26.0542 15.5684 32.8375 15.2601 41.7792L29.7495 41.7792ZM77.5337 41.7792L77.5337 74L47.7842 74V48.5625C47.7842 34.7903 49.4284 24.8208 52.7168 18.6542C57.0328 10.4319 63.8664 4.21389 73.2177 0L80 10.7917C74.3481 13.1556 70.1863 16.7014 67.5145 21.4292C64.8426 26.0542 63.3526 32.8375 63.0443 41.7792H77.5337Z" fill="#F2F4F6"></path>
                        </svg>
                        <h2 class="text-3xl font-bold">
                            Wie zufrieden bist du mit meinem derzeitigen Aufgabengebiet und mit deinen Tätigkeiten?
                        </h2>
                    </div>
                    <section class="px-[100px]">
                        <div class="ml-0 mt-3 space-y-3">
                            <InputRadio 
                                label="Ich bin:" 
                                :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" />
                        </div>
                    </section>
                    <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                        <div>
                            <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                        </div>
                        <div>
                            <InputButton>Speichern & nächste Frage</InputButton>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
<!-- 2 -->

        <main class="mt-12">
            <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
                <div>
                    <h2 class="uppercase text-Mittelblau font-bold text-center"># Kompetenzentwicklung</h2>
                    <div class="flex items-center gap-3 my-3">
                        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                            <path d="M29.7495 41.7792L29.7495 74H0L0 48.5625C0 34.7903 1.64419 24.8208 4.93256 18.6542C9.24856 10.4319 16.0822 4.21389 25.4335 0L32.2158 10.7917C26.5639 13.1556 22.4021 16.7014 19.7303 21.4292C17.0584 26.0542 15.5684 32.8375 15.2601 41.7792L29.7495 41.7792ZM77.5337 41.7792L77.5337 74L47.7842 74V48.5625C47.7842 34.7903 49.4284 24.8208 52.7168 18.6542C57.0328 10.4319 63.8664 4.21389 73.2177 0L80 10.7917C74.3481 13.1556 70.1863 16.7014 67.5145 21.4292C64.8426 26.0542 63.3526 32.8375 63.0443 41.7792H77.5337Z" fill="#F2F4F6"></path>
                        </svg>
                        <h2 class="text-3xl font-bold">
                            Wie geht es dir bei der Umsetzung der besprochenen Kompetenzpunkte?
                        </h2>
                    </div>
                    <section class="px-[100px]">
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
                            <InputRadio 
                                label="Ich bin:" 
                                :options="['sehr zufrieden', 'zufrieden', 'weniger zufrieden', 'nicht zufrieden']" />
                        </div>
                        <div class="mt-3 space-y-3">
                            <InputTextarea label="Mein Feedback:" class="h-32 w-full"></InputTextarea>
                        </div>
                    </section>
                    <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                        <div>
                            <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                        </div>
                        <div>
                            <InputButton>Speichern & nächste Frage</InputButton>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
<!-- 3 -->
        <main class="mt-12">
            <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
                <div>
                    <h2 class="uppercase text-Mittelblau font-bold text-center"># Kompetenzentwicklung</h2>
                    <div class="flex items-center gap-3 my-3">
                        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                            <path d="M29.7495 41.7792L29.7495 74H0L0 48.5625C0 34.7903 1.64419 24.8208 4.93256 18.6542C9.24856 10.4319 16.0822 4.21389 25.4335 0L32.2158 10.7917C26.5639 13.1556 22.4021 16.7014 19.7303 21.4292C17.0584 26.0542 15.5684 32.8375 15.2601 41.7792L29.7495 41.7792ZM77.5337 41.7792L77.5337 74L47.7842 74V48.5625C47.7842 34.7903 49.4284 24.8208 52.7168 18.6542C57.0328 10.4319 63.8664 4.21389 73.2177 0L80 10.7917C74.3481 13.1556 70.1863 16.7014 67.5145 21.4292C64.8426 26.0542 63.3526 32.8375 63.0443 41.7792H77.5337Z" fill="#F2F4F6"></path>
                        </svg>
                        <h2 class="text-3xl font-bold">
                            Was hat sich seit dem letzten Entwicklungsgespräch verändert?
                        </h2>
                    </div>
                    <section class="px-[100px]">
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
                    </section>
                    <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                        <div>
                            <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                        </div>
                        <div>
                            <InputButton>Speichern & nächste Frage</InputButton>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    </div>

</template>