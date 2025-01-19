<!-- components/finance/FinanceOverview.vue -->
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div 
        v-for="card in financeCards" 
        :key="card.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex justify-between items-center mb-4">
          <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary">
            <i :class="['fas', card.icon]"></i>
          </div>
          <div :class="['flex items-center gap-2 text-sm', getTrendClass(card.trend)]">
            <i :class="['fas', getTrendIcon(card.trend)]"></i>
            {{ card.trend }}
          </div>
        </div>
        <div class="text-2xl font-bold mb-2">{{ card.value }}</div>
        <div class="text-text-secondary text-sm">{{ card.label }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FinanceOverview',
    data() {
      return {
        financeCards: [
          {
            id: 1,
            icon: 'fa-wallet',
            value: '€85,432',
            label: 'Revenus Totaux',
            trend: '+15.2%'
          },
          {
            id: 2,
            icon: 'fa-clock',
            value: '€12,845',
            label: 'En Attente',
            trend: '+8.7%'
          },
          {
            id: 3,
            icon: 'fa-exchange-alt',
            value: '2,541',
            label: 'Transactions',
            trend: '+12.3%'
          },
          {
            id: 4,
            icon: 'fa-chart-pie',
            value: '€45.2K',
            label: 'Commissions',
            trend: '+5.8%'
          }
        ]
      }
    },
    methods: {
      getTrendClass(trend) {
        return trend.startsWith('+') ? 'text-success' : 'text-danger'
      },
      getTrendIcon(trend) {
        return trend.startsWith('+') ? 'fa-arrow-up' : 'fa-arrow-down'
      }
    }
  }
  </script>