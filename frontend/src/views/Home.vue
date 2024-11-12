<template>


    <div class="home-container text-lightgreen flex flex-col items-center justify-center h-screen min-h-screen transition-all duration-300 ease">
        <div class="background-animation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

    <h1 class="text-6xl font-bold text-center mt-8">MT Melody</h1>
    <span class="text-white text-center text-xl mt-4">Sélectionnez votre espace de travail</span>

    <div class="home-cards-container flex gap-12 h-full items-center">
        <router-link to="/adminHome">
        <div class="card-container flex flex-col items-center justify-center z-10 py-4 gap-4 bg-bluegrey h-[350px] rounded-[20px] w-[350px] p-2 text-center cursor-pointer relative overflow-hidden transition-all ease duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><circle cx="17" cy="15.5" r="1.12" fill="#00FF66" fill-rule="evenodd"/><path fill="#888888" fill-rule="evenodd" d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"/><path fill="#888888" fill-rule="evenodd" d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.97 5.97 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/></svg>
            <h2 class="text-white text-[1.5rem] font-bold">Administration</h2>
            <p class="text-lightgrey">Gérez les artistes, les contenus et les analyses de la plateforme</p>
            <button class="bg-lightgreen text-bluegrey px-4 py-2 rounded-[25px] font-bold">Accéder</button>
        </div>  
    </router-link>

    <router-link to="/artistHome">
        <div class="card-container flex flex-col items-center justify-center z-10 py-4 gap-4 bg-bluegrey h-[350px] rounded-[20px] w-[350px] p-2 text-center cursor-pointer relative overflow-hidden transition-all ease duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20"><g fill="#00FF66"><path fill-rule="evenodd" d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z" clip-rule="evenodd"/><ellipse cx="14.75" cy="15" rx="3" ry="2.5"/><ellipse cx="5.75" cy="16" rx="3" ry="2.5"/><path fill-rule="evenodd" d="M15.75 5h2v10h-2zm-9 1h2v10h-2z" clip-rule="evenodd"/></g></svg>            
            <h2 class="text-white text-[1.5rem] font-bold">Espace Artiste</h2>
            <p class="text-lightgrey">Gérez votre musique, vos statistiques et vos revenus</p>
            <button class="bg-lightgreen text-bluegrey px-4 py-2 rounded-[25px] font-bold">Accéder</button>
        </div>
    </router-link>
    </div>

</div>
  </template>
  
  <script>
document.addEventListener('DOMContentLoaded', () => {
    const backgroundAnimation = document.querySelector('.background-animation');
    if (backgroundAnimation) {
        for (let i = 0; i < 10; i++) {
            const span = document.createElement('span');
            span.style.left = Math.random() * 100 + 'vw';
            span.style.animationDelay = Math.random() * 5 + 's';
            backgroundAnimation.appendChild(span);
        }
    }
});

  </script>
  
  <style scoped>
  </style>
  