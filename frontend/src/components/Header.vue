<template>
    <header class="flex justify-between items-center p-6">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background">
          <i class="fas fa-user"></i>
        </div>
        <div>
          <h3 class="font-bold">Admin Principal</h3>
          <small class="text-text-secondary">Super Administrateur</small>
        </div>
      </div>
      <button @click="toggleTheme" class="text-lg">
        <i :class="['fas', isLight ? 'fa-sun' : 'fa-moon']"></i>
      </button>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLight: false,
      };
    },
    methods: {
      toggleTheme() {
        this.isLight = !this.isLight;
        document.documentElement.setAttribute(
          "data-theme",
          this.isLight ? "light" : "dark"
        );
      },
    },
  };
  </script>
  