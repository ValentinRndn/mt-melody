<template>
  <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-bluegrey ease-out duration-200">

    <div class="navigation my-0 -mx-4 z-10">
      <div class="title-nav flex justify-center items-center gap-2 text-xl mb-5 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-lightgreen" width="32" height="32" viewBox="0 0 512 512"><path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" fill="#00FF66"/></svg>
      <h1 class="text-lightgreen text-center font-bold">MT MELODY</h1>
    </div>
      <router-link :class="['button ', { 'bg-lightgreen bg-opacity-20 text-lightgreen rounded-md': currentPage === '/adminHome' }]" to="/adminHome">
        <img src="../assets/navbar/home.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4" >
        <span class="text" :class="{ 'text-lightgreen font-semibold text-lg': currentPage === '/adminHome' }">Tableau de bord</span>
      </router-link>

      <router-link  :class="['button ', { 'bg-lightgreen bg-opacity-20 text-lightgreen rounded-md': currentPage === '/adminArtists' }]" to="/adminArtists">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="material-icons w-[2rem] mt-4 mb-4" viewBox="0 0 20 20"><g fill="#BABCBE"><path fill-rule="evenodd" d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z" clip-rule="evenodd"/><ellipse cx="14.75" cy="15" rx="3" ry="2.5"/><ellipse cx="5.75" cy="16" rx="3" ry="2.5"/><path fill-rule="evenodd" d="M15.75 5h2v10h-2zm-9 1h2v10h-2z" clip-rule="evenodd"/></g></svg>                        
        <span class="text" :class="['text-lightgrey font-semibold text-lg',{ 'text-lightgreen': currentPage === '/adminArtists' }]">Artistes</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/documentation' }]" to="/backoffice/documentation">
        <svg xmlns="http://www.w3.org/2000/svg" alt="Logo" class="material-icons w-[2rem] mt-4 mb-4" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#888888" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-.56-3.493a1 1 0 0 0-1.276-.61a7.02 7.02 0 0 0-3.73 3.1A1 1 0 0 0 8.166 10a5.02 5.02 0 0 1 2.665-2.216a1 1 0 0 0 .61-1.276Z"/></g></svg>
        <span class="text" :class="['text-lightgrey font-semibold text-lg',{ 'text-lightgreen': currentPage === '/backoffice/users' }]">Albums</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/structure' }]" to="/backoffice/structure">
        <svg xmlns="http://www.w3.org/2000/svg" alt="Logo" class="material-icons w-[2rem] mt-4 mb-4" width="32" height="32" viewBox="0 0 32 32"><path fill="#888888" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/><path fill="#888888" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/></svg>
        <span class="text" :class="['text-lightgrey font-semibold text-lg',{ 'text-lightgreen': currentPage === '/backoffice/users' }]">Statistiques</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/structure' }]" to="/backoffice/structure">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="material-icons w-[2rem] mt-4 mb-4" viewBox="0 0 24 24"><path fill="#BABCBE" d="M14 11h-1V7h2a1 1 0 0 1 1 1a1 1 0 0 0 2 0a3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h1v4H9a1 1 0 0 1-1-1a1 1 0 0 0-2 0a3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 0 0 0-8m-3 0h-1a2 2 0 0 1 0-4h1Zm3 6h-1v-4h1a2 2 0 0 1 0 4"/></svg>
        <span class="text" :class="['text-lightgrey font-semibold text-lg',{ 'text-lightgreen': currentPage === '/backoffice/users' }]">Finances</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/structure' }]" to="/backoffice/structure">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="material-icons w-[2rem] mt-4 mb-4" viewBox="0 0 24 24"><path fill="#888888" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>
        <span class="text" :class="['text-lightgrey font-semibold text-lg',{ 'text-lightgreen': currentPage === '/backoffice/users' }]">Paramètres</span>
      </router-link>
    </div>

    <div class="menu-toggle-wrap flex justify-end items-end relative top-0 ease-out duration-200 mt-4 mb-4">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="currentColor" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>
        </span>
      </button>
    </div>

  </aside>
</template>



<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const is_expanded = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};

const currentPage = ref(''); // Initialisez currentPage avec une référence

const route = useRoute(); // Obtenez la route actuelle avec useRoute

watch(
  () => route.path, // Surveillez la propriété path de l'objet route
  (newPath) => {
    currentPage.value = newPath; // Met à jour currentPage avec le chemin de la route actuelle
  }
);

// Mettez à jour currentPage lorsque le composant est monté
currentPage.value = route.path;
</script>


<style scoped>
.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-out;
  overflow: hidden; 
  white-space: nowrap; 
}

.button {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  transition: background-color 0.2s ease-out, width 0.2s ease-out;
  gap: 10px;
}

.button:hover {
  background-color: #00FF66;
}

.menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-out;
}

.menu .button .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: color 0.2s ease-out;
}

.menu .button .text {
  color: #fff;
  transition: color 0.2s ease-out;
}

.is-expanded {
  width: 350px;
}

.navigation .is_expanded {
  top: -4rem;
}

.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(180deg);
}

.is-expanded .button .text {
  opacity: 1;
}

.is-expanded .button {
  margin: 20px;
}

.menu-toggle-wrap .menu-toggle {
  transition: transform 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: color 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: #f5c77e;
  transform: translateX(0.5rem);
}

.menu-toggle-wrap .menu-toggle .material-icons .menu-toggle {
  transform: rotate(-180deg);
}

</style>




<!-- Exportation du composant -->
<script>

export default {
  name: 'AdminBar',
}

</script>