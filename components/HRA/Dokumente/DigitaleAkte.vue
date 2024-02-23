<script setup>
        import { DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const Ordner = {
    '01': 'Bewerbungen Zeugnisse',
    '02': 'Bewilligungen',
    '03': 'Verträge',
    '04': 'Infos und Beurteilungen',
    '05': 'Dokumente & Urkunden',
    '07': 'Diverses',
}

const aktiverOrdner = ref('01')
</script>
<template>
    <div class="grid grid-cols-[26ch_1fr] pb-12 mt-3">
        
        <div class="py-3 bg-Blaugrau-10">
            <h3 class="px-3 font-bold">
                Persis
            </h3>
            <div v-for="ordner, index in Ordner" class="mt-2 text-sm" style="width: 28ch;">
                <button @click="aktiverOrdner = index" class="px-3 py-1 hover:bg-Blaugrau-25 rounded" :class="{'text-red-500': aktiverOrdner == index}">
                    <span class="font-bold text-Mittelblau " :class="{'text-red-500': aktiverOrdner == index}">{{index}} {{ordner}}</span>
                    <span class="text-Blaugrau pl-2">({{ukoDokumente[index]?.length ? ukoDokumente[index]?.length  : '0'}})</span>
                </button>
            </div>
        </div>

        <div class="grid grid-rows-[auto_24rem]">
            <div class="ml-4 pr-4">
                <h3 class="mt-3 font-bold">Persis Digitale Akte</h3>
                <small>Dokumente können nur aufgelistet werden. Anzeige und Download ist nur über Persis möglich.</small>
                <table class="table w-full mt-6 text-sm">
                    <thead>
                        <tr>
                            <th>Dokumente</th>
                            <th>Typ</th>
                            <th style="width: 12ch;">Datum</th>
                            <th>Aktion</th>
                        </tr>
                    </thead>
                    <tbody class="border rounded">
                        <tr v-for="item in persisDigitaleAkte[aktiverOrdner]" class="border-b h-10">
                            <td>
                                <div class="flex gap-2 items-center">
                                    <DocumentTextIcon class="w-5 h-5" />
                                    <div>{{item.file}}.pdf</div>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="text-sm">
                                    {{item.typ}}
                                </span>
                            </td>
                            <td class="text-center tabular-nums">
                                {{item.datum}}
                            </td>
                            <td>
                                <div class="flex items-center gap-x-2">
                                    <PencilIcon class="w-5 h-5" />
                                    <TrashIcon class="w-5 h-5" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="py-6 pr-6">
            </div>
        </div>

    </div>
</template>