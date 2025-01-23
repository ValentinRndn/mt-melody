<template>
  <div>
    <h3 class="text-lg font-semibold mb-6">Tendances d'écoute</h3>
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
        label: 'Écoutes',
        data: props.data.datasets[0].data,
        borderColor: '#10b981', // Couleur verte claire
        backgroundColor: 'rgba(16, 185, 129, 0.1)', // Vert avec transparence
        tension: 0.4,
        fill: true,
        borderWidth: 2
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 10,
          displayColors: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#9ca3af',
            font: {
              size: 11
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#9ca3af',
            font: {
              size: 11
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      elements: {
        point: {
          radius: 0,
          hoverRadius: 6,
          backgroundColor: '#10b981'
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