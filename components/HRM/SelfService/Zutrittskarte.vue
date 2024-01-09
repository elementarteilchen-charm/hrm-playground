<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const title = "Zutrittskarte";
    
</script>

<template>
    <MeineDatenBox :title="title" buttonText="Neue Karte beantragen">
        <div class="flex gap-2">
            <CreditCardIcon class="w-5 h-5 " @click="showDialog(title)"/>
            <span>Kartennummer: 12314576646843</span>
        </div>
    </MeineDatenBox>

</template>
