<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-card-bg rounded-lg p-6 border border-border shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
      >
        <div class="w-12 h-12 flex items-center justify-center rounded-md bg-hover text-primary mb-4">
          <i :class="['fas', stat.icon, 'text-xl']"></i>
        </div>
        <div class="text-2xl font-bold text-primary mb-2">{{ stat.value }}</div>
        <div class="text-sm text-text-secondary">{{ stat.label }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stats: [
          {
            label: "Total des Sorties",
            value: "350",
            icon: "fa-music",
          },
          {
            label: "Écoutes ce mois",
            value: "1.2M",
            icon: "fa-play",
          },
          {
            label: "Note moyenne",
            value: "4.8",
            icon: "fa-star",
          },
          {
            label: "Revenus ce mois",
            value: "25.4K",
            icon: "fa-euro-sign",
          },
        ],
      };
    },
  };
  </script>
  