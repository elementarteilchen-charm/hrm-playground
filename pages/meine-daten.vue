<template>
  <h1 class="text-xl font-bold">Meine Daten</h1>
  
  <HRMProfilHeader />
  
  <div class="mt-8 grid grid-cols-2 gap-8">
<!--     <DatenBox title="Fehlende Dokumente" type="alert">
      <ul>
        <li>2003 - 2009 WU Wien</li>
        <li>1996 - 2002 BG BRG Baden</li>
      </ul>
    </DatenBox> -->
     <DatenBox title="Ausbildung" type="">
      <ul>
        <li>2003 - 2009 WU Wien</li>
        <li>1996 - 2002 BG BRG Baden</li>
      </ul>
    </DatenBox>
    <DatenBox title="Private Kontaktdaten" buttonText="Daten bearbeiten">
      <div class="grid grid-cols-2 gap-4">
        <ul>
          <li>Gauermannstraße 43/2</li>
          <li>2542 Kottingbrunn</li>
          <li>Österreich</li>
          <li>+4366488458016</li>
          <li>—</li>
        </ul>
        <ul>
          <li>jan.ehrenreich@gmx.at</li>
        </ul>
        
      </div>
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
