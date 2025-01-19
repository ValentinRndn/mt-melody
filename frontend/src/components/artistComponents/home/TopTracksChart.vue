<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <h3 class="text-lg font-semibold mb-4">Top titres</h3>
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
        data: [12500, 9800, 7600, 6200, 4500]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
        foreColor: 'var(--text-secondary)'
      },
      colors: ['var(--primary)'],
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['Summer Vibes', 'Night Drive', 'City Lights', 'Ocean Waves', 'Mountain High']
      }
    }
  
    chart = new ApexCharts(chartRef.value, options)
    chart.render()
  
    // Simulation de mises à jour en temps réel
    const interval = setInterval(() => {
      const newData = chart.w.globals.series[0].map(val => 
        val * (1 + (Math.random() - 0.5) * 0.05)
      )
      chart.updateSeries([{ data: newData }])
    }, 30000)
  
    onUnmounted(() => {
      clearInterval(interval)
      chart.destroy()
    })
  })
  </script>