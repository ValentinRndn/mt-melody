<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <h3 class="text-lg font-semibold mb-4">Distribution des genres</h3>
      <div id="genreChart" class="w-full h-[350px]"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import ApexCharts from 'apexcharts'
  
  onMounted(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        height: 350,
        foreColor: 'var(--text-secondary)'
      },
      labels: ['Pop', 'Hip-Hop', 'Rock', 'Électro', 'Autres'],
      colors: ['#00FF66', '#00CC52', '#009933', '#006622', '#003311'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      theme: {
        mode: 'dark'
      }
    }
  
    const chart = new ApexCharts(document.querySelector("#genreChart"), options)
    chart.render()
  })
  </script>