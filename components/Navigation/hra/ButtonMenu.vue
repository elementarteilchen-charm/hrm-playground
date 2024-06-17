<script setup>
    import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
	const props = defineProps({
        options: { type: Array, default: [] },
        buttonText: {type: String, default: "Click Me"}
    })
    const ma = mitarbeiterListe[0]
</script>

<template>
    <div class="mt-3 flex relative z-10">

      <div class="absolute"> 
        
        <details class="text-sm open:shadow-lg hover:cursor-pointer">
          <summary class="block bg-Mittelblau px-3  border border-Mittelblau">
            <div class="text-white flex items-center gap-x-2 py-2">
              <div class="text-white">Neues Event erfassen</div>
              <ChevronDownIcon class="w-4 h-4"/> 
            </div>
          </summary>
          
          <ul class="space-y-1 py-2 border-l border-r px-2 bg-white shadow">
            <li v-for="item in options" class="">
              <a :href="item.link" class="">
                <div class="flex gap-1 items-center inline-block hover:underline">
                    <ChevronRightIcon class="w-4 h-4"/>
                  <span>{{item.text}}</span>
                </div>
              </a>
            </li>
          </ul>

        </details>
      </div>
    </div>
</template>