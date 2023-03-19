<script setup>

</script>

<template>
  <div class="grid grid-row-1 bg-gray-50 py-4 mt-6">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4">
          <InputText label="Geburtsort" value="Krems an der Donau" />
          <InputSelect label="Geburtsland" :options="['AT','DE', 'PL']" width="w-32"/>
      </div>
    
      <div class="px-2 grid grid-cols-[minmax(10rem,auto)_1fr] gap-4">
        <InputSelect label="Staatsangehörigkeit" :options="['AT','DE', 'PL']" />
        <InputSelect label="Staatsangehörigkeit 2" :options="['-','DE', 'PL']" width="w-32"/>  
      </div>
    </div>
  </div>
</template>
