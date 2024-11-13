<!-- App.vue -->
<template>
    <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900">
<Navbar />
  
      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Header -->
        <header class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
              <i class="fas fa-user"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-gray-200">Admin Principal</h3>
              <small class="text-gray-500 dark:text-gray-400">Super Administrateur</small>
            </div>
          </div>
          
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" class="text-gray-600 dark:text-gray-400"></i>
          </button>
        </header>
  
        <!-- Filter Section -->
        <div class="flex justify-between items-center mb-8">
          <div class="relative w-80">
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un artiste..."
              class="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
  
          <div class="flex gap-3">
            <button 
              v-for="filter in filters"
              :key="filter.id"
              @click="setActiveFilter(filter.id)"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                activeFilter === filter.id 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              ]"
            >
              {{ filter.label }} ({{ filter.count }})
            </button>
          </div>
        </div>
  
        <!-- Pending Requests -->
        <div v-if="pendingRequests.length" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Demandes en attente ({{ pendingRequests.length }})
          </h3>
          <div class="space-y-4">
            <div 
              v-for="request in pendingRequests" 
              :key="request.id"
              class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <div 
                class="w-12 h-12 rounded-full bg-cover bg-center"
                :style="{ backgroundImage: `url(${request.avatar})` }"
              ></div>
              <div>
                <h4 class="font-medium text-gray-800 dark:text-gray-200">{{ request.name }}</h4>
                <small class="text-gray-500">Genre: {{ request.genre }} • Rejoint le: {{ request.joinDate }}</small>
              </div>
              <div class="ml-auto flex gap-3">
                <button 
                  @click="approveRequest(request.id)"
                  class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Approuver
                </button>
                <button 
                  @click="rejectRequest(request.id)"
                  class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Rejeter
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Artists Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="artist in filteredArtists" 
            :key="artist.id"
            class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
          >
            <div class="relative h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${artist.coverImage})` }">
              <span 
                :class="[
                  'absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium',
                  artist.status === 'active' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-900'
                ]"
              >
                {{ artist.status === 'active' ? 'Actif' : 'En attente' }}
              </span>
            </div>
  
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <div 
                  class="w-16 h-16 rounded-full bg-cover bg-center"
                  :style="{ backgroundImage: `url(${artist.avatar})` }"
                ></div>
                <div>
                  <div class="font-semibold text-gray-800 dark:text-gray-200">{{ artist.name }}</div>
                  <div class="text-sm text-gray-500">{{ artist.genres.join(', ') }}</div>
                </div>
              </div>
  
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="font-semibold text-gray-800 dark:text-gray-200">{{ artist.stats.listens }}</div>
                  <div class="text-sm text-gray-500">Écoutes</div>
                </div>
                <div class="text-center">
                  <div class="font-semibold text-gray-800 dark:text-gray-200">{{ artist.stats.albums }}</div>
                  <div class="text-sm text-gray-500">Albums</div>
                </div>
                <div class="text-center">
                  <div class="font-semibold text-gray-800 dark:text-gray-200">{{ artist.stats.rating }}</div>
                  <div class="text-sm text-gray-500">Note</div>
                </div>
              </div>
  
              <div class="flex gap-2">
                <button 
                  @click="editArtist(artist.id)"
                  class="flex-1 px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i class="fas fa-edit mr-2"></i> Éditer
                </button>
                <button 
                  @click="showStats(artist.id)"
                  class="flex-1 px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i class="fas fa-chart-line mr-2"></i> Stats
                </button>
                <button 
                  @click="showMenu(artist.id)"
                  class="px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
import Navbar from '../../components/Navbar.vue';
  
  // State
  const isDark = ref(false)
  const searchQuery = ref('')
  const activeFilter = ref('all')
  const pendingRequests = ref([
    {
      id: 1,
      name: 'Sarah Connor',
      genre: 'Pop, Electronic',
      joinDate: '22/06/2023',
      avatar: 'https://picsum.photos/200/200?random=1'
    }
    // Add more pending requests...
  ])
  
  const navigationItems = [
    { name: 'Tableau de bord', path: '/home-admin', icon: 'fas fa-home' },
    { name: 'Artistes', path: '/user-admin', icon: 'fas fa-users' },
    { name: 'Albums', path: '/albums-admin', icon: 'fas fa-compact-disc' },
    { name: 'Statistiques', path: '/stat-admin', icon: 'fas fa-chart-line' },
    { name: 'Finances', path: '/finance', icon: 'fas fa-dollar-sign' },
    { name: 'Paramètres', path: '/parametre', icon: 'fas fa-cog' }
  ]
  
  const filters = [
    { id: 'all', label: 'Tous', count: 150 },
    { id: 'active', label: 'Actifs', count: 120 },
    { id: 'pending', label: 'En attente', count: 15 },
    { id: 'inactive', label: 'Inactifs', count: 15 }
  ]
  
  const artists = ref([
    {
      id: 1,
      name: 'John Doe',
      genres: ['Pop', 'Rock'],
      status: 'active',
      coverImage: 'https://picsum.photos/400/200?random=2',
      avatar: 'https://picsum.photos/100/100?random=3',
      stats: {
        listens: '45K',
        albums: 12,
        rating: 4.8
      }
    }
    // Add more artists...
  ])
  
  // Computed
  const filteredArtists = computed(() => {
    return artists.value.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesFilter = activeFilter.value === 'all' || artist.status === activeFilter.value
      return matchesSearch && matchesFilter
    })
  })
  
  // Methods
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
  }
  
  const setActiveFilter = (filterId) => {
    activeFilter.value = filterId
  }
  
  const isCurrentRoute = (path) => {
    const route = useRoute()
    return route.path === path
  }
  
  const approveRequest = (id) => {
    // Implement approval logic
  }
  
  const rejectRequest = (id) => {
    // Implement rejection logic
  }
  
  const editArtist = (id) => {
    // Implement edit logic
  }
  
  const showStats = (id) => {
    // Implement stats display logic
  }
  
  const showMenu = (id) => {
    // Implement menu display logic
  }
  </script>