<template>
<div class="home">
  <div class="banner">
    <h1>台灣疫情總覽</h1>
    <p v-if="lastDayData">最後更新日期{{lastDayData.a04}}</p>
  </div>
  <Report/>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Report from '../component/report'
export default {
  components: {
    Report
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
}
</style>