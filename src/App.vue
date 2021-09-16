<template>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    store.dispatch('init')
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Mono', monospace, 'openhuninn', 'Noto Sans TC', sans-serif;
  color: rgba(0, 0, 0, 0.84);
  min-height: 100vh;
  background-color: #EDE9FE;
}
</style>
