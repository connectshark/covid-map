<template>
<div class="home">
  <div class="banner">
    <h1>台灣疫情總覽</h1>
    <p v-if="lastDayData">最後更新日期{{lastDayData.a04}}</p>
  </div>
  <div class="report">
  <Suspense>
    <template #default>
      <Report/>
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </Suspense>
  </div>
  <div class="report">
  <Suspense>
    <template #default>
      <LineChart/>
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </Suspense>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Report from '../component/report'
import LineChart from '../component/chart/lineChart'
import Loading from '../component/loading'

export default {
  components: {
    Report,
    LineChart,
    Loading
  },
  setup () {
    const store = useStore()
    const lastDayData = computed(() => store.getters.getLastData)

    return {
      lastDayData
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #446AF1;
  padding: 20px 0;
  .banner{
    padding: 20px 0;
    color: #fff;
    text-align: center;
    h1{
      font-size: 40px;
      font-weight: 500;
      line-height: 1.9;
    }
    p{
      font-size: 14px;
    }
  }
  .report{
    width: 90%;
    max-width: 1200px;
    margin: auto;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 20px 0;
    margin-bottom: 20px;
  }
}
</style>