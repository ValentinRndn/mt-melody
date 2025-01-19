<template>
    <div class="flex min-h-screen bg-background text-text">
      <Sidebar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header 
          :user="user"
          @upload="showUploadModal = true"
        />
  
        <StatsGrid :stats="statsData" />
  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div class="lg:col-span-2">
            <ListeningChart />
          </div>
          <div>
            <TopTracksChart />
          </div>
        </div>
  
        <RecentActivity :activities="recentActivities" />
  
        <UploadModal 
          v-if="showUploadModal"
          @close="showUploadModal = false"
          @upload="handleUpload"
        />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import Sidebar from '../../components/Sidebar.vue'
  import Header from '../../components/Header.vue'
  import StatsGrid from '../../components/artistComponents/home/StatsGrid.vue'
  import ListeningChart from '../../components/artistComponents/home/ListeningChart.vue'
  import TopTracksChart from '../../components/artistComponents/home/TopTracksChart.vue'
  import RecentActivity from '../../components/artistComponents/home/RecentActivity.vue'
  import UploadModal from '../../components/artistComponents/home.vue'
  
  const showUploadModal = ref(false)
  
  const user = reactive({
    name: 'John Doe',
    role: 'Artiste',
    avatar: null
  })
  
  const statsData = reactive([
    {
      id: 1,
      icon: 'fas fa-play',
      value: '45.2K',
      label: 'Écoutes ce mois'
    },
    {
      id: 2,
      icon: 'fas fa-music',
      value: '12',
      label: 'Titres publiés'
    },
    {
      id: 3,
      icon: 'fas fa-users',
      value: '2.5K',
      label: 'Auditeurs uniques'
    },
    {
      id: 4,
      icon: 'fas fa-euro-sign',
      value: '€1.2K',
      label: 'Revenus ce mois'
    }
  ])
  
  const recentActivities = reactive([
    {
      id: 1,
      icon: 'fas fa-upload',
      title: 'Nouveau titre uploadé',
      description: 'Il y a 2 heures - "Summer Vibes"'
    },
    {
      id: 2,
      icon: 'fas fa-play',
      title: 'Pic d\'écoutes atteint',
      description: 'Il y a 4 heures - 1000+ écoutes en une heure'
    },
    {
      id: 3,
      icon: 'fas fa-comment',
      title: 'Nouveau commentaire',
      description: 'Il y a 6 heures - sur "Night Drive"'
    }
  ])
  
  const handleUpload = (files) => {
    // Logique d'upload
    console.log('Files to upload:', files)
  }
  </script>