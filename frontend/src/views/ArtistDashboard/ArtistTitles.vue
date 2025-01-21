<template>
    <div class="flex min-h-screen bg-background text-text">
      <Sidebar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header 
          :user="user"
          @upload="showUploadModal = true"
        />
  
        <!-- Filtres et Recherche -->
        <div class="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div class="flex gap-4">
            <TrackFilters 
              :filters="filters"
              :activeFilter="activeFilter"
              @filter-change="handleFilterChange"
            />
          </div>
          <SearchBar @search="handleSearch" />
        </div>
  
        <!-- Stats rapides -->
        <div class="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-card-bg rounded-2xl p-6 border border-border">
            <div class="text-text-secondary mb-2">Total des titres</div>
            <div class="text-2xl font-bold">{{ totalTracks }}</div>
          </div>
          <div class="bg-card-bg rounded-2xl p-6 border border-border">
            <div class="text-text-secondary mb-2">Écoutes totales</div>
            <div class="text-2xl font-bold">{{ totalListens }}</div>
          </div>
          <div class="bg-card-bg rounded-2xl p-6 border border-border">
            <div class="text-text-secondary mb-2">Revenus générés</div>
            <div class="text-2xl font-bold">{{ totalRevenue }}</div>
          </div>
        </div>
  
        <!-- Liste des titres -->
        <TracksList 
          :tracks="filteredTracks"
          @edit="handleEdit"
          @delete="handleDelete"
          @play="handlePlay"
        />
  
        <!-- Modals -->
        <UploadModal 
          v-if="showUploadModal"
          @close="showUploadModal = false"
          @upload="handleUpload"
        />
  
        <EditTrackModal
          v-if="showEditModal"
          :track="selectedTrack"
          @close="showEditModal = false"
          @save="handleSave"
        />
  
        <!-- Lecteur audio -->
        <AudioPlayer 
          v-if="currentTrack"
          :track="currentTrack"
          @close="currentTrack = null"
        />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Sidebar from '../../components/Sidebar.vue'
  import Header from '../../components/Header.vue'
  import TrackFilters from '../../components/artistComponents/titles/TrackFilters.vue'
  import SearchBar from '../../components/artistComponents/titles/SearchBar.vue'
  import TracksList from '../../components/artistComponents/titles/TracksList.vue'
  import UploadModal from '../../components/artistComponents/titles/UploadModal.vue'
  import EditTrackModal from '../../components/artistComponents/titles/EditTrackModal.vue'
  import AudioPlayer from '../../components/artistComponents/titles/AudioPlayer.vue'
  
  const showUploadModal = ref(false)
  const showEditModal = ref(false)
  const selectedTrack = ref(null)
  const currentTrack = ref(null)
  const searchQuery = ref('')
  const activeFilter = ref('all')
  
  const user = {
    name: 'John Doe',
    role: 'Artiste'
  }
  
  const filters = [
    { id: 'all', label: 'Tous les titres' },
    { id: 'published', label: 'Publiés' },
    { id: 'drafts', label: 'Brouillons' },
    { id: 'archived', label: 'Archivés' }
  ]
  
  const tracks = ref([
    {
      id: 1,
      title: 'Summer Vibes',
      coverUrl: '/covers/summer-vibes.jpg',
      duration: '3:45',
      genre: 'Pop',
      status: 'published',
      listens: 12500,
      revenue: '€1,250',
      uploadDate: '2024-01-15'
    },
    // ... autres titres
  ])
  
  const totalTracks = computed(() => tracks.value.length)
  const totalListens = computed(() => 
    tracks.value.reduce((sum, track) => sum + track.listens, 0)
  )
  const totalRevenue = computed(() => 
    '€' + tracks.value.reduce((sum, track) => sum + parseFloat(track.revenue.slice(1)), 0)
  )
  
  const filteredTracks = computed(() => {
    return tracks.value
      .filter(track => 
        (activeFilter.value === 'all' || track.status === activeFilter.value) &&
        track.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
  })
  
  const handleFilterChange = (filter) => {
    activeFilter.value = filter
  }
  
  const handleSearch = (query) => {
    searchQuery.value = query
  }
  
  const handleEdit = (track) => {
    selectedTrack.value = track
    showEditModal.value = true
  }
  
  const handleDelete = (track) => {
    // Logique de suppression
  }
  
  const handlePlay = (track) => {
    currentTrack.value = track
  }
  
  const handleSave = (track) => {
    // Logique de sauvegarde
    showEditModal.value = false
  }
  
  const handleUpload = (files) => {
    // Logique d'upload
    showUploadModal.value = false
  }
  </script>