<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 

</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Foto und Geburtsdatum Einstellungen</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
  </div>

    <LayoutFormSection title="">
      <div class="grid lg:grid-cols-1 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
           <InputCheckbox 
                    name="Gravid" 
                    label="Gravid" 
                    />  
           <InputCheckbox 
                    name="Foto" 
                    label="Foto veröffentlichen" 
                    :checked="true" 
                    />  
          <InputCheckbox 
                    name="Geburtsdatum" 
                    label="Geburtsdatum veröffentlichen" 
                    :checked="true" 
                     />            
        </div>
      </div>

  </LayoutFormSection>

</template>