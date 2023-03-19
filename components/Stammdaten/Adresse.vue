<script setup>

</script>

<template>
  <div class="grid grid-row-1 py-4 mt-6">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4">
          <InputText label="Straße" value="Hauptstraße 23/5/4" />
          <InputText label="PLZ" value="3210" width="w-16"/>
          <InputText label="Ort" value="Krems" />
          <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
      </div>
    </div>
  </div>
</template>
