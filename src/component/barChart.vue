<template>
  <div>
    <vue3-chart-js
      :id="'bar'"
      :type="'bar'"
      :data="data"
      :options="options"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import api from '../hook/api'
import time from '../lib/time'
export default {
  name: 'home',
  components: {
    Vue3ChartJs,
  },
  setup () {
    return new Promise(resolve => {
      const groupFilter = (arr, name) => {
        return arr.filter(item => item.a03 === name && time.filter(item.a02, '2021-05-01'))
          .map((item, index, array) => {
            const value = index === 0 ? parseInt(item.a04) : parseInt(item.a04) - parseInt(array[index - 1].a04)
            return {
              x: time.formatter(item.a02),
              y: value
            }
          })
      }
    const options = {
      interaction: {
        intersect: false,
        mode: 'nearest',
        axis: 'x'
      },
      layout: {
        padding: 10
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: '每日施打疫苗人數',
          font: {
            size: 24
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          min: time.formatter('2021-05-01')
        },
        y: {
          stacked: true,
          min: 0,
          title: {
            text: '人數',
            display: true
          }
        }
      }
    }

    const data = {
      datasets:[]
    }
    api.getVaccine()
      .then(res => {
        data.datasets.push({
          label: 'AZ',
          fill: false,
          backgroundColor: '#3B82F6',
          data: groupFilter(res, 'Oxford/AstraZeneca')
        })
        data.datasets.push({
          label: 'Moderna',
          fill: false,
          backgroundColor: '#F9A8D4',
          data: groupFilter(res, 'Moderna')
        })
        data.datasets.push({
          label: '高端',
          fill: false,
          backgroundColor: '#6EE7B7',
          data: groupFilter(res, '高端')
        })
        resolve({
          options,
          data
        })
      })
    })
  }
}
</script>