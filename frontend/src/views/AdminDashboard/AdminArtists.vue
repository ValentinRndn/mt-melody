<template>
  <div class="flex min-h-screen bg-background text-text">
    <Navbar />
    
    <main class="flex-1 ml-[280px] p-8">
      <Header />

      <!-- Search and Filter Section -->
      <div class="flex flex-wrap justify-between items-center gap-4 mb-8">
        <SearchBar @search="handleSearch" />
        <FilterButtons 
          :filters="filters"
          :activeFilter="activeFilter"
          @filter="handleFilter"
        />
      </div>

      <!-- Pending Requests Section -->
      <PendingRequests 
        :requests="pendingRequests"
        @approve="approveRequest"
        @reject="rejectRequest"
      />

      <!-- Artists Grid -->
      <ArtistsGrid 
        :artists="filteredArtists"
        @edit="editArtist"
        @showStats="showStats"
        @showOptions="showOptions"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '../../components/Navbar.vue'
import Header from '../../components/Header.vue'
import SearchBar from '../../components/artists/SearchBar.vue'
import FilterButtons from '../../components/artists/FilterButtons.vue'
import PendingRequests from '../../components/artists/PendingRequests.vue'
import ArtistsGrid from '../../components/artists/ArtistsGrid.vue'

// State
const searchQuery = ref('')
const activeFilter = ref('all')
const artists = ref([
  {
    id: 1,
    name: 'John Doe',
    genres: ['Pop', 'Rock'],
    status: 'active',
    coverImage: 'url-to-cover',
    avatarImage: 'url-to-avatar',
    stats: {
      listens: '45K',
      albums: '12',
      rating: '4.8'
    }
  },
  // ... autres artistes
])

const pendingRequests = ref([
  {
    id: 1,
    name: 'Sarah Connor',
    genres: ['Pop', 'Electronic'],
    joinDate: '22/06/2023',
    avatarImage: 'url-to-avatar'
  },
  // ... autres demandes
])

const filters = [
  { id: 'all', label: 'Tous', count: 150 },
  { id: 'active', label: 'Actifs', count: 120 },
  { id: 'pending', label: 'En attente', count: 15 },
  { id: 'inactive', label: 'Inactifs', count: 15 }
]

// Computed
const filteredArtists = computed(() => {
  let filtered = artists.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(artist => 
      artist.name.toLowerCase().includes(query) ||
      artist.genres.some(genre => genre.toLowerCase().includes(query))
    )
  }

  if (activeFilter.value !== 'all') {
    filtered = filtered.filter(artist => artist.status === activeFilter.value)
  }

  return filtered
})

// Methods
const handleSearch = (query) => {
  searchQuery.value = query
}

const handleFilter = (filter) => {
  activeFilter.value = filter
}

const approveRequest = (requestId) => {
  // Logique d'approbation
}

const rejectRequest = (requestId) => {
  // Logique de rejet
}

const editArtist = (artist) => {
  // Logique d'édition
}

const showStats = (artist) => {
  // Logique d'affichage des stats
}

const showOptions = (artist) => {
  // Logique d'affichage des options
}
</script>