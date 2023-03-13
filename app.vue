<template>
  <div class="grid grid-rows-[4rem_1fr_2rem] h-screen">
    <div class="bg-blue-600 text-white h-16">Nav top</div>
    <div class="grid grid-cols-[12rem_1fr] bg-gray-100">
      
      <div class="bg-gray-200 border-r">
        <nav class="p-6">
          <ul>
            <li>
              <a href="/" class="hover:underline text-blue-600">
                Start
              </a>
            </li>
            <li><a href="/" class="hover:underline text-blue-600">
                Mein Team
              </a></li>
            <li>
              <a href="/meine-daten" class="hover:underline text-blue-600">
                Meine Daten
              </a>
            </li>
            <li>
              <a href="/meine-anfragen" class="hover:underline text-blue-600">
                Meine Anfragen
              </a>
            </li>
            <li>easylearn</li>
          </ul>
        </nav>
      </div>
      
      <div class="p-6  max-w-[1600px] mx-auto" 
          style="height: calc(100vh - 4rem - 2rem); overflow-y: auto;">
        <NuxtPage />
      </div>

    </div>
    <div class="bg-blue-600 text-white text-sm">Footer</div>
  </div>
</template>
