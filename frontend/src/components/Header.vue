<template>
  <header class="flex justify-between items-center mb-8">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background">
        <i class="fas fa-user"></i>
      </div>
      <div>
        <h3 class="font-semibold">Admin Principal</h3>
        <p class="text-text-secondary text-sm">Super Administrateur</p>
      </div>
    </div>
    
    <button 
      @click="toggleTheme"
      class="p-2 hover:bg-hover rounded-full transition-colors"
    >
      <i :class="['fas', isDark ? 'fa-sun' : 'fa-moon']"></i>
    </button>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>