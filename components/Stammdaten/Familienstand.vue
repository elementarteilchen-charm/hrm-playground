<script setup>

</script>

<template>
  <LayoutFormSection title="Familienstand">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">  
           <InputSelect label="Familienstand" :options="['ledig','verheiratet', '-']" width="w-32"/>
            <InputDate label="Seit" />
            <InputDate label="Bis" />
        </div>
          
    </div>
  </LayoutFormSection>

 
</template>
