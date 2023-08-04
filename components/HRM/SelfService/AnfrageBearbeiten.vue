<script setup>
	import { PencilIcon, XMarkIcon, PaperClipIcon, CheckIcon } from '@heroicons/vue/24/outline' 
    const props = defineProps({
        anfrage: {type: Object, default: null}
    })
	const datenEditieren = ref(false)    
	const bearbeiterZuweisen = ref(false)    
    defineEmits(['anfrageUpdate'])
    
</script>
<template>
	<div class="grid grid-rows-[auto_1fr_auto] gap-6 bg-white border rounded px-3 py-3 ">
		<header>
			<div class="px-2 flex gap-4 items-baseline justify-between">
				<div class="text-xl text-Mittelblau">{{anfrage.value.kategorie}}</div>
				<div class="mt-2 text-sm text-gray-400">{{anfrage.value.datum}}</div>
			</div>
			<div class="px-2 flex gap-4 items-baseline justify-between">
				<div class="text-sm text-gray-400">{{anfrage.value.mitarbeiter}}</div>
				<div class="text-right text-sm text-gray-400">{{anfrage.value.zeit}}</div>
			</div>
			<div class="px-2 flex justify-end my-2">
				<a v-show="bearbeiterZuweisen" @click="bearbeiterZuweisen = false" href="#" class="border border-transparent text-Mittelblau px-2 py-1 hover:bg-gray-50 hover:border hover:border-Hellgrau">Bearbeiter*in zuweisen</a>
				<div v-show="!bearbeiterZuweisen">
					<InputText label="" value="Polzhofer Anna (SSG)" width="w-36"/>	
				</div>
				<div v-show="!bearbeiterZuweisen" class="flex gap-2">
					<a  @click="bearbeiterZuweisen = true" href="#" class="border border-transparent text-Mittelblau px-2 py-1 hover:bg-gray-50 hover:border hover:border-Hellgrau">
						<XMarkIcon class="w-5 h-5" />
					</a>
					<a  @click="bearbeiterZuweisen = true" href="#" class="border border-transparent text-Mittelblau px-2 py-1 hover:bg-gray-50 hover:border hover:border-Hellgrau">
						<CheckIcon class="w-5 h-5" />
					</a>
					
				</div>
			</div>
		</header>
		
		<main class="space-y-6">
			<div class="px-2">
				<div class="font-bold">
					Text der Nachricht:
				</div>
				<div class="mt-1">
					<p>
						Habe meinen Spanisch Kurs abgeschlossen.
						lg
					</p>
				</div>
			</div>

			<div class="p-2" v-if="Object.hasOwn(anfrage.value, 'payload')">
				<div class="font-bold flex justify-between items-center" >
					<div>Daten:</div>

				</div>
				<div class="border-l-4 pl-2 mt-1 flex items-center gap-2 _text-sm text-Mittelblau">
					Sprache: {{anfrage.value.payload.sprache}} <br>
					Level: {{anfrage.value.payload.level}}
				</div>
				

				<div v-show="datenEditieren" class="bg-Blaugrau-10 p-3 mt-3">
					<div class="grid grid-cols-[auto_1fr] gap-4">
						<InputText label="Sprache:" :value="anfrage.value.payload.sprache" />
						<InputText label="Niveau:" :value="anfrage.value.payload.level" />
					</div>
					<div class="mt-3 text-sm flex justify-end gap-4 items-center">
						<a href="#" @click="datenEditieren = false">Abbrechen</a>
						<button @click="datenEditieren = false" class="text-sm bg-Mittelblau text-white p-2">
							Speichern
						</button>
					</div>
				</div>
					<div v-show="!datenEditieren" class="flex justify-end gap-4">
						<button @click="datenEditieren = true" class="text-sm bg-Blaugrau-25 hover:bg-Blaugrau p-2">
							Bearbeiten
						</button>
					</div>
			</div>
			
			<div class="px-2" v-if="Object.hasOwn(anfrage.value, 'payload')">
				<div class="font-bold">
					Anhang:
				</div>
				<div  class="mt-1 flex items-center gap-2 text-sm text-Mittelblau">
					<PaperClipIcon class="w-4 h-4"/>
					<a href="#" class="hover:underline">{{anfrage.value.payload.dokument}}</a>
				</div>
			</div>
			<div class="px-2">
				<div class="font-bold">
					Kommentare:
				</div>
				<div class="mt-1 border-l-4 border-Hellblau px-2">
					Kommentare mit einem Text und Attachment
				</div>
			</div>
		</main>
		<footer class="py-3 text-sm flex items-baseline justify-between">
			<div>
				<a class="border border-transparent text-Mittelblau px-2 py-1 hover:bg-gray-50 hover:border hover:border-Hellgrau" href="">Anfrage ablehnen</a>
			</div>
			<div>
				<InputButton>Anfrage als erledigt markieren</InputButton>
			</div>
		</footer>

	</div>

</template>