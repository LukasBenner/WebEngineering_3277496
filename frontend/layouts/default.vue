<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheSnackbar />
  </v-app>
</template>

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
