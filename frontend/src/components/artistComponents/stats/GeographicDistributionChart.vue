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
          backgroundColor: [
            'rgba(var(--primary-rgb), 0.8)',
            'rgba(var(--primary-rgb), 0.6)',
            'rgba(var(--primary-rgb), 0.4)',
            'rgba(var(--primary-rgb), 0.2)',
            'rgba(var(--primary-rgb), 0.1)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    })
  }
  
  onMounted(() => {
    createChart()
  })
  
  watch(() => props.data, updateChart, { deep: true })
  </script>