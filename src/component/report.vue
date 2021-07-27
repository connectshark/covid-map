<template>
<div class="report">
  <h2 class="report-title">台灣疫情報告</h2>
  <div class="view-group" v-if="lastDayData">
    <div class="view-item">
      <h3 class="title">累積確診</h3>
      <p class="main">{{lastDayData.a05}}</p>
    </div>
    <div class="view-item">
      <h3 class="title">新增確診</h3>
      <p class="main">+{{lastDayData.a06}}</p>
    </div>
    <div class="view-item">
      <h3 class="title">累積死亡</h3>
      <p class="main">{{lastDayData.a08}}</p>
      <p class="detail">新增死亡數 +{{lastDayData.a09}}</p>
    </div>
    <div class="view-item">
      <h3 class="title">疫苗總接種人數</h3>
      <p class="main">{{lastDayData.a21}}</p>
      <p class="detail">新增疫苗接種劑數 +{{lastDayData.a22}}</p>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
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
@import '@/assets/scss/media.scss';
@import '@/assets/scss/color.scss';
.report{
  width: 90%;
  max-width: 1200px;
  margin: auto;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 20px 0;
  .report-title{
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    line-height: 1.9;
  }
  .view-group{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    .view-item{
      width: 20%;
      margin-bottom: 20px;
      @include desktops {
        width: 40%;
      }
      .title{
        color: #555555;
        font-size: 21px;
        line-height: 1.9;
      }
      .main{
        font-size: 40px;
        line-height: 44px;
      }
      .detail{
        color: #6c757d;
        font-size: 14px;
        line-height: 1.3;
      }
      &:nth-child(1) {
        .main{
          color: $info;
        }
      }
      &:nth-child(2) {
        .main{
          color: $success;
        }
      }
      &:nth-child(3) {
        .main{
          color: $normal;
        }
      }
      &:nth-child(4) {
        .main{
          color: $warning;
        }
      }
    }
  }
}
</style>