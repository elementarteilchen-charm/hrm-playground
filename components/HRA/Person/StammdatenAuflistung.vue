<script setup>
    import { PencilIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid' 

    const ma = mitarbeiterListe[0]
</script>

<template>
    <LayoutDashboardCard header="Stammdaten" buttonText="Bearbeiten" buttonLink="/hra/mitarbeiterinnen/stammdaten">
        <div class="grid grid-cols-2 text-sm">
            <div class="px-3 space-y-1">
                <div class="font-bold">
                    Hauptwohnsitz 
                </div>
                <div>
                    {{ma.strasse}} <br>
                    {{ma.plz}} {{ma.ort}} <br>
                </div>
                <div>
                    {{ma.land}}
                </div>
                <div class="mt-3">
                    <span class="border rounded px-2 py-1 text-xs bg-Blaugrau-10">Home office</span>
                </div>
            </div>
            <div class="px-3 space-y-1">
                <div class="font-bold">
                    Nebenwohnsitz
                </div>
                <div>
                    {{ma.strasse}} <br>
                    {{ma.plz}} {{ma.ort}} <br>
                </div>
                <div>
                    {{ma.land}}
                </div>
            </div>
        </div>
    </LayoutDashboardCard>
</template>