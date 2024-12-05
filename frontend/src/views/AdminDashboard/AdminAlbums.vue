<template>
    <div class="flex min-h-screen bg-background text-text">
      <Navbar />
      <div class="flex-1 ml-4">
        <Header />
        <ControlsSection @search="handleSearch" @filter="handleFilter" />
        <AlbumsGrid />
        <StatsOverview />
        <ModerationSection />
        <ChartsSection />
      </div>
    </div>
  </template>
  
  <script>
import Navbar from '../../components/Navbar.vue';
  import Header from "../../components/Header.vue";
  import ControlsSection from "../../components/ControlsSection.vue";
  import StatsOverview from "../../components/StatsOverview.vue";
  import AlbumsGrid from "../../components/AlbumsGrid.vue";
  import ModerationSection from "../../components/ModerationSection.vue";
  import ChartsSection from "../../components/ChartsSection.vue";
  
  export default {
    components: {
      Navbar,
      Header,
      ControlsSection,
      AlbumsGrid,
      StatsOverview,
      ModerationSection,
      ChartsSection,
    },
    methods: {
    handleSearch(searchTerm) {
      console.log("Recherche:", searchTerm);
      // Implémentez la logique de recherche ici
    },
    handleFilter(filterType) {
      console.log("Filtre actif:", filterType);
      // Implémentez la logique de filtrage ici
    },
  },
  };
  </script>
  
  <style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.0/dist/tailwind.min.css";

  </style>
  