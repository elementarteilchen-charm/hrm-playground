<script setup>
</script>
<template>
    <div class="nav">
        <div class="nav-item dropdown d-flex">
            <button 
            	class="nav-link text-light d-flex align-items-center dropdown-toggle" 
            	data-bs-toggle="dropdown" href="#" role="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
            </button>

            <ul class="dropdown-menu" style="min-width: 25vw;">
            	<li class="d-flex">
            		<div class="pl-4 align-self-center">
            			Platz für Icons für dies und das
            		</div>
            	</li>
            	<li>
            		<hr class="dropdown-divider">
            	</li>

                <li v-for="item in benachrichtigungen" class="dropdown-item" style="font-size: smaller;">

                	<div style="display: grid; grid-template-columns: 2rem 30ch 20ch 10ch;">
                		
                		<div class="px-2 d-flex justify-center align-self-center">
                			
                			<div v-if="item.erledigt" class="text-Gruen">
                				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                				  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                				  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                				</svg>
                			</div>

                			<div v-if="!item.erledigt" class="text-Orange">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
								  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
								</svg>
                			</div>
                		</div>

                		<div class="align-self-center d-inline-block text-truncate" :class="{'text-muted': item.erledigt}">
                			{{item.nachricht}}
                		</div>
                		<div class="align-self-center" :class="{'text-muted': item.erledigt}">
	                		<a class="dropdown-item d-inline-block text-truncate" href="#">
	                			{{item.name}}
	                		</a>
                		</div>
                		<div class="align-self-center" :class="{'text-muted': item.erledigt}">
                			<span>{{item.faelligDatum}}</span>
                		</div>
                	</div>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Zusammenfassende Action oder nix</a></li>
            </ul>
        </div>
    </div>
</template>