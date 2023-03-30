<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Bankverbindung</h3>
  
  <LayoutFormSection title="Bankdaten">
      <div class="grid_ lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputDate label="Gültig von" />
          <InputDate label="Gültig bis" />
          <InputText label="Bankname" value="Erste Österreichische Sparkasse" width="w-64"/>
          <InputText label="IBAN"  value="AT88 1234 2222 3333 4212" width="w-64"/>
          <InputText label="BIC"  value="GIBXX WWWW 30495"  width="w-64"/>
          <InputText label="Kontoinhaber"  value="Stephanie Babunek" width="w-64"/>
        </div>
      </div>
  </LayoutFormSection>

</template>
