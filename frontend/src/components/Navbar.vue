<template>
  <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-bluegrey text-lightgrey ease-out duration-200">

    <div class="navigation my-0 -mx-4 z-10">
      <div class="title-nav flex justify-center items-center gap-2 text-xl mb-5 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-lightgreen" width="32" height="32" viewBox="0 0 512 512"><path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" fill="#888888"/></svg>
      <h1 class="text-lightgreen text-center font-bold">MT MELODY</h1>
    </div>
      <router-link :class="['button ', { 'bg-lightgreen bg-opacity-20 text-lightgreen rounded-md': currentPage === '/adminHome' }]" to="/adminHome">
        <img src="../assets/navbar/home.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4" >
        <span class="text" :class="{ 'text-lightgreen': currentPage === '/adminHome' }">Tableau de bord</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/users' }]" to="/backoffice/users">
        <img src="../assets/logo_utilisateur.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-lightgreen': currentPage === '/backoffice/users' }">Utilisateur</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/documentation' }]" to="/backoffice/documentation">
        <img src="../../assets/logo_doc.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-lightgreen': currentPage === '/backoffice/documentation' }">Documentation</span>
      </router-link>

      <router-link :class="['button ', { 'text-lightgreen bg-red': currentPage === '/backoffice/structure' }]" to="/backoffice/structure">
        <img src="../../assets/structure_logo.png" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-lightgreen': currentPage === '/backoffice/structure' }">Structure</span>
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
  background-color: #f5c77e;
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
  width: 250px;
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