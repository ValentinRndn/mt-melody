<!-- components/finance/RecentTransactions.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h3 class="text-lg font-semibold">Transactions Récentes</h3>
        <div class="flex gap-2">
          <button 
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-300',
              activeFilter === filter.id 
                ? 'bg-primary text-background' 
                : 'bg-card-bg hover:bg-hover'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
  
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-text-secondary border-b border-border">
              <th 
                v-for="header in tableHeaders"
                :key="header"
                class="py-4 px-4 text-left"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="transaction in filteredTransactions"
              :key="transaction.id"
              class="border-b border-border hover:bg-hover transition-colors duration-200"
            >
              <td class="py-4 px-4">{{ transaction.id }}</td>
              <td class="py-4 px-4">{{ transaction.artist }}</td>
              <td class="py-4 px-4">{{ transaction.amount }}</td>
              <td class="py-4 px-4">{{ transaction.date }}</td>
              <td class="py-4 px-4">
                <span :class="getStatusClass(transaction.status)">
                  {{ transaction.status }}
                </span>
              </td>
              <td class="py-4 px-4">
                <button 
                  class="p-2 hover:bg-hover rounded-lg transition-colors duration-200"
                  @click="viewTransaction(transaction)"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecentTransactions',
    data() {
      return {
        activeFilter: 'all',
        filters: [
          { id: 'all', label: 'Toutes' },
          { id: 'completed', label: 'Complétées' },
          { id: 'pending', label: 'En attente' }
        ],
        tableHeaders: ['ID', 'Artiste', 'Montant', 'Date', 'Statut', 'Actions'],
        transactions: [
          {
            id: '#TRX-789',
            artist: 'John Doe',
            amount: '€1,234.56',
            date: '24/10/2024',
            status: 'Complété'
          },
          {
            id: '#TRX-790',
            artist: 'Jane Smith',
            amount: '€987.65',
            date: '24/10/2024',
            status: 'En attente'
          },
          {
            id: '#TRX-791',
            artist: 'Mike Johnson',
            amount: '€543.21',
            date: '24/10/2024',
            status: 'Échoué'
          }
        ]
      }
    },
    computed: {
      filteredTransactions() {
        if (this.activeFilter === 'all') return this.transactions
        return this.transactions.filter(t => 
          t.status.toLowerCase().includes(this.activeFilter)
        )
      }
    },
    methods: {
      getStatusClass(status) {
        const baseClasses = 'px-3 py-1 rounded-full text-sm'
        const statusClasses = {
          'Complété': 'bg-success/10 text-success',
          'En attente': 'bg-warning/10 text-warning',
          'Échoué': 'bg-danger/10 text-danger'
        }
        return `${baseClasses} ${statusClasses[status]}`
      },
      viewTransaction(transaction) {
        // Implémenter la logique de visualisation
      }
    }
  }
  </script>