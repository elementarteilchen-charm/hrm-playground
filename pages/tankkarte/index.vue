<script setup>
    import {
         CreditCardIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon, BookmarkIcon, PlusCircleIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon, TrashIcon}
        from '@heroicons/vue/24/outline'
</script>

<template>
    <section class="bg-white border mx-8 my-8 h-[250px] overflow-hidden">
        <div class="grid grid-cols-[2fr_2fr_3fr] gap-x-4">
            <div>
                Abtretung
                Sponsoren
                Karten
            </div>

            <div>
                <div class="grid grid-rows-[3rem_1fr]">
                    <div class="py-2 flex gap-x-2 justify-between">
                        <div class="text-Bittelblau text-sm self-center font-bold">Kartenlimits</div>
                        <div class="flex gap-x-2 justify-end">
                            <TKButton>
                                <CreditCardIcon class="w-5 h-5 flex-shrink-0"/>
                                <div class="hidden 2xl:block whitespace-nowrap">
                                    Kartenlimits verwalten                                    
                                </div>
                            </TKButton>
                            <TKButton :secondary="true">
                                <div class="h-5"></div>
                                alle anzeigen
                            </TKButton>
                        </div>
                    </div>

                    <div>
                        <table class="w-full">
                            <thead class="text-xs  bg-Hellgrau">
                                <th class="font-light">KartenNr</th>
                                <th class="font-light">Tag</th>
                                <th class="font-light">Woche</th>
                                <th class="font-light">&frac12; Monat</th>
                                <th class="font-light">Monat</th>
                            </thead>
                            <tbody class="overflow-y-auto bg-red-100 text-sm" style="height: 100px;">
                                <tr v-for="limit in kartenlimits">
                                    <td class="pb-1 border-b tabular-nums">{{limit[0]}}</td>
                                    <td class="pb-1 border-b tabular-nums text-right">{{limit[1]}}</td>
                                    <td class="pb-1 border-b tabular-nums text-right">{{limit[2]}}</td>
                                    <td class="pb-1 border-b tabular-nums text-right">{{limit[3]}}</td>
                                    <td class="pb-1 border-b tabular-nums text-right">{{limit[4]}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div class="">
                <div class="grid grid-rows-[3rem_auto_2rem]">
                    <div class="py-2 flex gap-2 justify-between overflow-hidden">
                            
                        <TKButton>
                            <EnvelopeIcon class="w-5 h-5 flex-shrink-0"/>
                            <div class="hidden 2xl:block whitespace-nowrap">
                                Mail an Transportpartner
                            </div>
                        </TKButton>

                        <div class="flex gap-2">
                            
                            <TKButton>
                                <PlusCircleIcon class="w-5 h-5 flex-shrink-0"/>
                                <div class="hidden 2xl:block whitespace-nowrap">
                                    In Verwaltung öffnen
                                </div>
                            </TKButton>
                            <TKButton>
                                <ArrowTopRightOnSquareIcon class="w-5 h-5 flex-shrink-0"/>
                                <div class="hidden 2xl:block whitespace-nowrap">
                                    Neuer Kommentar
                                </div>
                            </TKButton>
                        </div>
                    </div>

                    <div class="overflow-y-auto" style="height: calc(250px - 5.5rem)">
                        <div v-for="kommentar in kommentare" 
                             class="grid grid-cols-[5fr_1fr] 2xl:grid-cols-[5fr_2fr_1fr] 
                             gap-2 border p-2 mb-2">
                            <div class="text-xs">
                                {{kommentar.kommentar}}
                            </div>
                            <div class="text-xs line-clamp-1 hidden 2xl:block">
                                {{kommentar.autor}}
                            </div>
                            <div class="flex justify-end gap-x-2">
                                <div class="flex items-center rounded-full h-6 w-6 bg-red-500 text-white">
                                    <PencilIcon class="w-4 h-4 mx-auto" />
                                </div>
                                <div class="flex items-center rounded-full h-6 w-6 bg-Mittelblau text-white">
                                    <TrashIcon class="w-4 h-4 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="py-2">
                        <div class="font-bold text-xs">
                            Risikogründe
                        </div>
                    </div>

                </div>
            </div>
        </div>
        

    </section>

    <section>
        Details
    </section>
</template>
