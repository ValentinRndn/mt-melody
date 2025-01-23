<template>
    <div class="home-container text-lightgreen flex flex-col items-center justify-center h-screen min-h-screen transition-all duration-300 ease">
      <div class="background-animation">
        <span v-for="n in 10" :key="n" 
             :style="{
               left: `${Math.random() * 100}vw`,
               animationDelay: `${Math.random() * 5}s`
             }"></span>
      </div>
  
      <h1 class="text-6xl font-bold text-center mt-8">MT Melody</h1>
      <span class="text-white text-center text-xl mt-4">Sélectionnez votre espace de travail</span>
  
      <div class="home-cards-container flex gap-12 h-full items-center">
    <!-- Carte Administration -->
    <div @click="openModal('admin')" class="card-container flex flex-col items-center justify-center z-10 py-4 gap-4 bg-bluegrey h-[350px] rounded-[20px] w-[350px] p-2 text-center cursor-pointer relative overflow-hidden transition-all ease duration-300 hover:-translate-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lightgreen">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <h2 class="text-white text-[1.5rem] font-bold">Administration</h2>
      <p class="text-lightgrey">Gérez les artistes, les contenus et les analyses de la plateforme</p>
      <button class="bg-lightgreen text-bluegrey px-4 py-2 rounded-[25px] font-bold">Accéder</button>
    </div>

    <!-- Carte Artiste -->
    <div @click="openModal('artist')" class="card-container flex flex-col items-center justify-center z-10 py-4 gap-4 bg-bluegrey h-[350px] rounded-[20px] w-[350px] p-2 text-center cursor-pointer relative overflow-hidden transition-all ease duration-300 hover:-translate-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lightgreen">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
      <h2 class="text-white text-[1.5rem] font-bold">Espace Artiste</h2>
      <p class="text-lightgrey">Gérez votre musique, vos statistiques et vos revenus</p>
      <button class="bg-lightgreen text-bluegrey px-4 py-2 rounded-[25px] font-bold">Accéder</button>
    </div>
  </div>
  
      <!-- Modal de connexion -->
      <div v-if="showModal" 
           class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
           @click.self="showModal = false">
        <div class="w-full max-w-md bg-bluegrey rounded-2xl p-8 animate-modal-slide-in">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-white">
              {{ `Connexion ${selectedRole === 'admin' ? 'Administration' : 'Artiste'}` }}
            </h2>
            <button 
              @click="showModal = false"
              class="text-white/80 hover:text-lightgreen transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-[#1a1f2e] border border-white/10 rounded-lg focus:outline-none focus:border-lightgreen transition-colors duration-300 text-white"
              />
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-white/80 mb-2">
                Mot de passe
              </label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="w-full px-4 py-3 bg-[#1a1f2e] border border-white/10 rounded-lg focus:outline-none focus:border-lightgreen transition-colors duration-300 text-white"
              />
            </div>
  
            <button
              type="submit"
              class="w-full bg-lightgreen text-bluegrey font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-lightgreen/30 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Se connecter</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connexion...
              </span>
            </button>
          </form>
  
          <div class="mt-6 text-center text-sm">
            <p class="text-white/60">
              Pas encore de compte ? 
              <a href="#" class="text-lightgreen hover:opacity-80 transition-opacity">
                S'inscrire
              </a>
            </p>
            <a href="#" class="text-lightgreen hover:opacity-80 transition-opacity mt-2 inline-block">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const showModal = ref(false)
  const selectedRole = ref(null)
  const isLoading = ref(false)
  const form = ref({
    email: '',
    password: ''
  })
  
  const openModal = (role) => {
    selectedRole.value = role
    showModal.value = true
  }
  
  const handleLogin = async () => {
  try {
    isLoading.value = true
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: form.value.email,
        password: form.value.password
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur de connexion')
    }

    if (!data.token) {
      throw new Error('Token manquant dans la réponse')
    }

    // Stockage du token
    localStorage.setItem('token', `Bearer ${data.token}`)

    // Redirection
    if (data.user.role === 'admin') {
      router.push('/adminHome')
    } else {
      router.push('/artistHome')
    }

  } catch (error) {
    console.error('Login error:', error)
    alert(error.message)
  } finally {
    isLoading.value = false
  }
}
  </script>
  
  <style scoped>
  .background-animation span {
    position: absolute;
    display: block;
    pointer-events: none;
    width: 20px;
    height: 20px;
    background: #00FF66;
    animation: animate 25s linear infinite;
    opacity: 0;
  }
  
  @keyframes animate {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    10%, 90% {
      opacity: 1;
    }
    100% {
      transform: translate(300px, 1000px);
      opacity: 0;
    }
  }
  
  @keyframes modal-slide-in {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-modal-slide-in {
    animation: modal-slide-in 0.3s ease-out;
  }
  </style>