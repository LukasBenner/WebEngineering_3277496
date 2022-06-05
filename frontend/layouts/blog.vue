<template>
  <v-app id="inspire">
    <Header></Header>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-sheet rounded="lg">
              <v-list>
                <v-subheader>Table of Content</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="link of toc"
                    :key="link.id"
                    :to="`#${link.id}`"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="link.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="9">
            <v-sheet min-height="70vh" rounded="lg">
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
import { mapState } from 'vuex'
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  computed: {
    ...mapState({ toc: (state) => state.blog.toc }),
  },
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
