<template>
    <div :class="theme">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, provide } from 'vue'
  
  const theme = ref('dark')
  
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme.value === 'light' ? 'light' : '')
  }
  
  provide('theme', theme)
  provide('toggleTheme', toggleTheme)
  </script>