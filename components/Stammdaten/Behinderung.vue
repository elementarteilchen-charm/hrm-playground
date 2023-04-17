<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Behinderung</h3>
  
  <LayoutFormSection title="Behinderung">
      <div class="grid lg:grid-cols-1 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputNumber label="Grad der Behinderung in %" value="" width="w-16"/>
          <InputText label="Behinderten Nummer" value="" width="w-64"/>
          <InputDate label="Seit" />
          <InputDate label="Befristet bis" />
          <InputTextarea label="Anmerkung">
            Nach einem Unfall kam es leider zu einer 25% Gehbehinderung.
          </InputTextarea>
          
        </div>
      </div>
  </LayoutFormSection>

</template>
