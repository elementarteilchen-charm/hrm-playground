<script setup>
    import { DocumentTextIcon, ChevronDownIcon, ChevronUpIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline' 

  const title = "Vertragsdatensatz"
  const vertragsDatei = "Vertrag"

  function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }

  const vds = vertragsdatensaetze[0]
  const vertrag = vertragsdatensaetze[1]
  const austritt = ref(true)

  const zeigeVertragsdokument = ref(false)

</script>
<template>
<!--       <div class="mt-3 flex gap-4 text-sm flex justify-end">
          <InputButton>
              <div class="flex gap-x-2 items-center">
                  <PlusCircleIcon class="w-5 h-5" />Neuen Vertrag erstellen
              </div>
          </InputButton>
      </div> -->


    <LKWWDialog :title="title" height="70vh" width="75vw">
        <div class="grid lg:grid-cols-1 gap-4_">
            <div class="grid grid-rows-1 gap-y-4">
                <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">
                    <InputCheckbox label="Neueintritt" />
                    <InputSelect label="PersonalNr" :options="[13496, 15673]" :selected="vds.personalnr" width="w-1/2" />
                    <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX']" width="w-1/2" />
                    <InputSelect label="Standort" :options="['WND', 'KUF']" width="w-1/2" />
                    <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']" width="w-1/2" />
                    <InputDate label="Eintrittstag" :value="vds.dienstantritt" width="w-36" />
                    <InputDate label="DV-Beginn" :value="vds.dvbeginn" width="w-36" />
                    <InputDate label="DV-Ende" :value="vds.dvende" width="w-36" />
                    <InputDate label="Jubiläumsdatum" :value="vds.dienstantritt" width="w-36" />
                    <InputCheckbox label="Grenzgänger" />
                </div>
            </div>
        </div>
        <section v-if="austritt" class="mt-6 font-light text-xl text-Blaugrau">
            Austritt
        </section>
        <div class="mt-3 grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">
            <InputDate label="Letzter Arbeitstag" :value="vds.letzterArbeitstag" width="w-36" />
            <InputDate label="Techn. Austrittsdatum" width="w-36" />
            <InputSelect label="Art der Kündigung" :options="['DN Kündigung', 'DG Kündigung', 'Einvernehmliche']" width="w-1/2" />
            <InputSelect label="Grund der Kündigung" :options="['DG1', 'DG2', 'DG3']" width="w-1/2" />
            <InputTextarea label="Bemerkung" />
        </div>
    </LKWWDialog>
</template>