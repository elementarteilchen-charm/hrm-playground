<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-700">Persönlich</h3>
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="text-lg_ font-bold text-gray-700  mb-4">Name und Geburtsdatum</h3>
    <div class="grid grid-row-1 gap-4 border-r">
      <div class="grid lg:grid-cols-2 gap-4">
      
        <div class="mt-0 grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">          
          <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" width="w-48"/>
          <InputText label="Vorname" value="Stephanie"/>
          <InputText label="Nachname" value="Babunek"/>
          <InputSelect label="Titel nach dem Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
           <InputDate label="Geburtsdatum" value="2000-03-14"/>
        </div>
    
      <div class="grid grid-row-1 gap-4 pb-4">
        <StammdatenNativerNameModal />
      </div>
      </div>
    </div>
  </div>
</template>
