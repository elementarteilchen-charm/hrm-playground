<script setup>
import { CheckCircleIcon, XCircleIcon, PlusCircleIcon, UserIcon, DocumentTextIcon, ClockIcon, GiftIcon, FolderIcon}
    from '@heroicons/vue/24/solid'

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
        <div>
          <LayoutDashboardCard header="Daten bearbeiten" >
            <ul class="ml-3 space-y-3 ">
                <li class="flex gap-x-2 items-center">
                    <UserIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau opacity-60" />
                    <div>
                        <a href="/hra/mitarbeiterinnen/Stammdaten" class="text-Mittelblau hover:underline">
                            Stammdaten 
                        </a>
                    </div>
                </li>
                <li class="flex gap-x-2 items-center">
                    <DocumentTextIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau opacity-60" />
                    <div>
                        <a href="/hra/mitarbeiterinnen/vertrag" class="text-Mittelblau hover:underline">
                            Verträge 
                        </a>
                    </div>
                </li>
                <li class="flex gap-x-2 items-center">
                    <ClockIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau opacity-60" />
                    <div>
                        <a href="/hra/abwesenheiten" class="text-Mittelblau hover:underline">
                            Abwesenheiten 
                        </a>
                    </div>
                </li>
                <li class="flex gap-x-2 items-center">
                    <GiftIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau opacity-60" />
                    <div>
                        <a href="/hra/events" class="text-Mittelblau hover:underline">
                            Events 
                        </a>
                    </div>
                </li>               
                <li class="flex gap-x-2 items-center">
                    <FolderIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau opacity-60" />
                    <div>
                        <a href="/hra/mitarbeiterinnen/dokumente" class="text-Mittelblau hover:underline">
                            Dokumente 
                        </a>
                    </div>
                </li>
            </ul>      
          </LayoutDashboardCard>
        </div>
        
      <div class="space-y-6">
        <HRAVertragAuflistung />
        <HRAAbwesenheitAuflistung fixedHeight="max-h-44"/>
        <HRAEventsAuflistung />
      </div>
    </div>

</template>