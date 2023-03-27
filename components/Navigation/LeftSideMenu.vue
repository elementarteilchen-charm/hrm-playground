<script setup>
    import { reactive } from 'vue'

    const props = defineProps({
        items: { type: Array, default: [] },
        startingTab: {type: Number},
    })

    const tabs = [
          'Persönlich', 
          'Adresse', 
          'Notfallkontakt',
          'Adresse02', 
          'Persönlich02', 
      ];

    const activeTab = reactive({ tab: tabs[0] });

</script>

<template>
    <nav class="mt-4">
        <ul class="text-sm">
            <li v-for="tab, index in tabs" class="pl-4 pr-8 py-3 flex hover:bg-gray-200" :class="[{'bg-gray-400 text-white font-bold': tab == activeTab.tab}]">
                <a href="#" @click="activeTab.tab = tab">
                    {{tab}}</a>
            </li>
        </ul>
    </nav>
</template>