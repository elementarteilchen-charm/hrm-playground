<script setup>
  import { UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
      BookmarkIcon, PlusCircleIcon} 
      from '@heroicons/vue/24/outline'


  const aktiverMA = ref()

</script>

<template>
    <div class="px-16 my-6 text-3xl font-light text-Blaugrau">
      Mitarbeiter*innen
    </div>
  
  <main class="px-16 grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <HRASuche />
    </div>
    
  </main>

</template>