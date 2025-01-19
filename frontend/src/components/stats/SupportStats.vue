<!-- components/stats/SupportStats.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <h3 class="text-lg font-semibold mb-6">État du Support</h3>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-text-secondary border-b border-border">
              <th class="py-4 px-4 text-left">Catégorie</th>
              <th class="py-4 px-4 text-left">Tickets Ouverts</th>
              <th class="py-4 px-4 text-left">Temps Moyen</th>
              <th class="py-4 px-4 text-left">Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="category in supportCategories" 
              :key="category.id"
              class="border-b border-border hover:bg-hover transition-colors duration-200"
            >
              <td class="py-4 px-4">{{ category.name }}</td>
              <td class="py-4 px-4">{{ category.tickets }}</td>
              <td class="py-4 px-4">{{ category.avgTime }}</td>
              <td class="py-4 px-4">
                <div class="flex items-center">
                  <div 
                    class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden mr-2"
                  >
                    <div 
                      class="h-full bg-primary"
                      :style="{ width: category.satisfaction }"
                    ></div>
                  </div>
                  <span>{{ category.satisfaction }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SupportStats',
    data() {
      return {
        supportCategories: [
          {
            id: 1,
            name: 'Problèmes Techniques',
            tickets: 24,
            avgTime: '2h 15m',
            satisfaction: '92%'
          },
          {
            id: 2,
            name: 'Paiements',
            tickets: 18,
            avgTime: '1h 45m',
            satisfaction: '95%'
          },
          {
            id: 3,
            name: 'Compte Artiste',
            tickets: 31,
            avgTime: '3h 20m',
            satisfaction: '88%'
          }
        ]
      }
    }
  }
  </script>