<template>
  <div class="grid grid-rows-[4rem_1fr_1rem] h-screen">
    <div class="bg-blue-600 text-white h-16">Nav top</div>
    <div class="grid grid-cols-[12rem_1fr] bg-white">
      
      <div class="bg-gray-200 border-r">
        <nav class="p-6 text-sm">
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
              <a href="/hra-formular" class="hover:underline text-blue-600">
                HRA Stammdaten
              </a>
            </li>
            <li>
              <a href="/hra-formular-sidebar" class="hover:underline text-blue-600">
                HRA Stammdaten 02
              </a>
            </li>
            <li>
              <a href="/hra-dokumente" class="hover:underline text-blue-600">
                HRA Dokumente
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="p-6  max-w-[1600px]  bg-gray-100" 
          style="height: calc(100vh - 4rem - 1rem); overflow-y: auto;">
        <NuxtPage />
      </div>

    </div>
    <div class="bg-gray-600 text-white text-gray-200 text-xs">Footer</div>
  </div>
</template>
