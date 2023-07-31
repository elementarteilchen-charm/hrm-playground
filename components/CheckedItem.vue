<script setup>
	import {CheckCircleIcon} from '@heroicons/vue/24/outline'
</script>
<template>
	<div class="flex gap-2 items-center">
		<CheckCircleIcon class="w-5 h-5 flex-shrink-0"/>
		<slot></slot>
	</div>
</template>