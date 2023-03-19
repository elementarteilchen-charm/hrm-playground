<script setup>
    import { reactive } from 'vue'

    const props = defineProps({
        tabs: [],
        active: {type: String, default: 0},
        width: {type: String, default: 'w-64'}
    })

    const activeTab = reactive({ tab: '' });
    activeTab.tab = props.active;

</script>

<template>
    <nav class="">
      <ul class="flex space-x-4">
        <li v-for="tab, index in tabs" 
            class="text-sm  p-2 border-gray-200 hover:text-blue-600"
            :class="[{'text-blue-600': tab == active}]">
            <a href="#" @click="activeTab.tab = tab">{{tab}}</a>
        </li>
      </ul>
    </nav>
    <div class="h-16">
        {{activeTab}}
        <div v-for="tab, index in tabs">
            <div v-show="tab == activeTab.tab">
                Content von {{tab}}
                        <div class="mt-6 px-2 grid grid-cols-[auto_1fr] gap-4 ">          
          <InputText label="Geburtsname"/>
          <InputText label="Reisepass Vorname"/>
          <InputText label="Reisepass Nachname"/>
        </div>
            </div>
        </div>
    </div>

</template>