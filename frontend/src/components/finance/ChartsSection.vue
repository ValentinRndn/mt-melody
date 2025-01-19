<!-- components/finance/ChartsSection.vue -->
<template>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-6 mb-8">
      <div 
        v-for="chart in charts"
        :key="chart.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <h3 class="text-lg font-semibold mb-6">{{ chart.title }}</h3>
        <div :id="chart.id" class="w-full h-[350px]"></div>
      </div>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'apexcharts'
  
  export default {
    name: 'ChartsSection',
    data() {
      return {
        charts: [
          {
            id: 'revenueChart',
            title: 'Revenus Mensuels',
            instance: null,
            config: {
              series: [{
                name: 'Revenus',
                data: [30000, 40000, 35000, 50000, 49000, 60000, 70000, 91000, 125000]
              }],
              chart: {
                type: 'area',
                height: 350,
                toolbar: { show: false }
              },
              colors: ['#00FF66'],
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.3
                }
              },
              xaxis: {
                categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
              }
            }
          },
          {
            id: 'paymentDistChart',
            title: 'Distribution des Paiements',
            instance: null,
            config: {
              series: [44, 55, 13, 43],
              chart: {
                type: 'donut',
                height: 350
              },
              labels: ['Virements', 'PayPal', 'Stripe', 'Autres'],
              colors: ['#00FF66', '#00CC52', '#009933', '#006622']
            }
          }
        ]
      }
    },
    mounted() {
      this.initializeCharts()
    },
    beforeDestroy() {
      this.destroyCharts()
    },
    methods: {
      initializeCharts() {
        this.charts.forEach(chart => {
          chart.instance = new ApexCharts(
            document.querySelector(`#${chart.id}`),
            this.getChartOptions(chart.config)
          )
          chart.instance.render()
        })
      },
      destroyCharts() {
        this.charts.forEach(chart => {
          if (chart.instance) {
            chart.instance.destroy()
          }
        })
      },
      getChartOptions(config) {
        return {
          ...config,
          theme: {
            mode: this.isDarkMode ? 'dark' : 'light'
          },
          chart: {
            ...config.chart,
            background: 'transparent',
            foreColor: this.isDarkMode ? '#ffffff' : '#1a1a1a'
          }
        }
      }
    },
    computed: {
      isDarkMode() {
        return !document.documentElement.hasAttribute('data-theme')
      }
    }
  }
  </script>