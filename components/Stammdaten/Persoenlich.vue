<script setup>

</script>

<template>
  <div>
    <h3 class="text-lg font-bold  mt-8 mb-4">Name und Geburtsdatum</h3>
    <div class="grid grid-row-1 gap-8 border-r">
      <div class="grid lg:grid-cols-2">
      
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">          
          <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" width="w-32"/>
          <InputText label="Vorname" value="Stephanie"/>
          <InputText label="Nachname" value="Babunek"/>
          <InputSelect label="Titel nach dem Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
        </div>
    
      <div class="grid grid-row-1 gap-4 pb-4">
        <StammdatenNativerName />  
      </div>
      </div>
    </div>
  </div>
</template>
