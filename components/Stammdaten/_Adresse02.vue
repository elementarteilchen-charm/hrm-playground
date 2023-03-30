<script setup>

</script>

<template>
  <div>
      <h3 class="text-xl font-bold  mb-6">Adressen</h3>
  
  <div class="grid grid-cols-2">
    <div>
      <h3 class="font-bold mb-4">Meldeadresse</h3>
      <div class="px-2_ grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
          <InputText label="Straße" value="Hauptstraße 23/5/4" />
          <InputText label="PLZ" value="3210" width="w-16"/>
          <InputText label="Ort" value="Krems" />
          <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
      </div>        
    </div>

    <div class="border-l-4 border-white pl-4 ">
      <h3 class="font-bold mb-4">Heimatadresse</h3>
        <div class="px-2_ grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
            <InputText label="Straße" value="Hauptstraße 23/5/4" />
            <InputText label="PLZ" value="3210" width="w-16"/>
            <InputText label="Ort" value="Krems" />
            <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
        </div>
    </div>
  </div>
</div>
</template>
