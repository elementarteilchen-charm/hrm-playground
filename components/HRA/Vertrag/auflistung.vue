<script setup>
    import { UserIcon, ArrowRightEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon, ArrowTopRightOnSquareIcon,  NoSymbolIcon } from '@heroicons/vue/24/outline' 
    import { PencilIcon, MinusCircleIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid' 

    const konkurrenzklauseln = ['KK', 'HO', 'FXT', 'VPE', ]

    const gewaehlterVertrag = ref()

    function vertragHinzufuegen() {
        document.getElementById("VertragHinzufuegen").showModal();
    }

    function vertragBearbeiten(vertrag) {
        document.getElementById("VertragBearbeiten").showModal();
    }
</script>
<template>
    <LayoutDashboardCard header="Verträge" buttonText="Verträge bearbeiten" buttonLink="/hra/mitarbeiterinnen/vertrag">
        <div class="grid grid-rows-[1fr_auto] px-3 overflow-x-auto rounded-lg">
            
            <div class="grid 
                        grid-cols-[7ch_7ch_6ch_32ch_1fr_12ch] gap-x-3 py-1 my-2
                        bg-Blaugrau-10 border-b border-b-Mittelgrau text-sm">

                <div class="place-self-center px-2 py-1 text-xs font-bold">PNR</div>
                <div class="place-self-center px-2 py-1 text-xs font-bold">Status</div>
                <div class="place-self-center px-2 py-1 text-xs font-bold">
                    Mandant <br>
                    Standort
                </div>
                <div class="pl-5 py-1 text-xs font-bold">
                    Anstellung, 
                    DV Beginn, 
                    DV Ende
                </div>
                <div class="align-self-center py-1 text-xs font-bold">
                    Vertragszusätze
                </div>
            </div>

            <div 
                v-for="vertrag, index in vertragsdatensaetze" 
                class=" 
                        hover:bg-Blaugrau-10
                        grid grid-cols-[7ch_7ch_6ch_32ch_1fr] gap-x-2
                        py-2 border-b border-b-Blaugrau text-sm"
            >
                
                <div class="px-2 py-1 tabular-nums text-right">
                    <span class="font-bold">{{vertrag.personalnr}}</span>
                </div>
                
                <div class="pl-1 py-1 space-y-2">
                    <span v-if="vertrag.freigegeben && vertrag.aktiv" 
                        class="inline-block border-transparent h-5 px-2 py-[2px] rounded bg-Gruen text-white text-xs">Aktiv</span>
                    <span v-if="!vertrag.freigegeben && !vertrag.aktiv"
                        class="inline-block border-transparent h-5 px-2 py-[2px] rounded bg-Orange-80 text-white text-xs">Erstellt</span>
                    <span v-if="vertrag.geringfuegig"
                        class="inline-block border border-black h-5 px-2 py-[2px] rounded _bg-Hellgrau  text-xs">GFG</span>                 
                </div>
                
                <div class="px-1 py-1 space-y-2 font-bold">
                    <div>{{vertrag.mandant}}</div>
                    <div>{{vertrag.standort}}</div>
                </div>

                <div class="px-3 py-1 space-y-2">
                    <div class="flex gap-x-2">
                        <UserIcon class="w-5 h-5 text-Gruen"/>
                        {{vertrag.arbeitsverhaeltnis}}
                    </div>
                    <div class="tabular-nums space-y-2">
                        <div class="flex gap-x-2">
                            <ArrowRightEndOnRectangleIcon class="w-5 h-5 text-Mittelgrau"/>
                            <span class="text-Gruen">{{vertrag.dvbeginn}}</span>
                            <span class="text-Mittelgrau">({{vertrag.dienstantritt}})</span>
                        </div>
                        <div v-if="vertrag.dvende" class="flex gap-x-2">
                            <ArrowLeftStartOnRectangleIcon class="w-5 h-5 text-Mittelgrau" :class="{'text-Orange': vertrag.dvende}"/>
                            <span class="font-bold_ _text-Orange">{{vertrag.dvende}}</span>
                        </div>
                        <div v-if="vertrag.letzterArbeitstag" class="flex gap-x-2" >
                        <div v-if="vertrag.technischesAustrittsdatum" class="flex gap-x-2" >
                            <NoSymbolIcon class="w-5 h-5 text-Orange "/>
                            {{vertrag.technischesAustrittsdatum}}
                        </div>
                        <div v-if="vertrag.letzterArbeitstag" class="flex gap-x-2" >
                            <ArrowTopRightOnSquareIcon class="w-5 h-5 text-Orange "/>
                            {{vertrag.letzterArbeitstag}}
                        </div>
                    </div>
                    </div>
                </div>
        
                <div class="pr-2">
                    <details name="klauseln">
                        <summary class="flex items-center gap-x-2">
                            <div v-for="vertragsklausel in vertrag.konkurrenzklauseln">
                                {{vertragsklausel}}
                            </div>
                        </summary>
                        <div class="p-2 bg-white border rounded shadow-sm">
                            <div class="flex gap-x-4">
                                <template v-for="klausel in konkurrenzklauseln">
                                    <InputCheckbox 
                                        :label="klausel" 
                                        :checked="vertrag.konkurrenzklauseln.includes(klausel)"/>
                                </template>
                                <button class="text-Mittelblau hover:underline">Speichern</button>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </div>

    </LayoutDashboardCard>
    

</template>