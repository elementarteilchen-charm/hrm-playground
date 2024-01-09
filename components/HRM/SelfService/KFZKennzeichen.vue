<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'
    
    const title = "PKW Kennzeichen";

</script>

<template>
    <MeineDatenBox :title="title" buttonText="" >
        <div class="px-4 py-2 text-sm"> 
            <div class="grid grid-cols-2 gap-4">
              <ul>
                <li>MD 3355 X</li>
                <li>-</li>
              </ul>
            </div>    
        </div>
    </MeineDatenBox>
</template>
