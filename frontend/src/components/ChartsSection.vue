<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Performance Chart -->
      <div class="bg-card-bg rounded-lg p-6 border border-border shadow hover:shadow-lg transition">
        <h3 class="text-lg font-bold text-text mb-4">Performance des sorties</h3>
        <div id="performanceChart"></div>
      </div>
  
      <!-- Genre Distribution Chart -->
      <div class="bg-card-bg rounded-lg p-6 border border-border shadow hover:shadow-lg transition lg:col-span-2">
        <h3 class="text-lg font-bold text-text mb-4">Distribution par genre</h3>
        <div id="genreChart"></div>
      </div>
    </div>
  </template>
  
  <script>
  import ApexCharts from "apexcharts";
  import "apexcharts/dist/apexcharts.css";

  
  export default {
    mounted() {
      this.renderPerformanceChart();
      this.renderGenreChart();
    },
    methods: {
      renderPerformanceChart() {
        const options = {
          series: [
            {
              name: "Écoutes",
              data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
          ],
          chart: {
            type: "area",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          colors: ["#00FF66"],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.3,
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep"],
          },
          tooltip: {
            theme: "dark",
          },
        };
  
        const chart = new ApexCharts(document.querySelector("#performanceChart"), options);
        chart.render();
      },
      renderGenreChart() {
        const options = {
          series: [44, 55, 13, 43, 22],
          chart: {
            type: "donut",
            height: 350,
          },
          labels: ["Pop", "Hip-Hop", "Rock", "Électro", "Autres"],
          colors: ["#00FF66", "#00CC52", "#009933", "#006622", "#003311"],
          tooltip: {
            theme: "dark",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        };
  
        const chart = new ApexCharts(document.querySelector("#genreChart"), options);
        chart.render();
      },
    },
  };
  </script>
  
  <style>
  /* Les styles pour la section sont principalement gérés par TailwindCSS */
  </style>
  