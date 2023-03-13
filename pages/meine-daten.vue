<template>
  <h1 class="text-xl font-bold">Meine Daten</h1>
  
  <div class="border bg-white grid lg:grid-cols-[12rem_1fr]">
    
    <div>
      <img src="~/assets/img/avatar.png" alt="">
    </div>
    <div>
      Datenblock
    </div>  
  </div>
  
  <div class="mt-8 grid lg:grid-cols-2 gap-8">
    <DatenBox title="Ausbildung">
      <ul>
        <li>2003 - 2009 WU Wien</li>
        <li>1996 - 2002 BG BRG Baden</li>
      </ul>
    </DatenBox>
    <DatenBox title="KFZ Kennzeichen">
      <table class="table-fixed w-full mt-8 border" >
          <thead>
              <tr class="bg-gray-200 text-sm">
                  <th class="text-center h-8">Von</th>
                  <th class="text-center h-8">Bis</th>
                  <th class="text-center h-8">Ausbildung</th>
              </tr>
          </thead>
          <tbody>
              <tr class="text-sm">
                  <td class="border-b border-r px-2 py-1">September 2001</td>
                  <td class="border-b border-r px-2 py-1">Juli 2005</td>
                  <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
              </tr>
              <tr class="text-sm">
                  <td class="border-b border-r px-2 py-1">September 2001</td>
                  <td class="border-b border-r px-2 py-1">Juli 2005</td>
                  <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
              </tr>
              <tr class="text-sm">
                  <td class="border-b border-r px-2 py-1">September 2001</td>
                  <td class="border-b border-r px-2 py-1">Juli 2005</td>
                  <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
              </tr>
          </tbody>
      </table>
    </DatenBox>
    <DatenBox title="Notfallkontakt"/>
    <DatenBox title="Bankdaten"/>
  </div>
  
</template>
