<template>
    <aside class="fixed w-[280px] h-screen bg-sidebar border-r border-border p-8 transition-all duration-300">
      <div class="flex items-center gap-4 mb-12 text-primary text-2xl font-bold">
        <i class="fas fa-music"></i>
        <span class="transition-opacity duration-300">MT Melody</span>
      </div>
  
      <nav class="space-y-2">
        <a 
          v-for="item in navItems"
          :key="item.path"
          :href="item.path"
          :class="[
            'flex items-center px-4 py-3 rounded-lg transition-all duration-200',
            'hover:bg-hover hover:text-primary',
            currentPath === item.path ? 'bg-hover text-primary' : 'text-text-secondary'
          ]"
        >
          <i :class="['fas', item.icon, 'w-6']"></i>
          <span class="ml-4">{{ item.label }}</span>
        </a>
      </nav>
    </aside>
  </template>
  
  <script setup>
  const currentPath = window.location.pathname
  
  const navItems = [
    { label: 'Tableau de bord', path: '/dashboard', icon: 'fa-home' },
    { label: 'Mes Titres', path: '/artistTitles', icon: 'fa-compact-disc' },
    { label: 'Statistiques', path: '/stats', icon: 'fa-chart-line' },
    { label: 'Revenus', path: '/revenue', icon: 'fa-dollar-sign' },
    { label: 'Paramètres', path: '/settings', icon: 'fa-cog' }
  ]
  </script>