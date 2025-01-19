<template>
  <div class="flex min-h-screen bg-background text-text">
    <Navbar />
    
    <main class="flex-1 ml-[280px] p-8">
      <Header />
      
      <!-- Stats Grid -->
      <StatsGrid :stats="statsData" />

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div>
          <GenreDistributionChart />
        </div>
      </div>

      <!-- Recent Activity -->
      <RecentActivity :activities="recentActivities" />
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Navbar from '../../components/Navbar.vue'
import Header from '../../components/Header.vue'
// import StatsGrid from '../../components/AdminHome/StatsGrid.vue'
// import PerformanceChart from '../../components/AdminHome/PerformanceChart.vue'
// import GenreDistributionChart from '../../components/AdminHome/GenreDistributionChart.vue'
// import RecentActivity from '../../components/AdminHome/RecentActivity.vue'

const statsData = reactive([
  {
    id: 1,
    icon: 'fas fa-users',
    value: '1,234',
    label: 'Artistes Actifs'
  },
  {
    id: 2,
    icon: 'fas fa-music',
    value: '5,678',
    label: 'Titres Publiés'
  },
  {
    id: 3,
    icon: 'fas fa-play',
    value: '2.5M',
    label: 'Écoutes ce mois'
  },
  {
    id: 4,
    icon: 'fas fa-dollar-sign',
    value: '€85.4K',
    label: 'Revenus ce mois'
  }
])

const recentActivities = reactive([
  {
    id: 1,
    icon: 'fas fa-upload',
    title: 'Nouvel album uploadé',
    description: 'Il y a 2 heures - par Artiste XYZ'
  },
  {
    id: 2,
    icon: 'fas fa-user-plus',
    title: 'Nouvel artiste inscrit',
    description: 'Il y a 4 heures - Artiste ABC'
  },
  {
    id: 3,
    icon: 'fas fa-chart-up',
    title: 'Pic d\'écoutes détecté',
    description: 'Il y a 6 heures - Album "Summer Vibes"'
  }
])
</script>