<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon } from '@heroicons/vue/24/outline' ;

    const title = "Adresse";
    const inBearbeitung = ref(false);

</script>
<template>
    <MeineDatenBox :title="title" buttonText="Adressänderung bekannt geben">
        <div class="grid grid-cols-[1fr_auto] gap-4">
            <div class="flex gap-2">
                <HomeIcon class="w-5 h-5 " />
                <ul>
                    <li>Gauermannstraße 43/2</li>
                    <li>2542 Kottingbrunn</li>
                    <li>Österreich</li>
                    <li>—</li>
                </ul>
            </div>
        </div>
    </MeineDatenBox>



</template>
<style>
</style>