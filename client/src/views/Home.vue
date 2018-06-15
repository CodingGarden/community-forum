<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to Community!</h1>
      <p class="lead">A fully open source forum. Made with 💚 by Coding Garden.</p>
      <hr class="my-4">
      <p>This forum is all about community. Be kind! Be helpful! 🌈</p>
      <p class="lead">
        <a
          v-if="!user"
          class="btn btn-danger btn-lg"
          :href="getLoginURL"
          role="button">Login with Google</a>
        <router-link
          class="btn btn-primary btn-lg"
          to="/forum"
          role="button">Go to Forum</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState(['user']),
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google';
      }
      return 'https://community-forum-api.now.sh/auth/google';
    },
  },
};
</script>
