<script setup>
    import { CheckCircleIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div>
        <h3 class="text-lg font-bold text-gray-900 ">Adressen und Kontakt</h3>
        <p class="text-gray-400 text-sm flex items-center gap-2">
            <CheckCircleIcon class="w-4 h-4 text-green-500" />
            <span>Diese Daten können direkt geschrieben werden.</span>
        </p>
    </div>

    <div class="space-y-8">
        <LayoutFormSection title="Kontaktdaten">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-2">
                    <InputText label="Mobilnummer:" value="+43 664 355 8894" width="w-64" />
                    <InputText label="Telefon:" value="" width="w-64" />
                    <InputText label="E-Mail:" value="steph89@gmail.com" width="w-64" />
                </div>
            </div>
        </LayoutFormSection>
        <LayoutFormSection title="Wohnadresse">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] items-baseline gap-2">
                    <InputText label="Straße" value="Hauptstraße 23/5/4" />
                    <InputText label="PLZ" value="3210" width="w-16" />
                    <InputText label="Ort" value="Krems" />
                </div>
                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                    <InputDate label="Gültig ab" value="2024-01-01" />
                    <InputText label="Region" value="Burgenland"  />
                    <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32" />
                    <!-- damit die beiden cols gleich hoch sind -->
                    <!-- <div>&nbsp;</div> -->
                </div>
                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                    <InputCheckbox label="Hauptwohnsitz" checkboxLabel="" />
                    <InputCheckbox label="Home Office" checkboxLabel="" />
                </div>
            </div>
            <!-- <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Aberl Meldezettel.jpg" kategorie="Meldezettel" /> -->
        </LayoutFormSection>
        <LayoutFormSection title="Heimatadresse">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] items-baseline gap-2">
                    <InputText label="Straße" value="Hauptstraße 23/5/4" />
                    <InputText label="PLZ" value="3210" width="w-16" />
                    <InputCheckbox label="Hauptwohnsitz" checkboxLabel="" />
                    <InputCheckbox label="Home Office" checkboxLabel="" />
                </div>
                <div class=" grid grid-cols-[minmax(6rem,auto)_1fr] gap-2">
                    <InputText label="Ort" value="Krems" />
                    <InputSelect label="Land" :options="['AT','DE', 'PL']" width="w-32" />
                </div>
            </div>
            <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Aberl Meldezettel.jpg" kategorie="Meldezettel" />
        </LayoutFormSection>
    </div>
</template>