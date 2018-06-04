<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view class="container" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppNav from '@/components/AppNav';

export default {
  components: {
    AppNav,
  },
  mounted() {
    this.login(localStorage.token);
  },
  methods: mapActions(['login']),
};
</script>


<style lang="scss">
</style>
