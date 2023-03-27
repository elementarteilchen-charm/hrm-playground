<script setup>

  let value = "";
  const options = ['a', 'b', 'c'];
</script>

<template>
  
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="font-bold mb-2">
      Staatsangehörigkeit und Geburtsort</h3>
    <div class="grid grid-row-1 py-4">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(10rem,auto)_1fr] gap-4">
            <InputText label="Geburtsort" value="Krems an der Donau" />
            <InputSelect label="Geburtsland" :options="['AT','DE', 'PL']" width="w-32"/>
            <InputSelect label="Staatsangehörigkeit" :options="['AT','DE', 'PL']" />
            <InputSelect label="Staatsangehörigkeit 2" :options="['-','DE', 'PL']" width="w-32"/>  

        </div>
      </div>
    </div>
  </div>
</template>
