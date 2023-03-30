<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Kontaktdaten</h3>
  
  <LayoutFormSection title="Durchwahl, Email, UserID">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Durchwahl" value="7205" width="w-4/5"/>
          <InputText label="Email Büro" value="walisch@walter-group.com" width="w-4/5"/>
        </div>
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Mitarbeiter*in Kurzzeichen" value="wa" readonly/>
          <InputText label="UserId" value="walisch" readonly/>
        </div>
      </div>
  </LayoutFormSection>

  <LayoutFormSection title="Heimatadresse">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
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
