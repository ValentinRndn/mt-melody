<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <h3 class="text-lg font-semibold mb-4">Performances mensuelles</h3>
      <div id="revenueChart" class="w-full h-[350px]"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import ApexCharts from 'apexcharts'
  
  onMounted(() => {
    const options = {
      series: [{
        name: 'Revenus',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        },
        foreColor: 'var(--text-secondary)'
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
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
      },
      theme: {
        mode: 'dark'
      }
    }
  
    const chart = new ApexCharts(document.querySelector("#revenueChart"), options)
    chart.render()
  })
  </script>