<template>
    <div class="bg-card-bg rounded-lg p-6 border border-border mb-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold text-text">Sorties en attente</h3>
        <span class="bg-primary text-background px-3 py-1 rounded-full text-sm">
          {{ pendingReleases.length }} nouveaux
        </span>
      </div>
  
      <!-- Pending Releases -->
      <div class="grid gap-4">
        <div
          v-for="release in pendingReleases"
          :key="release.id"
          class="flex items-center gap-4 p-4 bg-background border border-border rounded-lg"
        >
          <div
            class="w-20 h-20 bg-cover bg-center rounded-lg"
            :style="{ backgroundImage: `url(${release.cover})` }"
          ></div>
          <div class="flex-1">
            <h4 class="text-base font-bold text-text mb-1">{{ release.title }}</h4>
            <p class="text-sm text-text-secondary">
              {{ release.artist }} • {{ release.type }} • {{ release.details }}
              <br />
              Soumis le {{ release.date }}
            </p>
          </div>
          <div class="flex gap-2">
            <button
              class="bg-success text-white px-4 py-2 rounded-lg hover:bg-primary transition"
              @click="approveRelease(release.id)"
            >
              Approuver
            </button>
            <button
              class="bg-danger text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              @click="rejectRelease(release.id)"
            >
              Rejeter
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
        pendingReleases: [
          {
            id: 1,
            title: "Summer Vibes",
            artist: "John Doe",
            type: "Album",
            details: "12 titres • Pop, Electronic",
            date: "24/10/2024",
            cover: "/api/placeholder/200/200",
          },
          {
            id: 2,
            title: "Dancing in the Rain",
            artist: "Sarah Connor",
            type: "Single",
            details: "Dance, Electronic",
            date: "24/10/2024",
            cover: "/api/placeholder/200/200",
          },
        ],
      };
    },
    methods: {
      approveRelease(id) {
        const release = this.pendingReleases.find((item) => item.id === id);
        alert(`La sortie "${release.title}" a été approuvée.`);
        // Supprimez l'élément approuvé de la liste
        this.pendingReleases = this.pendingReleases.filter((item) => item.id !== id);
      },
      rejectRelease(id) {
        const release = this.pendingReleases.find((item) => item.id === id);
        alert(`La sortie "${release.title}" a été rejetée.`);
        // Supprimez l'élément rejeté de la liste
        this.pendingReleases = this.pendingReleases.filter((item) => item.id !== id);
      },
    },
  };
  </script>
  