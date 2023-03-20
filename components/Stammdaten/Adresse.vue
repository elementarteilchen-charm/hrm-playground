<script setup>

</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-700 mt-8 mb-2">
    Meldeadresse</h3>
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
            <InputText label="Straße" value="Hauptstraße 23/5/4" />
            <InputText label="PLZ" value="3210" width="w-16"/>
            <InputText label="Ort" value="Krems" />
            <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
        </div>
      </div>
  </div>

  <div>
    <h3 class="text-lg font-bold text-gray-700 mb-2">
    Heimatadresse</h3>
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
            <InputText label="Straße" value="Hauptstraße 23/5/4" />
            <InputText label="PLZ" value="3210" width="w-16"/>
            <InputText label="Ort" value="Krems" />
            <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
        </div>
      </div>
  </div>
</template>
