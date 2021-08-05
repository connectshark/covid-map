<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"/>
</template>

<script>
import VueHighcharts from 'vue3-highcharts'
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import time from '../../lib/time'

export default defineComponent({
  components: {
    VueHighcharts
  },
  setup () {
    return new Promise(resolve => {
      const store = useStore()

      const xMin = ref(time.formatter('2021-01-01'))

      const seriesData = computed(() => store.getters.getChartData)

      const chartOptions = computed(() => ({
        chart: {
          type: 'line',
          zoomType: 'x',
          marginRight: 50
        },
        title: {
          text: '每日確診人數',
        },
        xAxis: {
          type: 'datetime',
          min: xMin.value
        },
        yAxis: {
          title: {
            text: '確診人數',
          },
          min: 0
        },
        toolTip: {
          outside: false
        },
        series: [
          {
            name: '新增確診人數',
            data: seriesData.value,
          }
        ]
      }))

      const onRender = () => {
        console.log('Chart rendered')
      }

      watch(seriesData, value => {
        if (value.length > 1) {
          resolve({
            chartOptions,
            onRender,
          })
        }
      })
    })
  }
})

</script>