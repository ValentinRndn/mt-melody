<!-- components/finance/QuickActions.vue -->
<template>
    <div class="flex flex-wrap gap-4 mb-8">
      <button 
        v-for="action in actions"
        :key="action.id"
        @click="action.handler"
        :class="[
          'flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300',
          action.primary ? 
            'bg-primary text-background hover:opacity-90' : 
            'bg-card-bg hover:bg-hover text-text hover:text-primary border border-border'
        ]"
      >
        <i :class="['fas', action.icon]"></i>
        {{ action.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuickActions',
    data() {
      return {
        actions: [
          {
            id: 1,
            label: 'Initier les versements',
            icon: 'fa-paper-plane',
            primary: true,
            handler: () => this.initiatePayouts()
          },
          {
            id: 2,
            label: 'Exporter les transactions',
            icon: 'fa-file-export',
            handler: () => this.exportTransactions()
          },
          {
            id: 3,
            label: 'Paramètres de paiement',
            icon: 'fa-cog',
            handler: () => this.showPayoutSettings()
          },
          {
            id: 4,
            label: 'Générer un rapport',
            icon: 'fa-file-alt',
            handler: () => this.generateReport()
          }
        ]
      }
    },
    methods: {
      initiatePayouts() {
        // Implémenter la logique
      },
      exportTransactions() {
        // Implémenter la logique
      },
      showPayoutSettings() {
        // Implémenter la logique
      },
      generateReport() {
        // Implémenter la logique
      }
    }
  }
  </script>