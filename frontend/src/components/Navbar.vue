<template>
  <aside 
    :class="[
      'fixed h-screen transition-all duration-300 ease-in-out z-40',
      'bg-sidebar border-r border-border',
      isExpanded ? 'w-[280px]' : 'w-[80px]',
      'lg:relative flex flex-col'
    ]"
  >
    <!-- Logo Section -->
    <div class="px-4 py-6">
      <div class="flex items-center gap-3 justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="text-primary w-8 h-8"
          viewBox="0 0 512 512"
        >
          <path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" 
          fill="currentColor"
        />
        </svg>
        <span 
          class="text-primary font-bold text-xl transition-opacity duration-300"
          :class="{ 'opacity-0 lg:opacity-100': !isExpanded }"
        >
          MT MELODY
        </span>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="px-2 mt-6 flex-grow">
      <div class="space-y-1">
        <router-link
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'flex items-center px-3 py-3 rounded-lg transition-all duration-200',
            'hover:bg-hover hover:text-primary',
            currentRoute === item.path ? 'bg-hover text-primary' : 'text-text-secondary',
          ]"
        >
          <i :class="['fas', item.icon, 'w-6 h-6']"></i>
          <span 
            class="ml-3 font-medium transition-opacity duration-300"
            :class="{ 'opacity-0 lg:opacity-100': !isExpanded }"
          >
            {{ item.name }}
          </span>
        </router-link>
      </div>
    </nav>

    <!-- Bouton de déconnexion -->
    <div class="px-2 pb-6">
      <button
        @click="handleLogout"
        :class="[
          'flex items-center w-full px-3 py-3 rounded-lg transition-all duration-200',
          'hover:bg-hover hover:text-danger text-text-secondary',
        ]"
      >
        <i class="fas fa-sign-out-alt w-6 h-6"></i>
        <span 
          class="ml-3 font-medium transition-opacity duration-300"
          :class="{ 'opacity-0 lg:opacity-100': !isExpanded }"
        >
          Déconnexion
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isExpanded = ref(true) // Par défaut étendu
const currentRoute = computed(() => route.path)

// Navigation items configuration
const navigationItems = [
  {
    name: 'Tableau de bord',
    path: '/adminHome',
    icon: 'fa-home'
  },
  {
    name: 'Artistes',
    path: '/adminArtists',
    icon: 'fa-users'
  },
  {
    name: 'Albums',
    path: '/adminAlbums',
    icon: 'fa-compact-disc'
  },
  {
    name: 'Statistiques',
    path: '/adminStats',
    icon: 'fa-chart-line'
  },
  {
    name: 'Finances',
    path: '/adminFinance',
    icon: 'fa-dollar-sign'
  },
  {
    name: 'Paramètres',
    path: '/adminsettings',
    icon: 'fa-cog'
  }
]

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

const handleLogout = () => {
  // Supprimer le token et autres données de session
  localStorage.removeItem('token')
  localStorage.removeItem('userRole')
  
  // Rediriger vers la page de connexion
  router.push('/')
}
</script>