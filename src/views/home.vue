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
  <div class="report">
    <Suspense>
      <template #default>
        <BarChart/>
      </template>
      <template #fallback>
        <Loading/>
      </template>
    </Suspense>
  </div>
  <div class="report">
    <Suspense>
      <template #default>
        <Az/>
      </template>
      <template #fallback>
        <Loading/>
      </template>
    </Suspense>
  </div>
</div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Report from '../component/report'
import Loading from '../component/loading'
import LineChart from '../component/lineChart'
import BarChart from '../component/barChart'
import Az from '../component/az'

export default {
  components: {
    Report,
    Loading,
    LineChart,
    BarChart,
    Az
  },
  setup () {
    const store = useStore()
    const lastDayData = computed(() => store.getters.getLastData)

    const date = ref('')

    return {
      lastDayData,
      date
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 20px 0;
  .banner{
    padding: 20px 0;
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