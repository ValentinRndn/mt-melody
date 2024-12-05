<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="album in albums"
        :key="album.id"
        :data-type="album.type"
        class="bg-card-bg rounded-lg overflow-hidden border border-border shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
      >
        <!-- Album Cover -->
        <div
          class="relative h-48 bg-cover bg-center"
          :style="{ backgroundImage: `url(${album.cover})` }"
        >
          <span class="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
            {{ album.type }}
          </span>
          <span
            class="absolute top-4 right-4 text-xs px-3 py-1 rounded-full"
            :class="statusClasses(album.status)"
          >
            {{ album.status }}
          </span>
        </div>
  
        <!-- Album Info -->
        <div class="p-4">
          <h4 class="text-lg font-bold text-text mb-1">{{ album.title }}</h4>
          <p class="text-sm text-primary mb-2">{{ album.artist }}</p>
          <p class="text-xs text-text-secondary">{{ album.meta }}</p>
  
          <!-- Album Stats -->
          <div class="grid grid-cols-3 gap-4 border-t border-b border-border py-4 my-4 text-center">
            <div>
              <div class="text-primary font-bold">{{ album.stats.plays }}</div>
              <div class="text-xs text-text-secondary">Écoutes</div>
            </div>
            <div>
              <div class="text-primary font-bold">{{ album.stats.rating }}</div>
              <div class="text-xs text-text-secondary">Note</div>
            </div>
            <div>
              <div class="text-primary font-bold">{{ album.stats.revenue }}</div>
              <div class="text-xs text-text-secondary">Revenus</div>
            </div>
          </div>
  
          <!-- Album Actions -->
          <div class="flex gap-2">
            <button
              class="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-hover hover:bg-primary hover:text-background transition"
              @click="editAlbum(album.id)"
            >
              <i class="fas fa-edit"></i> Éditer
            </button>
            <button
              class="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-hover hover:bg-primary hover:text-background transition"
              @click="showStats(album.id)"
            >
              <i class="fas fa-chart-line"></i> Stats
            </button>
            <button
              class="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-hover hover:bg-danger hover:text-background transition"
              @click="moderateAlbum(album.id)"
            >
              <i class="fas fa-shield-alt"></i> Modérer
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        albums: [
          {
            id: 1,
            title: "Midnight Dreams",
            artist: "Jane Smith",
            type: "Album",
            status: "Tendance",
            meta: "Pop, Electronic • 12 titres • 48 min",
            cover: "/api/placeholder/400/200",
            stats: {
              plays: "125K",
              rating: "4.9",
              revenue: "€2.3K",
            },
          },
          {
            id: 2,
            title: "Dancing in the Rain",
            artist: "Mike Johnson",
            type: "Single",
            status: "Nouveau",
            meta: "Dance • 1 titre • 3:45 min",
            cover: "/api/placeholder/400/200",
            stats: {
              plays: "45K",
              rating: "4.7",
              revenue: "€850",
            },
          },
          // Ajoutez plus d'albums ici
        ],
      };
    },
    methods: {
      editAlbum(id) {
        alert(`Édition de l'album avec l'ID ${id}`);
      },
      showStats(id) {
        alert(`Affichage des statistiques pour l'album avec l'ID ${id}`);
      },
      moderateAlbum(id) {
        alert(`Modération de l'album avec l'ID ${id}`);
      },
      statusClasses(status) {
        switch (status) {
          case "Tendance":
            return "bg-green-200 text-green-800";
          case "Nouveau":
            return "bg-blue-200 text-blue-800";
          case "En attente":
            return "bg-yellow-200 text-yellow-800";
          case "Signalé":
            return "bg-red-200 text-red-800";
          default:
            return "bg-gray-200 text-gray-800";
        }
      },
    },
  };
  </script>
  