<script setup>
	import { DocumentTextIcon} from '@heroicons/vue/24/solid'
	const props = defineProps({
	    headerText: { type: String, default: 'Anforderungen' },
	    contentPath: { type: String },
	})
</script>

<template>
	<details>
	    <summary class="block cursor-pointer">
	        <div class="bg-Blaugrau-25 p-2 flex items-center gap-2">
	            <DocumentTextIcon class="w-5 h-5 text-Mittelblau" />
	            <span>{{headerText}}</span>        
	        </div>
	    </summary>
	    <article class="mt-3 px-8 prose-sm prose-li:list-disc">
	        <ContentDoc :path="contentPath" />
	    </article>
	</details>
</template>