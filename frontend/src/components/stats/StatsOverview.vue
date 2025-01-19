<!-- components/stats/StatsOverview.vue -->
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div 
        v-for="stat in stats" 
        :key="stat.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-transform duration-300 hover:-translate-y-1"
      >
        <div class="flex justify-between items-center mb-4">
          <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary">
            <i :class="['fas', stat.icon]"></i>
          </div>
          <div :class="['flex items-center gap-2 text-sm', stat.trendClass]">
            <i :class="['fas', stat.trendIcon]"></i>
            {{ stat.trend }}
          </div>
        </div>
        <div class="text-2xl font-bold mb-2">{{ stat.value }}</div>
        <div class="text-text-secondary text-sm">{{ stat.label }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatsOverview',
    data() {
      return {
        stats: [
          {
            id: 1,
            icon: 'fa-users',
            value: '145,832',
            label: 'Utilisateurs Totaux',
            trend: '+12.5%',
            trendIcon: 'fa-arrow-up',
            trendClass: 'text-success'
          },
          {
            id: 2,
            icon: 'fa-play',
            value: '2.5M',
            label: 'Écoutes Totales',
            trend: '+8.3%',
            trendIcon: 'fa-arrow-up',
            trendClass: 'text-success'
          },
          {
            id: 3,
            icon: 'fa-euro-sign',
            value: '€85.4K',
            label: 'Chiffre d\'Affaires',
            trend: '+15.2%',
            trendIcon: 'fa-arrow-up',
            trendClass: 'text-success'
          },
          {
            id: 4,
            icon: 'fa-chart-line',
            value: '76%',
            label: 'Taux d\'Engagement',
            trend: '+5.7%',
            trendIcon: 'fa-arrow-up',
            trendClass: 'text-success'
          }
        ]
      }
    }
  }
  </script>