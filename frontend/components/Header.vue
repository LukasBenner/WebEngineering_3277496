<template>
  <header>
    <div class="title">
      <nuxt-link to="/">
        <span>My Blog</span>
      </nuxt-link>
    </div>
    <nav>
      <div>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/weather">Weather</nuxt-link>
      </div>
      <div>
        <ul v-if="auth">
          <li>
            <a href="#" @click="logout">Logout</a>
          </li>
          <li>
            <span>
              {{ $auth.user.email }}
            </span>
          </li>
        </ul>
        <ul v-else>
          <li>
            <NuxtLink to="/login">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/register">Register</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      auth: this.$auth.loggedIn
    }
  },
  mounted(){
    this.$nuxt.$on('auth', auth => {
      this.auth = auth;
    })
  },
  methods:{
    logout(){
      this.$auth.logout();
      this.auth = false;
    }
  }
}
</script>

<style>
header {
  padding: 15px 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
header .title {
  color: #212121;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
}
nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}
nav a {
  display: block;
  margin: 0 15px;
  color: green;
  font-weight: 700;
}
</style>
