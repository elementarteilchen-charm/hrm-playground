<script setup>
    import { BellIcon, CheckCircleIcon, XCircleIcon, PlusCircleIcon, } from '@heroicons/vue/24/solid'

    const erinnerungenListe = [
        ]
    let erinnerungsdatum = new Date()
    const datum = ref('')
    const ma = mitarbeiterListe[0]
</script>

<template>
    <div class="flex z-20 ">
        <details class="">
            <summary class=" block flex items-center gap-x-2">
                <BellIcon class="w-5 h-5" />
            </summary>
            <div class="bg-white border p-2 shadow-lg">
                <ul class="text-gray-900 text-sm">
                    <li>
                            <div class="px-4">
                                <div class="font-bold">
                                    Neue Erinnerung für {{ma.vorname}} {{ma.name}}
                                </div>
                                <div>
                                    <textarea class="w-full border rounded shadow-inner">Aufenthaltsbewilligung</textarea>
                                </div>
                                <div class="" 
                                    style="
                                        display: grid; 
                                        grid-template-columns: 14ch repeat(3, 6ch) auto; 
                                        column-gap: 0.5rem;"
                                >
                                    <input type="date"  v-model="datum" class="border rounded" style="font-size:;">
                                    <button @click.prevent="datum + 1" class="bg-Hellgrau border rounded px-2">+1W</button>
                                    <button class="bg-Hellgrau border rounded px-2">+2W</button>
                                    <button class="bg-Hellgrau border rounded px-2">+4W</button>
                                    <InputButton>Erstellen</InputButton>
                                </div>
                                
                            </div>
                    </li>
                </ul>
            </div>
        </details>
    </div>

    <!-- <div class="nav">
        <div class="nav-item dropdown d-flex">
            <button 
            	class="nav-link text-light d-flex align-items-center dropdown-toggle" 
            	data-bs-toggle="dropdown" href="#" role="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                </svg>
            </button>

            <ul class="dropdown-menu" style="min-width: 25vw;">
            	<li class="">
                    <div class="px-4 small">
                		<div class="font-bold">
                			Neue Erinnerung für {{ma.vorname}} {{ma.name}}
                		</div>
                        <div>
                            <textarea class="small w-full border rounded shadow-inner">Aufenthaltsbewilligung</textarea>
                        </div>
                        <div class="" 
                            style="
                                display: grid; 
                                grid-template-columns: 14ch repeat(3, 6ch) auto; 
                                column-gap: 0.5rem;"
                        >
                            <input type="date"  v-model="datum" class="border rounded" style="font-size: small;">
                            <button @click.prevent="datum + 1" class="bg-Hellgrau small border rounded px-2">+1W</button>
                            <button class="bg-Hellgrau small border rounded px-2">+2W</button>
                            <button class="bg-Hellgrau small border rounded px-2">+4W</button>
                            <InputButton>Erstellen</InputButton>
                        </div>
                        
                    </div>
            	</li>
            	<li>
            		<hr class="dropdown-divider">
            	</li>

                <li v-for="item in benachrichtigungen" class="dropdown-item" style="font-size: smaller;">

                	<div style="display: grid; grid-template-columns: 2rem 30ch 20ch 10ch;">
                		
                		<div class="px-2 d-flex justify-center align-self-center">
                			
                			<div v-if="item.erledigt" class="text-Gruen">
                				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                				  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                				  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                				</svg>
                			</div>

                			<div v-if="!item.erledigt" class="text-Hellgrau">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
								  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
								</svg>
                			</div>
                		</div>

                		<div class="align-self-center d-inline-block text-truncate" :class="{'text-muted': item.erledigt}">
                			{{item.nachricht}}
                		</div>
                		<div class="align-self-center" :class="{'text-muted': item.erledigt}">
	                		<a class="dropdown-item d-inline-block text-truncate" href="#">
	                			{{item.name}}
	                		</a>
                		</div>
                		<div class="align-self-center" :class="{'text-muted': item.erledigt}">
                			<span>{{item.faelligDatum}}</span>
                		</div>
                	</div>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Alle Erinnerungen anzeigen</a></li>
            </ul>
        </div>
    </div> -->
</template>