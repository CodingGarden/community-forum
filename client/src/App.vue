<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view class="container" />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav';

export default {
  components: {
    AppNav,
  },
};
</script>


<style lang="scss">
</style>
