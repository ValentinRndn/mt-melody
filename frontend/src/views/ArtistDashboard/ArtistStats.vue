<template>
    <div class="flex min-h-screen bg-background text-text">
      <Sidebar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header 
          :user="user"
          @upload="showUploadModal = true"
        />
  
        <!-- Sélecteurs de période -->
        <div class="flex flex-wrap gap-4 mb-8">
          <DateRangePicker
            v-model="dateRange"
            @update="updateStats"
          />
          <div class="flex gap-2">
            <button
              v-for="period in timePeriods"
              :key="period.value"
              @click="selectPeriod(period.value)"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200',
                'border border-border',
                selectedPeriod === period.value
                  ? 'bg-primary text-background'
                  : 'bg-card-bg hover:bg-hover'
              ]"
            >
              {{ period.label }}
            </button>
          </div>
        </div>
  
        <!-- Statistiques principales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            v-for="stat in mainStats"
            :key="stat.id"
            :stat="stat"
            :trend="stat.trend"
          />
        </div>
  
        <!-- Graphiques -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ListeningTrendsChart 
            :data="listeningTrends"
            class="bg-card-bg rounded-2xl border border-border p-6"
          />
          <GeographicDistributionChart 
            :data="geographicData"
            class="bg-card-bg rounded-2xl border border-border p-6"
          />
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TopTracksTable 
            :tracks="topTracks"
            class="bg-card-bg rounded-2xl border border-border p-6"
          />
          <ListenersDemographics 
            :data="demographicsData"
            class="bg-card-bg rounded-2xl border border-border p-6"
          />
        </div>
  
        <!-- Insights -->
        <div class="bg-card-bg rounded-2xl border border-border p-6 mb-8">
          <h3 class="text-xl font-semibold mb-4">Insights</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InsightCard 
              v-for="insight in insights"
              :key="insight.id"
              :insight="insight"
            />
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import Sidebar from '../../components/Sidebar.vue'
  import Header from '../../components/Header.vue'
  import DateRangePicker from '../../components/artistComponents/stats/DateRangePicker.vue'
  import StatCard from '../../components/artistComponents/stats/StatCard.vue'
  import ListeningTrendsChart from '../../components/artistComponents/stats/ListeningTrendsChart.vue'
  import GeographicDistributionChart from '../../components/artistComponents/stats/GeographicDistributionChart.vue'
  import TopTracksTable from '../../components/artistComponents/stats/TopTracksTable.vue'
  import ListenersDemographics from '../../components/artistComponents/stats/ListenersDemographics.vue'
  import InsightCard from '../../components/artistComponents/stats/InsightCard.vue'
  
  const dateRange = ref({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date()
  })
  
  const selectedPeriod = ref('30d')
  
  const timePeriods = [
    { label: '7 jours', value: '7d' },
    { label: '30 jours', value: '30d' },
    { label: '3 mois', value: '3m' },
    { label: '12 mois', value: '12m' },
  ]
  
  const user = reactive({
    name: 'John Doe',
    role: 'Artiste'
  })
  
  const mainStats = reactive([
    {
      id: 1,
      label: 'Écoutes totales',
      value: '45.2K',
      trend: 12.5,
      icon: 'fa-play'
    },
    {
      id: 2,
      label: 'Nouveaux auditeurs',
      value: '2.5K',
      trend: 8.3,
      icon: 'fa-users'
    },
    {
      id: 3,
      label: 'Temps d\'écoute moyen',
      value: '3:45',
      trend: -2.1,
      icon: 'fa-clock'
    },
    {
      id: 4,
      label: 'Taux d\'engagement',
      value: '24.8%',
      trend: 5.7,
      icon: 'fa-heart'
    }
  ])
  
  const listeningTrends = reactive({
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [{
      label: 'Écoutes',
      data: [1200, 1900, 1500, 2100, 2500, 1800, 1600]
    }]
  })
  
  const geographicData = reactive([
    { country: 'France', value: 45 },
    { country: 'USA', value: 25 },
    { country: 'UK', value: 15 },
    { country: 'Germany', value: 10 },
    { country: 'Others', value: 5 }
  ])
  
  const topTracks = reactive([
    {
      id: 1,
      title: 'Summer Vibes',
      plays: 12500,
      trend: 15.2,
      duration: '3:45'
    },
    // ... autres tracks
  ])
  
  const demographicsData = reactive({
    age: [
      { group: '18-24', value: 35 },
      { group: '25-34', value: 40 },
      { group: '35-44', value: 15 },
      { group: '45+', value: 10 }
    ],
    gender: [
      { label: 'Homme', value: 55 },
      { label: 'Femme', value: 42 },
      { label: 'Autre', value: 3 }
    ]
  })
  
  const insights = reactive([
    {
      id: 1,
      title: 'Pic d\'audience',
      description: 'Vos auditeurs sont plus actifs entre 18h et 22h',
      icon: 'fa-clock',
      trend: 'positive'
    },
    {
      id: 2,
      title: 'Genre populaire',
      description: 'Le genre Pop performe le mieux auprès de votre audience',
      icon: 'fa-music',
      trend: 'neutral'
    },
    {
      id: 3,
      title: 'Opportunité de croissance',
      description: 'Potentiel de croissance identifié sur le marché américain',
      icon: 'fa-chart-line',
      trend: 'positive'
    }
  ])
  
  const selectPeriod = (period) => {
    selectedPeriod.value = period
    // Mettre à jour les statistiques en fonction de la période
    updateStats()
  }
  
  const updateStats = () => {
    // Logique de mise à jour des statistiques
    console.log('Updating stats...', dateRange.value, selectedPeriod.value)
  }
  </script>