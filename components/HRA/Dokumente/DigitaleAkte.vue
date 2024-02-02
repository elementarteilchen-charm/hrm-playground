<script setup>
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
    <div class="grid grid-cols-[1fr_auto] gap-x-6">
        <div class="grid grid-rows-[auto_24rem]">
            <div class="mr-6">
                <h3 class="mt-4 font-bold">Persis Digitale Akte</h3>
                <table class="table w-full mt-6 ">
                    <thead>
                        <th>Dokumente</th>
                        <th>Typ</th>
                        <th>Datum</th>
                        <th>Aktion</th>
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
        <div class="space-y-2 pl-2 border-r">
            <h3 class="mt-4 ml-2 font-bold">Ordner</h3>
            <div v-for="ordner, index in Ordner">
                <button @click="aktiverOrdner = index" class="py-1 px-2 hover:bg-Blaugrau-25 rounded" :class="{'text-red-500': aktiverOrdner == index}">
                    <span class="font-bold text-Mittelblau " :class="{'text-red-500': aktiverOrdner == index}">{{index}} {{ordner}}</span>
                    <span class="text-Blaugrau pl-2">({{persisDigitaleAkte[index]?.length}})</span>
                </button>
            </div>
        </div>
    </div>
</template>