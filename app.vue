<template>
  <div class="grid grid-rows-[4rem_1fr_2rem] h-screen">
    <div class="bg-blue-600 text-white h-16">Nav top</div>
    <div class="grid grid-cols-[12rem_1fr]">
      <div class="bg-gray-100 border-r">
        <nav class="p-6">
          <ul>
            <li>Start</li>
            <li>Meine Daten</li>
            <li>Meine Anfragen</li>
          </ul>
        </nav>
      </div>
      <div class="p-6">
        <NuxtPage />
      </div>
    </div>
    <div class="bg-blue-600 text-white text-sm h-12">Footer</div>
  </div>
</template>
