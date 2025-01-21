<template>
  <header class="flex justify-between items-center mb-8">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background relative">
        <img 
          v-if="user?.profilePicture" 
          :src="user.profilePicture" 
          :alt="user?.name"
          class="w-full h-full object-cover rounded-full"
        />
        <i v-else class="fas fa-user"></i>
      </div>
      <div>
        <h3 class="font-semibold">{{ user?.name || 'Chargement...' }}</h3>
        <p class="text-text-secondary text-sm">{{ formatRole(user?.role) }}</p>
      </div>
    </div>
    
    <button 
      @click="toggleTheme"
      class="p-2 hover:bg-hover rounded-full transition-colors"
    >
      <i :class="['fas', isDark ? 'fa-sun' : 'fa-moon']"></i>
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = ref(true)
const user = ref(null)
const isLoading = ref(true)

// Fonction pour formater le rôle
const formatRole = (role) => {
  switch (role) {
    case 'admin':
      return 'Super Administrateur'
    case 'artist':
      return 'Artiste'
    default:
      return 'Utilisateur'
  }
}

// Fonction pour récupérer les données de l'utilisateur
const fetchUserData = async () => {
  try {
    isLoading.value = true
    const token = localStorage.getItem('token')
    
    if (!token) {
      throw new Error('Non authentifié')
    }

    const response = await fetch('http://localhost:5000/api/auth/me', {
      headers: {
        'Authorization': token.startsWith('Bearer ') ? token : `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Erreur de serveur')
    }

    const data = await response.json()
    
    if (!data.success || !data.user) {
      throw new Error('Données utilisateur invalides')
    }

    user.value = data.user

    if (window.location.pathname.includes('admin') && user.value.role !== 'admin') {
      throw new Error('Accès non autorisé')
    }

  } catch (error) {
    console.error('Erreur:', error)
    localStorage.clear()
    router.push('/')
  } finally {
    isLoading.value = false
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialisation du thème
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
}

onMounted(() => {
  initTheme()
  fetchUserData()
})
</script>