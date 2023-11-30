<script setup>
  import {  HomeIcon, ClockIcon, CalendarIcon, EnvelopeIcon, UserIcon, CreditCardIcon,PhoneIcon} from '@heroicons/vue/24/outline' ;
  import { ArrowLeftIcon } from '@heroicons/vue/24/solid' ;

  const props = defineProps({
        vorname: {type: String}, 
        nachname: {type: String}, 
        anrede: {type: String}
      });

  const person = mitarbeiterListe[0]

</script>

<template>
  <div class="mx-16 bg-white  border rounded">
  
    <div class="mt-4 py-1 flex items-center justify-between">

      <div class="px-2 flex items-center gap-x-2">
        <ArrowLeftIcon class="w-5 h-5"/>
        <a href="" class="text-xl font-bold hover:underline ">
           {{person.anrede}} {{person.name}} {{person.vorname}}</a>
      </div>

      <div class="pr-4 text-sm font-bold ">
        <span class="text-Mittelgrau">Eintritt am: </span>
        <span class="text-Dunkelgrau">{{person.eintrittstag}}</span>
      </div>
    
    </div>
    
    <div class="mt-2 flex gap-4 xxl:w-3/4 pb-4">
    
     <div :style="'background-image: url(/img/'+ person.avatar + ');'" 
          class="w-32 bg-cover bg-center"></div>
      <div class="w-1/4 xl:w-48 ">
        <div class="pl-9 text-sm text-Dunkelgrau space-y-1">
            <div v-for="sprache in person.sprachkenntnisse " :class="{'font-bold': sprache.muttersprache }">
              {{sprache.sprache}} ({{sprache.niveau}})
            </div>
        </div>
      </div>
      
      <div class="w-1/4 xl:w-48 space-y-1">      
        <div class="text-sm flex items-center gap-2 text-Dunkelgrau font-bold">
          <UserIcon class="w-5 h-5"/> {{person.pnr}}
        </div>
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <HomeIcon class="w-5 h-5"/> {{person.mandant}} &middot; {{person.standort}}
        </div>
      </div>
      <div class="w-1/4 xl:w-64 space-y-1">      
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <EnvelopeIcon class="w-5 h-5"/> {{person.email_privat}}
        </div>
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <PhoneIcon class="w-5 h-5"/> {{person.mobil}}
        </div>
      </div>
      
      <div class="w-1/4 xxl:w-64 space-y-1">
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <ClockIcon class="w-5 h-5"/> {{person.alter}} Jahre
        </div>
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <CalendarIcon class="w-5 h-5"/>  {{person.geburtsdatum}}
        </div>
        <div class="text-sm flex items-center gap-2 text-Mittelgrau">
          <CreditCardIcon class="w-5 h-5"/>  {{person.kontonummer}}
        </div>
      </div>
    </div>
  </div>  
    
</template>