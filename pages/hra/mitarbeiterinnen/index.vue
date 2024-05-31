<script setup>
import { CheckCircleIcon, XCircleIcon, PlusCircleIcon }
    from '@heroicons/vue/24/outline'

const ma = mitarbeiterListe[0]

</script>

<template>
    <header class="px-8 py-1 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten </a>
        </div>
        <HRAMitarbeiterInfoBox headline="Persönliche Daten" class="mb-2"/>
    </header>
    <div class="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6 px-8">
      <HRAPersonStammdatenAuflistung />
      <HRAVertragAuflistung />
      <HRAAbwesenheitAuflistung />
      <HRAEventsAuflistung />
    </div>

</template>