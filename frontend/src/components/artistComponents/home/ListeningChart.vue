<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <h3 class="text-lg font-semibold mb-4">Évolution des écoutes</h3>
      <div ref="chartRef" class="w-full h-[350px]"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import ApexCharts from 'apexcharts'
  
  const chartRef = ref(null)
  let chart = null
  
  onMounted(() => {
    const options = {
      series: [{
        name: 'Écoutes',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
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
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
      }
    }
  
    chart = new ApexCharts(chartRef.value, options)
    chart.render()
  
    // Simulation de mises à jour en temps réel
    const interval = setInterval(() => {
      const newData = chart.w.globals.series[0].map(val => 
        val * (1 + (Math.random() - 0.5) * 0.1)
      )
      chart.updateSeries([{ data: newData }])
    }, 30000)
  
    onUnmounted(() => {
      clearInterval(interval)
      chart.destroy()
    })
  })
  </script>