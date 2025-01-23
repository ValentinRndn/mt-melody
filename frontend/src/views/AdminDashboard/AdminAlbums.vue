<template>
  <div class="flex min-h-screen bg-background text-text">
    <Navbar />
    <main class="flex-1 ml-[280px] p-8">
      <Header />
      
      <!-- Controls Section -->
      <ControlsSection 
        @search="handleSearch"
        @filter="handleFilter"
      />

      <!-- Stats Overview -->
      <StatsOverview :stats="statsData" />

      <!-- Moderation Section -->
      <ModerationSection 
        :pendingReleases="pendingReleases"
        @approve="approveRelease"
        @reject="rejectRelease"
      />

      <!-- Albums Grid -->
      <AlbumsGrid 
        :albums="filteredAlbums"
        @edit="editRelease"
        @showStats="showStats"
        @moderate="showModeration"
      />

      <!-- Charts Section -->
      <ChartsSection />
    </main>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Header from '../../components/Header.vue'
import StatsOverview from '../../components/albums/StatsOverview.vue'
import ModerationSection from '../../components/albums/ModerationSection.vue'
import ControlsSection from '../../components/albums/ControlsSection.vue'
import AlbumsGrid from '../../components/albums/AlbumsGrid.vue'
import ChartsSection from '../../components/albums/ChartsSection.vue'

export default {
  name: 'AlbumsAdmin',
  components: {
    Navbar,
    Header,
    ControlsSection,
    StatsOverview,
    ModerationSection,
    AlbumsGrid,
    ChartsSection
  },
  data() {
    return {
      searchTerm: '',
      activeFilter: 'all',
      statsData: [
        { 
          id: 1, 
          icon: 'fas fa-music fa-xl', 
          value: '350', 
          label: 'Total des Sorties' 
        },
        { 
          id: 2, 
          icon: 'fas fa-play fa-xl', 
          value: '1.2M', 
          label: 'Écoutes ce mois' 
        },
        { 
          id: 3, 
          icon: 'fas fa-star fa-xl', 
          value: '4.8', 
          label: 'Note moyenne' 
        },
        { 
          id: 4, 
          icon: 'fas fa-euro-sign fa-xl', 
          value: '25.4K', 
          label: 'Revenus ce mois' 
        }
      ],
      pendingReleases: [
        {
          id: 1,
          title: 'Summer Vibes',
          artist: 'John Doe',
          type: 'Album',
          tracks: 12,
          genres: ['Pop', 'Electronic'],
          submitDate: '24/10/2024'
        },
        // ... autres releases en attente
      ],
      albums: [
        {
          id: 1,
          title: 'Midnight Dreams',
          artist: 'Jane Smith',
          type: 'Album',
          status: 'Tendance',
          genres: ['Pop', 'Electronic'],
          tracks: 12,
          duration: '48 min',
          stats: {
            listens: '125K',
            rating: 4.9,
            revenue: '€2.3K'
          }
        },
        // ... autres albums
      ]
    }
  },
  computed: {
    filteredAlbums() {
      let filtered = this.albums

      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase()
        filtered = filtered.filter(album => 
          album.title.toLowerCase().includes(term) ||
          album.artist.toLowerCase().includes(term) ||
          album.genres.some(genre => genre.toLowerCase().includes(term))
        )
      }

      if (this.activeFilter !== 'all') {
        filtered = filtered.filter(album => album.type.toLowerCase() === this.activeFilter)
      }

      return filtered
    }
  },
  methods: {
    handleSearch(term) {
      this.searchTerm = term
    },
    handleFilter(filter) {
      this.activeFilter = filter
    },
    approveRelease(releaseId) {
      // Implémenter la logique d'approbation
    },
    rejectRelease(releaseId) {
      // Implémenter la logique de rejet
    },
    editRelease(album) {
      // Implémenter la logique d'édition
    },
    showStats(album) {
      // Implémenter l'affichage des statistiques
    },
    showModeration(album) {
      // Implémenter les options de modération
    }
  }
}
</script>