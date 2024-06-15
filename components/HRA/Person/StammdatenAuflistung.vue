<script setup>
    import { PencilIcon, MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid' 

    const ma = mitarbeiterListe[0]
    const quickNav = ref(false)

    const quickLinks = [
        {
            text: 'Persönlich',
            link: '/hra/mitarbeiterinnen/stammdaten'
        },
        {
            text: 'Adresse & Kontakt',
            link: '/hra/mitarbeiterinnen/stammdaten'
        },
        {
            text: 'Bankverbindung',
            link: '/hra/mitarbeiterinnen/stammdaten'
        },
        {
            text: 'Bewilligungen',
            link: '/hra/mitarbeiterinnen/stammdaten'
        },
    ]
</script>

<template>
    <LayoutDashboardCard header="Stammdaten" buttonText="Bearbeiten" buttonLink="/hra/mitarbeiterinnen/stammdaten">
        <div v-if="quickNav" class="px-3">
            <div v-for="link in quickLinks" class="text-Mittelblau space-y-2 text-sm">
                <a :href="link.link">{{link.text}}</a>
            </div>
            
        </div>
        <div v-if="!quickNav" class="grid grid-cols-2 text-sm">
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