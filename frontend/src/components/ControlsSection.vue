<template>
    <div class="bg-card-bg rounded-lg p-6 border border-border mb-6">
      <!-- Search Bar -->
      <div class="flex items-center bg-background border border-border rounded-lg px-4 py-2 mb-4">
        <i class="fas fa-search text-text-secondary mr-2"></i>
        <input
          type="text"
          placeholder="Rechercher un album, un single ou un artiste..."
          v-model="searchTerm"
          @input="onSearch"
          class="w-full bg-transparent outline-none text-text"
        />
      </div>
  
      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-4">
        <button
          v-for="filter in filters"
          :key="filter.type"
          @click="selectFilter(filter.type)"
          :class="[
            'px-4 py-2 rounded-lg border',
            filter.type === activeFilter
              ? 'bg-primary text-background border-primary'
              : 'bg-background text-text border-border hover:bg-hover'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: "",
        activeFilter: "all",
        filters: [
          { type: "all", label: "Tous (350)" },
          { type: "album", label: "Albums (150)" },
          { type: "single", label: "Singles (200)" },
          { type: "pending", label: "En attente (25)" },
          { type: "reported", label: "Signalés (5)" },
        ],
      };
    },
    methods: {
      onSearch() {
        this.$emit("search", this.searchTerm);
      },
      selectFilter(type) {
        this.activeFilter = type;
        this.$emit("filter", type);
      },
    },
  };
  </script>
  