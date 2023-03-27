<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Adressen</h3>
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="font-bold text-gray-700 mb-2">Meldeadresse</h3>
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
            <InputText label="Straße" value="Hauptstraße 23/5/4" />
            <InputText label="PLZ" value="3210" width="w-16"/>
            <InputText label="Ort" value="Krems" />
            <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
        </div>
      </div>
  </div>

  <LayoutFormSection title="Heimatadresse">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">  
          <InputText label="Straße" value="Hauptstraße 23/5/4" />
          <InputText label="PLZ" value="3210" width="w-16"/>
        </div>
          
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">    
          <InputText label="Ort" value="Krems" />
          <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
      </div>
    </div>
  </LayoutFormSection>

  
</template>
