<script setup>
  const fehlendeDokumente = ['Meldezettel', 'Ausbildung Abschlusszeugnis']
  const anfragenListe = [
    {
      kategorie: 'Sprachkenntnisse hinzugefügt',
      mitarbeiter: 'Gravallo Simone (LKW)',
      datum: '14.06.2023',
      zeit: '12:23 Uhr',
      status: 'Offen',
      bearbeiter: 'Daum Martina (SSG)',
      payload: {
        sprache: 'Spanisch',
        level: 'C1',
        dokument: 'Zertifikat Gravallo Simone Spanisch C1.pdf'
      }
    },
    {
      kategorie: 'Bankverbindung - IBAN/BIC',
      mitarbeiter: 'Walisch Anna-Maria (SSG)',
      datum: '12:00 Uhr, 14.06.2023',
      status: 'In Bearbeitung',
      bearbeiter: 'Daum Martina (SSG)',
      payload: {
        sprache: 'Spanisch',
        level: 'C1',
        dokument: 'IMG_3245.jpg'
      }
    },
    {
      kategorie: 'Dienstzeugnisse',
      mitarbeiter: 'Akbulut Diren',
      datum: '12:00 Uhr, 14.06.2023',
      status: 'Offen',
      bearbeiter: 'Schmid Melanie (SSG)',
      payload: {
        sprache: 'Spanisch',
        level: 'C1',
        dokument: 'Zertifikat Gravallo Simone Spanisch C1.pdf'
      }
    },
    {
      kategorie: 'Jahreslohnzettel L16 anfordern',
      mitarbeiter: 'Albrecht Edwin (TM)',
      datum: '12:00 Uhr, 14.06.2023',
      status: 'Erledigt',
      bearbeiter: 'Daum Martina (SSG)',

    },
  ]

  const aktuelleAnfrage = ref({})
  const aktiveId = ref(0)
</script>
<template>
  <div class="grid grid-rows-[6rem_1fr] gap-8 mb-12">
    
    <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
      <h1 class="text-3xl font-light text-Blaugrau">Meine Daten</h1>
    </div>
    
    <div class="px-6">
      <div>
        Filterbereich
      </div>      

      <div class="mt-8 grid grid-cols-[2fr_3fr] gap-8">
        <div class="space-y-3">

          <HRMSelfServiceAnfrage v-for="anfrage,index in anfragenListe" :class="{'border-Hellblau shadow-xl': aktiveId === index}"
              @anfrage-Bearbeiten="(n) => [aktuelleAnfrage.value, aktiveId] = [anfragenListe[n], n]"
              :id="index"
              :kategorie="anfrage.kategorie" 
              :mitarbeiter="anfrage.mitarbeiter" 
              :datum="anfrage.datum" 
              :status="anfrage.status"
              :bearbeiter="anfrage.bearbeiter"/>
        </div>
        <div>
          <div v-if="aktuelleAnfrage.value">
            <HRMSelfServiceAnfrageBearbeiten :anfrage="aktuelleAnfrage" />
          </div>
  
        </div>

      </div>
    </div>
  </div>
  
  
</template>
