<template>
  <v-app id="inspire">
    <Header></Header>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheSnackbar />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
  export default {
    components: { Header }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: sans-serif;
}

body {
  background-color: #eee;
}

a {
  text-decoration: none;
}

p {
  margin-bottom: 15px;
}

p:last-of-type {
  margin-bottom: 0;
}
</style>
