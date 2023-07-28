<script setup>
  import { UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
      BookmarkIcon, PlusCircleIcon} 
      from '@heroicons/vue/24/outline'


  const aktiverMA = ref()
  function callback(data) {
    console.log(data)
    alert("Event callback")
  }
</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Mitarbeiter*innen
    </div>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <Suche @ma-gewaehlt="callback"/>
    </div>
    
  </main>

</template>