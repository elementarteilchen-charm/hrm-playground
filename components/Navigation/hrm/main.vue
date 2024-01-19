<script setup>
import { UserIcon, FunnelIcon, XCircleIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
const route = useRoute()
</script>
<template>
    <div v-for="item in HRM_menuitems">
        <div class="flex gap-2 px-4 py-2 items-center font-bold hover:bg-Hellblau hover:text-white">
            {{item.text}}
        </div>
        <ul v-if="item.subitems" class="ml-7 space-y-1 text-sm">
            <li v-for="subitem in item.subitems" class="px-2 py-1 items-center hover:bg-Hellblau hover:text-white">
                <a :href="subitem.link" :class="{'font-bold': route.path === subitem.link}">
                    {{subitem.text}}
                </a>
            </li>
        </ul>
    </div>
</template>