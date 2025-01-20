<template>
    <div class="relative" style="height: 300px">
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import Chart from 'chart.js/auto'
  
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      default: () => ({
        actual: [],
        forecast: []
      })
    }
  })
  
  const chartRef = ref(null)
  let chart = null
  
  const updateChart = () => {
    if (chart) {
      chart.data.labels = [...props.data.actual.labels, ...props.data.forecast.labels]
      chart.data.datasets[0].data = props.data.actual.data
      chart.data.datasets[1].data = [...Array(props.data.actual.data.length).fill(null), ...props.data.forecast.data]
      chart.update()
    }
  }
  
  const createChart = () => {
    const ctx = chartRef.value.getContext('2d')
    
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [...props.data.actual.labels, ...props.data.forecast.labels],
        datasets: [
          {
            label: 'Revenus actuels',
            data: props.data.actual.data,
            borderColor: 'var(--primary)',
            backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Prévisions',
            data: [...Array(props.data.actual.data.length).fill(null), ...props.data.forecast.data],
            borderColor: 'rgba(var(--primary-rgb), 0.5)',
            borderDash: [5, 5],
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(context.raw || 0)
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
                  currency: 'EUR',
                  notation: 'compact'
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