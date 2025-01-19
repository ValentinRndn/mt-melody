<!-- components/finance/PayoutSettings.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <h3 class="text-lg font-semibold mb-6">Paramètres de Paiement</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="setting in settings"
          :key="setting.id"
          class="p-4 bg-background rounded-lg border border-border"
        >
          <div class="font-semibold mb-2">{{ setting.title }}</div>
          <div class="text-text-secondary">{{ setting.value }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PayoutSettings',
    data() {
      return {
        settings: [
          {
            id: 1,
            title: 'Seuil de paiement',
            value: '€50.00'
          },
          {
            id: 2,
            title: 'Fréquence des versements',
            value: 'Mensuel'
          },
          {
            id: 3,
            title: 'Commission plateforme',
            value: '10%'
          },
          {
            id: 4,
            title: 'Méthode de paiement par défaut',
            value: 'Virement bancaire'
          }
        ]
      }
    }
  }
  </script>