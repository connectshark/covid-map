<template>
  <vue3-chart-js
    :id="'bar'"
    :type="'bar'"
    :data="data"
    :options="options"
  ></vue3-chart-js>
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
      const groupFilter = (arr, name, round) => {
        const group = round === 1 ? 'a04' : 'a05'
        return arr.filter(item => item.a03 === name)
          .map((item, index, array) => {
            const value = index === 0 ? parseInt(item.a04) : parseInt(item[group]) - parseInt(array[index - 1][group])
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
          text: '每日施打AZ疫苗人數',
          font: {
            size: 24
          }
        }
      },
      scales: {
        x: {
          stacked: true
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
        console.log(groupFilter(res, 'Oxford/AstraZeneca', 1))
        data.datasets.push({
          label: 'AZ 第一劑',
          fill: false,
          backgroundColor: '#BE185D',
          data: groupFilter(res, 'Oxford/AstraZeneca', 1)
        })
        data.datasets.push({
          label: 'AZ 第二劑',
          fill: false,
          backgroundColor: '#FBCFE8',
          data: groupFilter(res, 'Oxford/AstraZeneca', 2)
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