<template>
  <div>
    <vue3-chart-js
      :id="'doughnut'"
      :type="'line'"
      ref="chartRef"
      :data="data"
      :options="options"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'home',
  components: {
    Vue3ChartJs,
  },
  setup () {
    const store = useStore()
    const lineData = computed(() => store.getters.lineChartData)
    const chartRef = ref(null)
    const data = {
      datasets:[{
        label: '確診人數',
        borderColor: '#93C5FD',
        borderWidth: 2,
        backgroundColor: '#3B82F6',
        fill: true,
        tension: 0.1,
        data: []
      }]
    }
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: '每日確診人數',
          font: {
            size: 24
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      }
    }

    watch(lineData, value => {
      data.datasets[0].data = value
      chartRef.value.update()
    })
    return {
      options,
      data,
      chartRef
    }
  },
}
</script>