<script setup>
let value = "";
const options = ['a', 'b', 'c'];
</script>
<template>

    <LayoutFormSection title="Staatsangehörigkeit und Geburtsort">
        <div class="grid lg:grid-cols-2 gap-4">
           <!--  <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                <InputText label="Geburtsort" value="Krems an der Donau" />
                <InputSelect label="Geburtsland" :options="['AT','DE', 'PL']" width="w-32" />
            </div> -->
            <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                <InputSelect label="Staatsangehörigkeit" :options="['AT','DE', 'PL']" width="w-4/5"/>
                <InputSelect label="Staatsangehörigkeit&nbsp;2" :options="['-','DE', 'PL']" width="w-4/5" />
            </div>
        </div>
        <div class="grid_ lg:grid-cols-2 gap-4  mt-4">
            <div class="grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                <InputTextarea label="Bemerkung"  placeholder="Hier wird bei Änderung der Staatsangehörigkeit eine Bemerkung erfasst."/>
            </div>
        </div>
    </LayoutFormSection>
</template>