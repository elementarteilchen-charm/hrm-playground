<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'
    
    const title = "Zutrittskarte";
    const inBearbeitung = ref(false);
</script>

<template>
    <MeineDatenBox :title="title" buttonText="Neue Karte beantragen">
        <div class="flex gap-2">
            <CreditCardIcon class="w-5 h-5 " @click="showDialog(title)"/>
            <span>Kartennummer: 12314576646843</span>
        </div>
    </MeineDatenBox>
    
    <LKWWDialog :title="title" >
        
        <InputTextarea label="Bitte geben Sie einen Grund an, warum Sie eine neue Zutrittskarte benötigen:" 
            class="h-16 w-4/5"/>
    </LKWWDialog>

</template>
