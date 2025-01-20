<template>
    <div class="flex min-h-screen bg-background text-text">
      <Sidebar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header :user="user" />
  
        <!-- En-tête avec revenus totaux -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">Revenus & Analyses</h1>
            <div class="flex gap-4">
              <DateRangePicker
                v-model="dateRange"
                @update="updateStats"
              />
              <button
                @click="downloadReport"
                class="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
              >
                <i class="fas fa-download"></i>
                Exporter
              </button>
            </div>
          </div>
  
          <div class="bg-card-bg rounded-2xl border border-border p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-text-secondary mb-1">Revenus totaux</p>
                <h2 class="text-3xl font-bold">{{ formatCurrency(totalRevenue) }}</h2>
              </div>
              <div class="flex items-center gap-2 text-green-500">
                <i class="fas fa-arrow-up"></i>
                <span>+{{ revenueGrowth }}% vs période précédente</span>
              </div>
            </div>
  
            <RevenueChart :data="revenueData" class="h-48" />
          </div>
        </div>
  
        <!-- Cartes de métriques -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            v-for="stat in revenueStats" 
            :key="stat.id" 
            :stat="stat"
          />
        </div>
  
        <!-- Sections détaillées -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Sources de revenus -->
          <div class="bg-card-bg rounded-2xl border border-border p-6">
            <h3 class="text-lg font-semibold mb-6">Sources de revenus</h3>
            <RevenueSourcesPieChart :data="revenueSources" />
          </div>
  
          <!-- Top pays -->
          <div class="bg-card-bg rounded-2xl border border-border p-6">
            <h3 class="text-lg font-semibold mb-6">Top pays générateurs</h3>
            <TopCountriesChart :data="topCountries" />
          </div>
        </div>
  
        <!-- Tableau des transactions -->
        <div class="bg-card-bg rounded-2xl border border-border p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold">Historique des transactions</h3>
            <div class="flex gap-2">
              <button 
                v-for="filter in transactionFilters"
                :key="filter.value"
                @click="currentTransactionFilter = filter.value"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors',
                  currentTransactionFilter === filter.value
                    ? 'bg-primary text-background'
                    : 'bg-background hover:bg-hover'
                ]"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
  
          <TransactionsTable 
            :transactions="filteredTransactions"
            class="w-full"
          />
        </div>
  
        <!-- Prévisions -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div class="bg-card-bg rounded-2xl border border-border p-6">
            <h3 class="text-lg font-semibold mb-6">Prévisions de revenus</h3>
            <RevenueForecastChart :data="forecastData" />
            <div class="mt-4 text-text-secondary">
              <p>Croissance estimée: <span class="text-primary">+{{ estimatedGrowth }}%</span></p>
              <p>Basé sur les {{ lastMonths }} derniers mois d'activité</p>
            </div>
          </div>
  
          <div class="bg-card-bg rounded-2xl border border-border p-6">
            <h3 class="text-lg font-semibold mb-6">Recommendations</h3>
            <div class="space-y-4">
              <RecommendationCard 
                v-for="recommendation in recommendations"
                :key="recommendation.id"
                :recommendation="recommendation"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Sidebar from '../../components/Sidebar.vue'
  import Header from '../../components/Header.vue'
  import RevenueChart from '../../components/artistComponents/revenus/RevenueChart.vue'
  import StatCard from '../../components/artistComponents/stats/StatCard.vue'
  import RevenueSourcesPieChart from '../../components/artistComponents/revenus/RevenueSourcesPieChart.vue'
  import TopCountriesChart from '../../components/artistComponents/revenus/TopCountriesChart.vue'
  import TransactionsTable from '../../components/artistComponents/revenus/TransactionsTable.vue'
  import RevenueForecastChart from '../../components/artistComponents/revenus/RevenueForecastChart.vue'
  import RecommendationCard from '../../components/artistComponents/revenus/RecommendationCard.vue'
  import DateRangePicker from '../../components/artistComponents/revenus/DateRangePicker.vue'
  
  // États
  const dateRange = ref({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date()
  })
  
  const currentTransactionFilter = ref('all')
  const totalRevenue = ref(12584.23)
  const revenueGrowth = ref(12.5)
  const lastMonths = ref(6)
  const estimatedGrowth = ref(15.3)
  
  // Données mockées
  const revenueData = ref({
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [{
      data: [1200, 1500, 1800, 2200, 2500, 3000]
    }]
  })
  
  const revenueStats = ref([
    {
      id: 1,
      label: 'Revenus par stream',
      value: '0.004€',
      trend: 5.2,
      icon: 'fa-play'
    },
    {
      id: 2,
      label: 'Nombre de streams',
      value: '452K',
      trend: 8.7,
      icon: 'fa-headphones'
    },
    {
      id: 3,
      label: 'Revenu moyen/auditeur',
      value: '0.12€',
      trend: 3.1,
      icon: 'fa-user'
    },
    {
      id: 4,
      label: 'Ventes directes',
      value: '2.5K€',
      trend: 15.3,
      icon: 'fa-shopping-cart'
    }
  ])
  
  const revenueSources = ref([
    { name: 'Streams', value: 65 },
    { name: 'Ventes directes', value: 20 },
    { name: 'Licences', value: 10 },
    { name: 'Autres', value: 5 }
  ])
  
  const topCountries = ref([
    { country: 'France', value: 4500 },
    { country: 'USA', value: 3200 },
    { country: 'Allemagne', value: 2100 },
    { country: 'UK', value: 1800 },
    { country: 'Canada', value: 1200 }
  ])
  
  const transactionFilters = [
    { label: 'Tout', value: 'all' },
    { label: 'Streams', value: 'streams' },
    { label: 'Ventes', value: 'sales' },
    { label: 'Licences', value: 'licenses' }
  ]
  
  const transactions = ref([
    {
      id: 1,
      date: '2024-01-20',
      type: 'streams',
      description: 'Revenus Spotify - Janvier',
      amount: 1250.45,
      status: 'completed'
    },
    // ... autres transactions
  ])
  
  const recommendations = ref([
    {
      id: 1,
      title: 'Optimisez vos playlists',
      description: 'Vos titres performent bien dans les playlists Rock. Considérez la création de plus de contenu dans ce genre.',
      impact: 'high',
      icon: 'fa-list'
    },
    {
      id: 2,
      title: 'Marché émergent',
      description: 'Le marché allemand montre un fort potentiel de croissance. Envisagez une promotion ciblée.',
      impact: 'medium',
      icon: 'fa-globe'
    }
  ])
  
  // Computed
  const filteredTransactions = computed(() => {
    if (currentTransactionFilter.value === 'all') return transactions.value
    return transactions.value.filter(t => t.type === currentTransactionFilter.value)
  })
  
  // Méthodes
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value)
  }
  
  const updateStats = () => {
    // Logique de mise à jour des statistiques
    console.log('Updating stats...', dateRange.value)
  }
  
  const downloadReport = () => {
    // Logique d'export du rapport
    console.log('Downloading report...')
  }
  </script>