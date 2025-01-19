<!-- components/stats/DateSelector.vue -->
<template>
    <div class="bg-card-bg p-4 rounded-lg mb-8 flex items-center gap-4 border border-border flex-wrap md:flex-nowrap">
      <select 
        v-model="selectedRange"
        class="bg-background text-text border border-border p-2 rounded cursor-pointer flex-1"
      >
        <option value="day">Aujourd'hui</option>
        <option value="week">Cette semaine</option>
        <option value="month">Ce mois</option>
        <option value="quarter">Ce trimestre</option>
        <option value="year">Cette année</option>
      </select>
      
      <select 
        v-model="compareWith"
        class="bg-background text-text border border-border p-2 rounded cursor-pointer flex-1"
      >
        <option value="none">Sans comparaison</option>
        <option value="previous">Période précédente</option>
        <option value="lastYear">Année précédente</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DateSelector',
    data() {
      return {
        selectedRange: 'month',
        compareWith: 'none'
      }
    },
    watch: {
      selectedRange(newVal) {
        this.$emit('range-changed', newVal)
      },
      compareWith(newVal) {
        this.$emit('compare-changed', newVal)
      }
    }
  }
  </script>