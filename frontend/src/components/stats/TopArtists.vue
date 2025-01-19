<!-- components/stats/TopArtists.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <h3 class="text-lg font-semibold mb-6">Top 10 Artistes du Mois</h3>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-text-secondary border-b border-border">
              <th class="py-4 px-4 text-left">Artiste</th>
              <th class="py-4 px-4 text-left">Écoutes</th>
              <th class="py-4 px-4 text-left">Revenus</th>
              <th class="py-4 px-4 text-left">Évolution</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="artist in topArtists" 
              :key="artist.id"
              class="border-b border-border hover:bg-hover transition-colors duration-200"
            >
              <td class="py-4 px-4">{{ artist.name }}</td>
              <td class="py-4 px-4">{{ artist.listens }}</td>
              <td class="py-4 px-4">{{ artist.revenue }}</td>
              <td :class="['py-4 px-4', getTrendClass(artist.trend)]">
                {{ artist.trend }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopArtists',
    data() {
      return {
        topArtists: [
          {
            id: 1,
            name: 'John Doe',
            listens: '452K',
            revenue: '€8,450',
            trend: '+15.2%'
          },
          {
            id: 2,
            name: 'Jane Smith',
            listens: '387K',
            revenue: '€7,230',
            trend: '+12.8%'
          },
          {
            id: 3,
            name: 'Mike Johnson',
            listens: '325K',
            revenue: '€6,180',
            trend: '+9.5%'
          }
          // Ajoutez plus d'artistes selon vos besoins
        ]
      }
    },
    methods: {
      getTrendClass(trend) {
        return trend.startsWith('+') ? 'text-success' : 'text-danger'
      }
    }
  }
  </script>