<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-toolbar-title>Yet another Tech Blog</v-toolbar-title>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon
        v-if="auth"
        @click="logout()"
        color="red"
        >
        mdi-login
      </v-icon>
      <v-icon
        v-else
        @click="$router.push('login')"
        >
        mdi-login
      </v-icon>
      <template v-slot:extension>
        <v-tabs
          align-with-title
          class="d-none d-sm-flex"
          color="grey darken-1"
        >
          <v-tab v-for="tab of tabs" :key="tab.name" :to="tab.location">
            <v-icon left>
              {{tab.icon}}
            </v-icon>
            {{ tab.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item v-for="tab of tabs" :key="tab.name" :to="tab.location">
            <v-icon left>{{tab.icon}}</v-icon>
            <v-list-item-title>{{ tab.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  data() {
    return{
      drawer: false,
      tabs: [
        {
          name: "Home",
          icon: "mdi-home",
          location: "/"
        },
        {
          name: "Weather",
          icon: "mdi-weather-sunny",
          location: "/weather"
        },
      ]
    }
  },
  computed: {
    ...mapState({ auth: (state) => state.auth.loggedIn }),
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss">


</style>
