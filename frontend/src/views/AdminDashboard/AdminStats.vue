<!-- views/AdminDashboard/AdminStats.vue -->
<template>
    <div class="flex min-h-screen bg-background text-text transition-all duration-300">
      <Navbar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header />
        
        <!-- Sélecteur de dates -->
        <DateSelector />
        
        <!-- Stats Overview -->
        <StatsOverview />
        
        <!-- Graphiques -->
        <ChartsGrid />
        
        <!-- Tables -->
        <TopArtists />
        <SupportStats />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '../../components/Navbar.vue'
  import Header from '../../components/Header.vue'
  import DateSelector from '../../components/stats/DateSelector.vue'
  import StatsOverview from '../../components/stats/StatsOverview.vue'
  import ChartsGrid from '../../components/stats/ChartsGrid.vue'
  import TopArtists from '../../components/stats/TopArtists.vue'
  import SupportStats from '../../components/stats/SupportStats.vue'
  
  export default {
    name: 'AdminStats',
    components: {
      Navbar,
      Header,
      DateSelector,
      StatsOverview,
      ChartsGrid,
      TopArtists,
      SupportStats
    }
  }
  </script>