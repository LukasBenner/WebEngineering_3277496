<template>
  <header>
    <div class="title">
      <nuxt-link to="/">
        <span>My Blog</span>
      </nuxt-link>
    </div>
    <nav>
      <div id="nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/weather">Weather</nuxt-link>
      </div>
      <div v-if="auth" id="auth">
        <a href="#" @click="logout">Logout</a>
        <span>
          {{ $auth.user.email }}
        </span>
      </div>
      <div v-else id="auth">
          <nuxt-link to="/login">Login</nuxt-link>
          <nuxt-link to="/register">Register</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Layout',
    computed: {
      ...mapState({auth: state => state.auth.loggedIn})
    },
    methods:{
      logout(){
        this.$auth.logout();
      }
    }
  }
</script>

<style lang="scss">
header {
  padding: 15px 30px;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  .title {
    color: #212121;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    white-space: nowrap;
  }
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
    margin: 0 15px;
    color: green;
    font-weight: 700;
  }

  #nav {
    display: flex;
  }

  #auth{
    display: flex;
    flex-direction: row;
  }

}

@media only screen and (max-width: 600px) {
  header{
    flex-direction: column;
  }
  nav{
    flex-direction: column;
  }
}

</style>
