<template>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-6">
      <div class="lg:col-span-2 bg-card-bg rounded-2xl p-6 border border-border">
        <h3 class="text-lg font-semibold mb-4">Performance des sorties</h3>
        <div id="releasesChart"></div>
      </div>
      
      <div class="bg-card-bg rounded-2xl p-6 border border-border">
        <h3 class="text-lg font-semibold mb-4">Distribution par genre</h3>
        <div id="genresChart"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import ApexCharts from 'apexcharts'
  
  onMounted(() => {
    // Performance Chart
    const releasesOptions = {
      series: [{
        name: 'Écoutes',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
        foreColor: 'var(--text)'
      },
      colors: ['var(--primary)'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        }
      },
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
      }
    }
  
    // Genres Chart
    const genresOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        height: 350,
        foreColor: 'var(--text)'
      },
      labels: ['Pop', 'Hip-Hop', 'Rock', 'Électro', 'Autres'],
      colors: ['#00FF66', '#00CC52', '#009933', '#006622', '#003311'],
    }
  
    new ApexCharts(document.querySelector("#releasesChart"), releasesOptions).render()
    new ApexCharts(document.querySelector("#genresChart"), genresOptions).render()
  })
  </script>