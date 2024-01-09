<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import {  CreditCardIcon, EnvelopeIcon, PhoneIcon, HomeIcon, InformationCircleIcon, QuestionMarkCircleIcon} from '@heroicons/vue/24/outline' ;
    
    const title = "Sozialversicherungsnummer";
</script>

<template>

    <MeineDatenBox :title="title" buttonText="Bearbeiten" >
        <div class="grid grid-cols-[1fr_auto] gap-4">
            <div class="flex gap-2">
                <ul>
                    <li class="flex gap-2 pt-3">
                        <CreditCardIcon class="w-5 h-5 " /> 
                        <span>4567 100586</span>
                    </li>
                </ul>
            </div>
        </div>
    </MeineDatenBox>

</template>