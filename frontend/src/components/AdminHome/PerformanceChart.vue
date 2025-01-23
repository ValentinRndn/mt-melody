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
      foreColor: 'var(--text-secondary)',
      background: 'transparent', // Rend l'arrière-plan transparent
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
    grid: {
      borderColor: 'var(--border)', // Couleur des lignes de la grille
      strokeDashArray: 4, // Rend les lignes pointillées
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'var(--text-secondary)'
        }
      }
    },
    theme: {
      mode: 'dark'
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px'
      },
      x: {
        show: false
      }
    }
  }

  const chart = new ApexCharts(document.querySelector("#revenueChart"), options)
  chart.render()
})
</script>