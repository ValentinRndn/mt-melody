<template>
    <div>
      <h3 class="text-lg font-semibold mb-6">Distribution géographique</h3>
      <div class="relative" style="height: 300px">
        <canvas ref="chartRef"></canvas>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import Chart from 'chart.js/auto'
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  })
  
  const chartRef = ref(null)
  let chart = null
  
  const chartColors = [
    '#22c55e', // Vert principal
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d'
  ]
  
  const updateChart = () => {
    if (chart) {
      chart.data.labels = props.data.map(item => item.country)
      chart.data.datasets[0].data = props.data.map(item => item.value)
      chart.update()
    }
  }
  
  const createChart = () => {
    const ctx = chartRef.value.getContext('2d')
    
    chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: props.data.map(item => item.country),
        datasets: [{
          data: props.data.map(item => item.value),
          backgroundColor: chartColors,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#9ca3af',
              padding: 20,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            displayColors: true,
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}%`
              }
            }
          }
        },
        cutout: '70%'
      }
    })
  }
  
  onMounted(() => {
    createChart()
  })
  
  watch(() => props.data, updateChart, { deep: true })
  </script>