<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Kontaktdaten und Adressen</h3>

  <LayoutFormSection title="Kontaktdaten">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] items-baseline gap-2">  
          <InputText label="Mobilnummer:" value="+43 664 355 8894" width="w-64"/>
          <InputText label="Telefon:" value="" width="w-64"/>
          <InputText label="E-Mail:" value="steph89@gmail.com" width="w-64"/>
        </div>

    </div>
  </LayoutFormSection>

  <LayoutFormSection title="Wohnadresse">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] items-baseline gap-2">  
          <InputText label="Straße" value="Hauptstraße 23/5/4" />
          <InputText label="PLZ" value="3210" width="w-16"/>
          <InputCheckbox  label="Hauptwohnsitz" checkboxLabel=""/>
        </div>
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Ort" value="Krems" />
          <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32"/>

          <!-- damit die beiden cols gleich hoch sind -->
          <div>&nbsp;</div> 
        </div>
      </div>
  </LayoutFormSection>

  <LayoutFormSection title="Heimatadresse">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] items-baseline gap-2">  
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
