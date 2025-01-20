<template>
    <div class="w-full h-full">
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import Chart from 'chart.js/auto'
  
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
  
  const chartRef = ref(null)
  let chart = null
  
  const updateChart = () => {
    if (chart) {
      chart.data.labels = props.data.labels
      chart.data.datasets[0].data = props.data.datasets[0].data
      chart.update()
    }
  }
  
  const createChart = () => {
    const ctx = chartRef.value.getContext('2d')
    
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: props.data.labels,
        datasets: [{
          label: 'Revenus',
          data: props.data.datasets[0].data,
          borderColor: 'var(--primary)',
          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(context.raw)
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(var(--border-rgb), 0.1)'
            },
            ticks: {
              callback: (value) => {
                return new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(value)
              }
            }
          },
          x: {
            grid: {
              display: false
            }
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