<script setup>

</script>

<template>
  <div class="grid lg:grid-cols-2 gap-4">
    
    <div class="grid grid-row-1 gap-4 border-r">
      <div class="mt-6 px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4 ">          
        <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" width="w-32"/>
        <InputText label="Vorname" value="Stephanie"/>
        <InputText label="Nachname" value="Babunek"/>
        <InputSelect label="Titel nach dem Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
      </div>
    </div>
  
    <div class="grid grid-row-1 gap-4 pb-4">
      <StammdatenNativerName />  
    </div>
  </div>
</template>
