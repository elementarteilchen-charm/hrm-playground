<script setup>

</script>

<template>
  <h3 class="text-lg font-bold text-gray-700">Persönlich</h3>
  
  <LayoutFormSection title="Name und Geburtsdatum">
    
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
          <InputRadio label="Geschlecht" :options="['Weiblich','Männlich', 'Divers']" name="gender" width="w-48"/>
          <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" width="w-48"/>
          <InputText label="Vorname" value="Stephanie"/>
          <InputText label="Nachname" value="Babunek"/>
          <InputSelect label="Titel&nbsp;nach&nbsp;dem&nbsp;Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
          
          <InputDate label="Geburtsdatum" value="2000-03-14"/>
          <InputText label="SozialversicherungsNr" value="1450" width="w-32"/>
          
        </div>
        <div class="">
           <StammdatenNativerNameModal />
        </div>
    </div>
  
  </LayoutFormSection>


</template>
