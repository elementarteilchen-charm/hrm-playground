<script setup>
	import { PlusCircleIcon, ChevronRightIcon,  ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
	

    const props = defineProps({
        modus: {type: String, default: 'MA'},
	    kategorie: {type: String}, 
	    frage: {type: String}, 
	    speichernText: {type: String, default: 'Speichern & nächste Frage'}
	})
</script>

<template>
    <main class="mt-12">
        <div class="border border-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] p-6 bg-white w-3/5 mx-auto shadow-xl">
            <div>
                <h2 class="uppercase text-Mittelblau font-bold text-center">{{kategorie}}</h2>
                <div class="flex items-center gap-3 my-3">
                    <LayoutQuoteSymbol />
                    <h2 class="text-3xl font-bold">
                        {{frage}}
                    </h2>
                </div>
                <section class="px-[100px]">
                	<slot v-if="modus == 'MA'"></slot>
                    <slot v-if="modus == 'FK'" name="Fuehrungskraftansicht"> </slot>
                    <slot v-if="modus == 'GEMEINSAM'" name="Gemeinsameansicht"> </slot>
                </section>

                <footer class="mt-6 px-[90px] text-sm flex items-center justify-between ">
                    <div>
                        <a class="font-bold text-Mittelblau px-2 py-1 hover:background-Mittelgrau hover:underline" href="">Speichern & später fortfahren</a>
                    </div>
                    <div>
                        <InputButton>{{speichernText}}</InputButton>
                    </div>
                </footer>
            </div>
        </div>
    </main>
</template>