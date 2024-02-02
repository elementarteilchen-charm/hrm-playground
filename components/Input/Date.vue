<script setup>
    
    import {CalendarDaysIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

    const props = defineProps({
        label: {type: String}, 
        value: {type: String, default: ''}, 
        maxChars: {type: Number, default: 30},
        width: {type: String, default: 'w-32'},
        required: {type: Boolean, default: false},
        reminder: {type: Boolean, default: false},
        reminderIsSet: {type: String, default: ''}  // nur für den ClickDummy
    })

    const dialog = "Erinnerung"
    
    let d = new Date()
    let daysInFuture = ref(7)
    d.setDate(d.getDate() + daysInFuture.value);
    let m = d.getMonth()+1 
    let days = d.getDate()
    let reminderDate = `${d.getFullYear()}-${m <= 9 ? '0' + m : m}-${days <= 9 ? '0' + days : days}`
    let erledigen = props.reminderIsSet

</script>

<template>
    <div class="self-center text-sm font-bold text-gray-700 flex-shrink-0">
        {{label}}<span v-if="required">*</span>
    </div>
    <div class="flex items-center gap-x-2">
        <input 
            class="px-2 py-1 border border-gray-300 rounded shadow-inner" 
            :class="width" 
            type="date"
            :value="value" />
        
        <button v-if="reminder" @click="showDialog(dialog)" 
                class="border border-Blaugrau-25 rounded-full bg-Blaugrau-25 p-2 text-Mittelblau 
                    hover:text-white hover:bg-Mittelblau
                ">
            <CalendarDaysIcon class="w-5 h-5 flex-shrink-0"/>
        </button>

        <div v-if="reminderIsSet" class="flex gap-x-2 items-center">
            <button @click="showDialog(dialog)" 
                class="border border-Blaugrau rounded-full bg-Blaugrau p-2 text-Blaugrau-10 
                    hover:text-white hover:bg-Mittelblau ">
                <CalendarDaysIcon class="w-5 h-5 flex-shrink-0"/>
            </button>
            <div>{{reminderIsSet}}</div>
        </div>

    </div>

    <LKWWDialog :id="dialog" height="40vh">
        <template #header>
            <h1 class="font-bold text-xl text-Mittelblau">Erinnerung für {{label}}</h1>    
        </template>

        <div class="">
            <label class="text-sm font-bold text-gray-700 flex-shrink-0" for="inhalt">Text</label>
            <textarea name="inhalt" id="inhalt" class="w-full px-2 py-1 border border-gray-300 rounded text-sm shadow-inner" rows="4">Schwangerschaftsbestätigung von Fr. Regina Aberl anfordern.</textarea>
        </div>
        
        <div class="self-center text-sm font-bold text-gray-700 flex-shrink-0">
            Erinnern an
        </div>
        <div class="">
            <input 
                id="reminder"
                class="px-2 py-1 border border-gray-300 rounded shadow-inner" 
                type="date"
                v-model="reminderDate"/>
        </div>
        <div class="mt-3">
            <InputRadio :options="['Zum gewählten Datum', 'In 2 Wochen', 'In 4 Wochen', 'In 3 Monaten', 'In 6 Monaten']" label="Erinnern" />
        </div>

        <div class="hidden">
            <InputButton>
                Erledigt
            </InputButton>

        </div>
    </LKWWDialog>
</template>