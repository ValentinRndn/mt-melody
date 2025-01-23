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
        <i class="fas fa-music text-primary text-2xl flex items-center"></i>
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
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'flex items-center px-3 py-3 rounded-lg transition-all duration-200',
            'hover:bg-hover hover:text-primary',
            currentRoute === item.path ? 'bg-hover text-primary' : 'text-text-secondary',
          ]"
        >
          <div class="w-6 flex items-center justify-center">
            <i :class="['fas', item.icon]"></i>
          </div>
          <span 
            class="ml-3 font-medium transition-opacity duration-300 flex items-center"
            :class="{ 'opacity-0 lg:opacity-100': !isExpanded }"
          >
            {{ item.label }}
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
        <div class="w-6 flex items-center justify-center">
          <i class="fas fa-sign-out-alt"></i>
        </div>
        <span 
          class="ml-3 font-medium transition-opacity duration-300 flex items-center"
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
const isExpanded = ref(true)
const currentRoute = computed(() => route.path)

const navItems = [
  { label: 'Tableau de bord', path: '/artistHome', icon: 'fa-home' },
  { label: 'Mes Titres', path: '/artistTitles', icon: 'fa-compact-disc' },
  { label: 'Statistiques', path: '/artistStats', icon: 'fa-chart-line' },
  { label: 'Revenus', path: '/artistRevenus', icon: 'fa-dollar-sign' },
  { label: 'Paramètres', path: '/artistSettings', icon: 'fa-cog' }
]

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userRole')
  router.push('/')
}
</script>