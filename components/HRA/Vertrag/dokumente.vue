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
    <LayoutFormSection title="Dokumente im Ordner '03 Verträge'">
        <h3 class="text-lg font-bold text-gray-900 "></h3>
        <div class="px-4">
          <div class="grid grid-flow-col auto-cols-max gap-3 mb-2">
            Ordner
            Datum
            Datei
          </div>
          <div v-for="datei, idx in dokumenteZumVertrag['03']">
            <div class="grid grid-flow-col auto-cols-max gap-3 mb-2">     
              <div class="font-bold">{{datei.ordner}}</div> 
              <div class="tabular-nums"> {{datei.datum}}</div>
              <div>{{datei.name}}</div>
            </div>

          </div>
        </div>
    </LayoutFormSection>
    
    <LKWWDialog :title="vertragsDatei" height="85vh" width="80vw">
        <!-- <embed style="width: 640px; aspect-ratio: 3 / 4;" src="/data/TEST-Dienstvertrag.pdf" type="application/pdf"> -->
         
          
    </LKWWDialog>

</template>