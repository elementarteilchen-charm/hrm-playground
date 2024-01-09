<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import {  EnvelopeIcon, PhoneIcon, HomeIcon, InformationCircleIcon, QuestionMarkCircleIcon} from '@heroicons/vue/24/outline' ;
    
    const title = "Email und Telefon";
    const inBearbeitung = ref(false);
</script>

<template>
    <MeineDatenBox :title="title" buttonText="Bearbeiten" >
        <div class="grid grid-cols-[1fr_auto] gap-4">
            <div class="flex gap-2">
                <ul>
                    <li class="flex gap-2 pt-3">
                        <EnvelopeIcon class="w-5 h-5 " /> 
                        <span>jan.ehrenreich@gmx.at</span>
                    </li>
                    <li class="flex gap-2 pt-3">
                        <PhoneIcon class="w-5 h-5 " /> 
                        <span>+4366488458016</span>
                    </li>
                </ul>
            </div>

        </div>
    </MeineDatenBox>

    <LKWWDialog :title="title" >
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Email:" value="jan.ehrenreich@gmx.at" width="w-4/5"/>
          <InputText label="Telefon:" value="+4366488458016" width="w-4/5"/>
        </div>
    </LKWWDialog>

</template>

<style>
</style>